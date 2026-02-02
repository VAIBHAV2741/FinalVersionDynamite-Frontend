export default function AboutDynamiteTrade() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-green-400">Dynamite Trade</span>{" "}
            <span className="text-red-400">Works</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A data-driven trading platform that combines real-time market data,
            advanced analytics, and machine learning to help you make smarter
            investment decisions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Real-Time Market Data */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Real-Time Market Data
            </h3>
            <p className="text-gray-300">
              Access live stock and market data with minimal latency. Prices,
              volume, and trends update in real time to ensure you always trade
              with the most accurate information available.
            </p>
          </div>

          {/* Key Metrics & Indicators */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Key Metrics & Indicators
            </h3>
            <p className="text-gray-300">
              We break down complex market data into meaningful key metrics such
              as price momentum, volatility, volume trends, and technical
              indicators to support informed decision-making.
            </p>
          </div>

          {/* In-Depth Analysis */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              In-Depth Market Analysis
            </h3>
            <p className="text-gray-300">
              Dynamite Trade provides detailed analytical insights by combining
              historical data, technical patterns, and trend analysis — all
              presented in a clear and actionable format.
            </p>
          </div>

          {/* Machine Learning Predictions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              ML-Powered Predictions
            </h3>
            <p className="text-gray-300">
              Our machine learning models analyze market behavior to forecast
              potential future movements, trends, and risk factors — helping
              users anticipate changes rather than react to them.
            </p>
          </div>

          {/* User-Centric Insights */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Actionable Insights
            </h3>
            <p className="text-gray-300">
              Instead of raw data, we deliver concise insights tailored to your
              trading strategy, helping you understand what matters most before
              making a move.
            </p>
          </div>

          {/* Reliable Support */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Reliable Platform Support
            </h3>
            <p className="text-gray-300">
              Our platform is built for reliability and scale, with continuous
              monitoring and support to ensure a seamless trading experience.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Turn real-time data into confident trading decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition">
              Explore Markets
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
