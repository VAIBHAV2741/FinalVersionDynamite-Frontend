export function TradingFeatures() {
  const features = [
    {
      title: "Real-Time Price Tracking",
      desc: "Instant updates with millisecond-level accuracy for all major crypto assets.",
    },
    {
      title: "Secure Wallet Integration",
      desc: "Your funds stay protected with encrypted wallet connections.",
    },
    {
      title: "Advanced Market Analytics",
      desc: "Analyze trends, volume, and volatility before placing trades.",
    },
    {
      title: "Fast Trade Execution",
      desc: "Low-latency order execution for high-frequency trading.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-2xl font-semibold mb-10">
        Trading Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 p-5 hover:border-green-500/40 transition"
          >
            <h3 className="font-medium mb-2">{f.title}</h3>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
