"use client";

import { useEffect, useState, Suspense } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

function generatePriceSeries(price: number, volatility: number, points = 80) {
  let p = price;
  return Array.from({ length: points }, () => {
    p += p * ((Math.random() - 0.5) * volatility * 0.012);
    return Number(p.toFixed(2));
  });
}

function AnalysisContent() {
  const params = useSearchParams();
  const crypto = params.get("crypto");
  const action = params.get("action");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!crypto || !action) return;
    fetch(`/api/analysis?crypto=${crypto}&action=${action}`)
      .then((r) => r.json())
      .then(setData);
  }, [crypto, action]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center text-green-300">
        Loading market intelligence…
      </div>
    );
  }

  /* -------- DERIVED DATA -------- */
  const momentum =
    data.change_24h * 0.5 +
    data.change_7d * 0.3 +
    data.change_30d * 0.2;

  const support = data.atl * 1.18;
  const resistance = data.ath * 0.87;
  const volumeB = (data.volume_24h / 1e9).toFixed(2);
  const isBullish = momentum >= 0;

  const priceSeries = generatePriceSeries(
    data.current_price,
    data.volatility
  );

  /* -------- TAILORED RECOMMENDATION -------- */
  const recommendation = isBullish
    ? `Market momentum is positive with moderate volatility. Buying near support (${support.toFixed(
        2
      )}) could offer a favorable risk-reward setup. Avoid chasing breakouts.`
    : `Bearish pressure detected with elevated downside risk. Price rejection near resistance (${resistance.toFixed(
        2
      )}) suggests caution. Wait for confirmation before entry.`;

  /* -------- CHART -------- */
  const chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: "transparent",
      height: 320,
    },
    title: { text: undefined },
    xAxis: { visible: false },
    yAxis: {
      gridLineColor: "#1F2933",
      labels: { style: { color: "#9CA3AF" } },
    },
    tooltip: {
      backgroundColor: "#020617",
      borderColor: "#1F2933",
      style: { color: "#E5E7EB" },
    },
    series: [
      {
        type: "area",
        data: priceSeries,
        color: isBullish ? "#22C55E" : "#EF4444",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [
              0,
              isBullish
                ? "rgba(34,197,94,0.35)"
                : "rgba(239,68,68,0.35)",
            ],
            [1, "rgba(0,0,0,0)"],
          ],
        },
        lineWidth: 2,
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  };

  const Card = ({
    label,
    value,
    positive,
  }: {
    label: string;
    value: string;
    positive?: boolean;
  }) => (
    <div className="bg-[#000000] border border-[#000000] rounded-xl p-4">
      <div className="text-xs text-green-300">{label}</div>
      <div
        className={clsx(
          "text-lg font-semibold mt-1",
          positive === undefined
            ? "text-green-400"
            : positive
            ? "text-green-400"
            : "text-red-400"
        )}
      >
        {value}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#000000] text-white p-5 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold">
            {data.name} ({data.symbol})
          </h1>
          <p className="text-xs text-green-300">
            Institutional-grade market analysis
          </p>
        </div>

        <button
          className={clsx(
            "px-5 py-2 rounded-lg text-sm font-medium transition",
            isBullish
              ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
              : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
          )}
        >
          Predict Price →
        </button>
      </div>

      {/* TOP METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card label="Current Price" value={`$${data.current_price}`} />
        <Card
          label="24h Change"
          value={`${data.change_24h}%`}
          positive={data.change_24h >= 0}
        />
        <Card label="Momentum Score" value={momentum.toFixed(2)} positive={isBullish} />
        <Card label="Volatility" value={`${data.volatility}%`} positive={data.volatility < 55} />
      </div>

      {/* SUPPORT / RESISTANCE / VOLUME */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card label="Support Level" value={`$${support.toFixed(2)}`} />
        <Card label="Resistance Level" value={`$${resistance.toFixed(2)}`} />
        <Card label="24h Volume" value={`${volumeB}B`} />
        <Card label="Market Rank" value={`#${data.rank}`} />
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHART */}
        <div className="lg:col-span-2 bg-[#000000] border border-[#000000] rounded-xl p-5">
          <div className="text-sm text-green-300 mb-3">
            Price Action (Volatility-Adjusted)
          </div>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>

        {/* INSIGHTS */}
        <div className="bg-[#000000] border border-[#000000] rounded-xl p-5 flex flex-col">
          <div
            className={clsx(
              "text-lg font-semibold",
              isBullish ? "text-green-400" : "text-red-400"
            )}
          >
            {data.trend}
          </div>

          <p className="text-sm text-green-300 mt-4 leading-relaxed">
            {recommendation}
          </p>

          <div className="mt-auto text-xs text-green-300 pt-4">
            Generated: {new Date(data.generated_on).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center text-green-300">
        Loading analysis environment...
      </div>
    }>
      <AnalysisContent />
    </Suspense>
  );
}

