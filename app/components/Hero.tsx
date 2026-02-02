export default function HeroSection() {
  return (
    <section className="relative px-6 pt-32 pb-24 mb-4 ">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-xs font-medium text-green-400">
          Live Crypto Markets
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Trade Crypto with
          <span className="text-green-400"> Confidence</span>
          <br />
          <span className="text-red-400"> Profit</span> from Every Move
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-gray-300">
          Track real-time prices, analyze market trends, and trade top
          cryptocurrencies with fast execution and full transparency.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-black hover:bg-green-400 transition">
            Start Trading
          </button>

          <button className="rounded-lg border border-red-500/40 px-8 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 transition">
            View Markets
          </button>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-white/10 p-4">
            <p className="text-xs text-gray-400">24h Volume</p>
            <p className="mt-1 text-lg font-semibold text-green-400">$1.2B</p>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <p className="text-xs text-gray-400">Active Traders</p>
            <p className="mt-1 text-lg font-semibold text-green-400">320K+</p>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <p className="text-xs text-gray-400">Top Gainer</p>
            <p className="mt-1 text-lg font-semibold text-green-400">SOL +12%</p>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <p className="text-xs text-gray-400">Top Loser</p>
            <p className="mt-1 text-lg font-semibold text-red-400">ETH 4.8%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
