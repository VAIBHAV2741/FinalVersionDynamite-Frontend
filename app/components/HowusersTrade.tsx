export function HowItWorks() {
  const steps = [
    "Connect your wallet",
    "Track live market prices",
    "Analyze trends",
    "Execute trades instantly",
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-2xl font-semibold mb-10">
        How Trading Works
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 border border-white/10 rounded-lg p-5"
          >
            <span className="text-green-400 font-semibold">
              Step {i + 1}
            </span>
            <p className="text-sm text-gray-300">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
