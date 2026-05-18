const services = [
  {
    title: "Market Breakdowns",
    description:
      "Clean, focused analysis for major forex, crypto, and index setups with clear directional bias.",
    note: "Daily directional outlook",
  },
  {
    title: "Strategy Frameworks",
    description:
      "Structured playbooks for entries, risk placement, position sizing, and trade management.",
    note: "Rule-based execution model",
  },
  {
    title: "Mentorship Content",
    description:
      "Practical education that develops discipline, journaling habits, and long-term consistency.",
    note: "Weekly learning modules",
  },
  {
    title: "Performance Review",
    description:
      "Focused review templates to identify mistakes, tighten risk, and improve decision quality.",
    note: "Process-first improvement",
  },
];

const testimonials = [
  {
    quote:
      "Trading Boy gave me a process I can trust. My decisions are now structured instead of emotional.",
    name: "Aarav M.",
    role: "Intraday Trader",
  },
  {
    quote:
      "The content is direct, professional, and realistic. It helped me move from random entries to planned setups.",
    name: "Sneha R.",
    role: "Forex Trader",
  },
  {
    quote:
      "I value the clarity the most. Every concept is explained with practical context and risk awareness.",
    name: "Daniel K.",
    role: "Swing Trader",
  },
];

const performanceStats = [
  { value: "12K+", label: "Active Community" },
  { value: "5+", label: "Markets Covered" },
  { value: "93%", label: "Student Satisfaction" },
];

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10"
      viewBox="0 0 76 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 62.5L33 7L46.5 33.5L39.2 47L32.8 34.5L17.8 62.5H72L64.8 48.4H48.6L56 34.7H73.7L80 62.5H4Z"
        fill="url(#brandFill)"
      />
      <defs>
        <linearGradient id="brandFill" x1="4" y1="7" x2="80" y2="62.5">
          <stop stopColor="#49BBFF" />
          <stop offset="1" stopColor="#2EA8FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function TradingBoyHomepage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(46,168,255,0.18),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(126,208,255,0.12),transparent_28%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-10 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-brand-border pb-6">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="font-display text-2xl font-semibold tracking-[0.02em]">
                Trading boy
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-muted">
                Trading Content Brand
              </p>
            </div>
          </div>

          <p className="hidden text-sm uppercase tracking-[0.22em] text-brand-muted md:block">
            Precision. Discipline. Consistency.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="space-y-7">
            <p className="inline-block rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-accent-soft">
              Hero Section
            </p>

            <h1 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Professional trading guidance for focused, data-driven decisions.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
              Trading boy helps traders build a strong market process through
              sharp analysis, strategic frameworks, and practical learning
              designed for real market conditions.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {performanceStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-brand-border bg-brand-surface px-5 py-4"
                >
                  <p className="font-display text-3xl font-semibold text-brand-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-brand-muted">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-brand-border bg-gradient-to-b from-brand-surface-2 to-brand-surface p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-accent-soft">
              Market Focus
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              Structured ideas, not noise.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-brand-muted">
              <li className="rounded-xl border border-brand-border bg-brand-bg-soft px-4 py-3">
                Multi-market context with clear bias and invalidation levels.
              </li>
              <li className="rounded-xl border border-brand-border bg-brand-bg-soft px-4 py-3">
                Strict risk-first communication and disciplined trade plans.
              </li>
              <li className="rounded-xl border border-brand-border bg-brand-bg-soft px-4 py-3">
                Educational content that improves process over prediction.
              </li>
            </ul>
          </aside>
        </section>

        <section id="about" className="grid gap-8 rounded-3xl border border-brand-border bg-brand-surface px-7 py-10 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-accent-soft">
              About Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Built for traders who value process and professionalism.
            </h2>
          </div>
          <div className="space-y-4 text-brand-muted">
            <p className="leading-8">
              Trading boy is a content-driven brand focused on clarity,
              discipline, and long-term market growth. We simplify complex
              market behavior into practical frameworks you can apply daily.
            </p>
            <p className="leading-8">
              Our goal is to help every trader build repeatable execution
              habits through consistent education, honest insights, and
              realistic expectations.
            </p>
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-accent-soft">
              Services
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              What Trading boy provides
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-brand-border bg-brand-surface px-6 py-7"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-accent-soft">
                  {service.note}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-brand-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-accent-soft">
              Testimonials
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              What our traders say
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-brand-border bg-brand-surface px-6 py-7"
              >
                <p className="text-sm leading-7 text-brand-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 font-display text-lg font-semibold text-brand-accent-soft">
                  {testimonial.name}
                </p>
                <p className="text-sm text-brand-muted">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-brand-border bg-brand-surface px-7 py-10 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold">
                Trading boy
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-brand-muted">
                Professional trading content for disciplined learners seeking
                consistency across changing market conditions.
              </p>
            </div>
            <div className="text-sm text-brand-muted md:text-right">
              <p>contact@tradingboy.com</p>
              <p className="mt-2">© 2026 Trading boy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
