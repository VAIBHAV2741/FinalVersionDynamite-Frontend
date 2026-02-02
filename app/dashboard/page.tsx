"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, ColorType, ISeriesApi } from "lightweight-charts";
import { Settings, Camera, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

/* --------- BINANCE CRYPTO ASSETS --------- */
const BINANCE_ASSETS = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "BNBUSDT",
  "ADAUSDT",
  "LTCUSDT",
  "XRPUSDT",
  "DOGEUSDT",
  "DOTUSDT",
  "AVAXUSDT",
];

export default function TradePage() {
  const router = useRouter();
  const chartRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const [wsStatus, setWsStatus] = useState<"connected" | "disconnected">(
    "disconnected"
  );
  const [lastUpdate, setLastUpdate] = useState<string>("—");
  const [selectedAsset, setSelectedAsset] = useState("BTCUSDT");
  const [activeOrder, setActiveOrder] = useState<"buy" | "sell" | null>(null);
  const [searchCrypto, setSearchCrypto] = useState("");

  // ---------------- Real-time logs for Order Book ---------------- //
  const [priceLogs, setPriceLogs] = useState<{ time: string; price: number }[]>(
    []
  );

  // ------------------- WebSocket Connector ------------------- //
  const connectWS = (symbol: string, series: ISeriesApi<"Candlestick">) => {
    if (wsRef.current) wsRef.current.close();

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1m`
    );
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected:", symbol);
      setWsStatus("connected");
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const k = msg.k;

      const newPrice = +k.c;
      const timestamp = new Date().toLocaleTimeString();

      // Update candlestick chart
      series.update({
        time: (k.t / 1000) as any,
        open: +k.o,
        high: +k.h,
        low: +k.l,
        close: newPrice,
      });

      // Update price logs (keep last 20 entries)
      setPriceLogs((prev) => [
        { time: timestamp, price: newPrice },
        ...prev.slice(0, 19),
      ]);

      setLastUpdate(timestamp);
    };

    ws.onerror = () => {
      console.error(
        `🔥 WebSocket error | readyState=${ws.readyState} | URL=${ws.url}`
      );
    };

    ws.onclose = () => {
      console.warn("❌ WebSocket disconnected, reconnecting in 1s...");
      setWsStatus("disconnected");
      setTimeout(() => connectWS(symbol, series), 1000);
    };
  };

  // ------------------- Initialize Chart ------------------- //
  useEffect(() => {
    if (!chartRef.current) return;

    console.log("📊 Chart initializing...");

    const chart = createChart(chartRef.current, {
      height: 520,
      layout: {
        background: { type: ColorType.Solid, color: "#0b0e11" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#1e222d" },
        horzLines: { color: "#1e222d" },
      },
      timeScale: { borderColor: "#2b3139", timeVisible: true },
      rightPriceScale: { borderColor: "#2b3139" },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#0ecb81",
      downColor: "#f6465d",
      borderUpColor: "#0ecb81",
      borderDownColor: "#f6465d",
      wickUpColor: "#0ecb81",
      wickDownColor: "#f6465d",
    });

    seriesRef.current = candleSeries;

    // Load initial REST data
    const symbol = selectedAsset;
    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 REST candles loaded for", symbol);
        candleSeries.setData(
          data.map((c: any) => ({
            time: (c[0] / 1000) as any,
            open: +c[1],
            high: +c[2],
            low: +c[3],
            close: +c[4],
          }))
        );
      });

    // Connect WebSocket
    connectWS(symbol, candleSeries);

    return () => {
      wsRef.current?.close();
      chart.remove();
      console.log("🧹 Chart destroyed");
    };
  }, []);

  // ------------------- Handle Symbol Change ------------------- //
  useEffect(() => {
    if (!seriesRef.current) return;

    const symbol = selectedAsset;

    // Load new REST candles
    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        seriesRef.current?.setData(
          data.map((c: any) => ({
            time: (c[0] / 1000) as any,
            open: +c[1],
            high: +c[2],
            low: +c[3],
            close: +c[4],
          }))
        );
      });

    // Clear old logs
    setPriceLogs([]);

    // Connect WS for new symbol
    connectWS(symbol, seriesRef.current);
  }, [selectedAsset]);

  return (
    <div className="min-h-screen bg-[#0b0e11] text-white flex">
      {/* LEFT - CHART */}
      <div className="flex-1 p-4 border-r border-[#000000]">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* 🔽 BINANCE ASSETS DROPDOWN */}
            <select
              value={selectedAsset}
              onChange={(e) => setSelectedAsset(e.target.value)}
              className="bg-[#000000] px-3 py-1 rounded text-sm"
            >
              {BINANCE_ASSETS.map((asset) => (
                <option key={asset}>{asset}</option>
              ))}
            </select>

            {/* WS STATUS */}
            <span
              className={`text-xs font-semibold ${wsStatus === "connected"
                ? "text-green-400"
                : "text-red-400"
                }`}
            >
              ● {wsStatus.toUpperCase()}
            </span>

            <span className="text-xs text-green-300">
              Last tick: {lastUpdate}
            </span>
          </div>

          <div className="flex items-center gap-3 text-green-300">
            <RotateCcw size={18} />
            <Camera size={18} />
            <Settings size={18} />
          </div>
        </div>

        {/* Chart */}
        <div
          ref={chartRef}
          className="w-full rounded-md border border-[#000000]"
        />
      </div>

      {/* MIDDLE - ORDER BOOK (LIVE PRICE LOGS WITH GREEN/RED) */}
      <div className="w-[320px] border-r border-[#000000] p-4 overflow-y-auto h-[520px]">
        <h3 className="text-sm font-semibold mb-3">Order Book (Live Price Logs)</h3>
        {priceLogs.length === 0 && (
          <div className="text-green-300 text-sm">Waiting for ticks...</div>
        )}
        <div className="text-sm flex flex-col gap-1">
          {priceLogs.map((log, idx) => {
            const prevPrice = priceLogs[idx + 1]?.price ?? log.price;
            const isUp = log.price >= prevPrice;

            return (
              <div
                key={idx}
                className={`flex justify-between ${isUp ? "text-green-400" : "text-red-400"
                  }`}
              >
                <span>{log.time}</span>
                <span>{log.price.toFixed(4)}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT - ORDER PANEL */}
      <div className="w-[340px] p-4 flex flex-col gap-4">
        {/* Buy/Sell Toggle Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveOrder(activeOrder === "buy" ? null : "buy")}
            className={`flex-1 py-2 rounded font-semibold transition ${activeOrder === "buy"
              ? "bg-green-600 text-white"
              : "bg-[#000000] text-green-300 hover:bg-[#111111]"
              }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveOrder(activeOrder === "sell" ? null : "sell")}
            className={`flex-1 py-2 rounded font-semibold transition ${activeOrder === "sell"
              ? "bg-red-600 text-white"
              : "bg-[#000000] text-green-300 hover:bg-[#111111]"
              }`}
          >
            Sell
          </button>
        </div>

        {/* Crypto Search Bar */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Search Cryptocurrency</label>
          <input
            type="text"
            placeholder="e.g., Bitcoin, Ethereum"
            value={searchCrypto}
            onChange={(e) => setSearchCrypto(e.target.value)}
            className="w-full bg-[#000000] px-3 py-2 rounded text-sm text-white placeholder-green-300 border border-[#000000] focus:border-green-600 focus:outline-none"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={() => {
            if (searchCrypto.trim() && activeOrder) {
              router.push(
                `/analysis?crypto=${encodeURIComponent(searchCrypto)}&action=${activeOrder}`
              );
            }
          }}
          disabled={!searchCrypto.trim() || !activeOrder}
          className={`w-full py-3 rounded font-semibold transition ${searchCrypto.trim() && activeOrder
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-[#000000] text-green-300 cursor-not-allowed"
            }`}
        >
          Analyze
        </button>

        {/* Predict Price Button */}
        <button
          onClick={() => {
            if (searchCrypto.trim()) {
              router.push(
                `/predict?symbol=${encodeURIComponent(searchCrypto)}`
              );
            }
          }}
          disabled={!searchCrypto.trim()}
          className={`w-full py-3 rounded font-semibold transition ${searchCrypto.trim()
            ? "bg-purple-600 hover:bg-purple-700 text-white" // Using purple to distinguish from Analyze (blue) and Place Order (green)
            : "bg-[#000000] text-green-300 cursor-not-allowed"
            }`}
        >
          Predict Price
        </button>

        {/* Place Order Button */}
        <button
          disabled={!activeOrder}
          className={`w-full py-3 rounded font-semibold transition ${activeOrder
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-[#000000] text-green-300 cursor-not-allowed"
            }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
