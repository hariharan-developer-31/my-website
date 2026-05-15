export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl">
        <div className="text-2xl font-bold tracking-widest">
          AI<span className="text-cyan-400">VERSE</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-white/70">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Services
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        <button className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6 animate-bounce">
          🚀 Future of AI & AR Technology
        </div>

        <h1 className="text-5xl md:text-8xl font-black leading-tight max-w-6xl">
          Transforming
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
            Reality with AI
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
          Experience next-generation Artificial Intelligence and Augmented
          Reality solutions designed for businesses, creators, and futuristic
          digital experiences.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30">
            Explore Platform
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition duration-300 backdrop-blur-xl">
            Watch Demo
          </button>
        </div>

        {/* Floating Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:border-cyan-400/50 transition duration-500 shadow-2xl">
            <div className="text-5xl mb-5">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p className="text-white/60 leading-relaxed">
              Intelligent automation systems powered by machine learning and
              neural networks.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:border-purple-400/50 transition duration-500 shadow-2xl">
            <div className="text-5xl mb-5">🕶️</div>
            <h3 className="text-2xl font-bold mb-4">AR Experience</h3>
            <p className="text-white/60 leading-relaxed">
              Immersive augmented reality experiences for futuristic digital
              interactions.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 hover:border-pink-400/50 transition duration-500 shadow-2xl">
            <div className="text-5xl mb-5">📊</div>
            <h3 className="text-2xl font-bold mb-4">Data Intelligence</h3>
            <p className="text-white/60 leading-relaxed">
              Real-time analytics and smart insights for modern businesses and
              enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-cyan-400">10K+</h2>
            <p className="mt-2 text-white/60">Active Users</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-purple-400">250+</h2>
            <p className="mt-2 text-white/60">AI Projects</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-pink-400">99%</h2>
            <p className="mt-2 text-white/60">Accuracy</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-green-400">24/7</h2>
            <p className="mt-2 text-white/60">AI Support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[40px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Build the Future?
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Launch powerful AI and AR experiences with stunning performance,
            immersive interfaces, and futuristic technology.
          </p>

          <button className="mt-10 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-purple-500/30">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/50 text-sm backdrop-blur-xl">
        © 2026 AIVERSE. All rights reserved.
      </footer>
    </main>
  );
}
