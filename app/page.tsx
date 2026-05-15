export default function TradingBoyHomepage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-black to-cyan-500/20 blur-3xl" />

        {/* Floating Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="text-sm tracking-wide">
                Live Market Analysis & Trading Signals
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Master The
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Trading Game
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Learn advanced trading strategies, market psychology, and high-probability setups with Trading Boy.
              Build confidence in Forex, Crypto, and Stock Market trading.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-green-500/30">
                Start Learning
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300 backdrop-blur-sm">
                Watch Strategy
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h2 className="text-3xl font-black text-green-400">10K+</h2>
                <p className="text-gray-500 text-sm mt-1">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-cyan-400">92%</h2>
                <p className="text-gray-500 text-sm mt-1">Accuracy</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-green-400">24/7</h2>
                <p className="text-gray-500 text-sm mt-1">Market Updates</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-green-500/10">
              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Portfolio Growth</p>
                  <h2 className="text-3xl font-black mt-2">+287.34%</h2>
                </div>

                <div className="bg-green-500/20 px-4 py-2 rounded-xl text-green-400 font-bold">
                  Bullish
                </div>
              </div>

              {/* GRAPH */}
              <div className="relative h-64 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent overflow-hidden border border-white/5">
                <svg
                  viewBox="0 0 500 200"
                  className="absolute inset-0 w-full h-full"
                >
                  <path
                    d="M0 180 Q80 120 150 140 T280 90 T400 50 T500 10"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="4"
                    className="drop-shadow-lg"
                  />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>

              {/* CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:scale-105 transition duration-300">
                  <p className="text-gray-400 text-sm">Bitcoin</p>
                  <h3 className="text-2xl font-black mt-2">$68,420</h3>
                  <p className="text-green-400 text-sm mt-2">+12.4%</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:scale-105 transition duration-300">
                  <p className="text-gray-400 text-sm">NASDAQ</p>
                  <h3 className="text-2xl font-black mt-2">18,982</h3>
                  <p className="text-cyan-400 text-sm mt-2">+5.1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Why Traders Choose Us
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
            Powerful insights, real-time analysis, and modern trading education designed for the next generation of traders.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Signals",
                desc: "Get real-time trading signals and market alerts.",
              },
              {
                title: "Smart Strategies",
                desc: "Learn high-probability setups used by professionals.",
              },
              {
                title: "Risk Management",
                desc: "Protect capital with advanced trading psychology.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-400/40 transition duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-cyan-400 mb-6 mx-auto" />

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-green-500/10 via-black to-cyan-500/10 p-12 md:p-20 text-center">
          <div className="absolute inset-0 backdrop-blur-xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Ready To Become
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                A Profitable Trader?
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of traders learning modern trading systems, risk management, and market structure.
            </p>

            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-green-400 to-cyan-400 text-black font-black text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-green-500/30">
              Join Trading Boy
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
