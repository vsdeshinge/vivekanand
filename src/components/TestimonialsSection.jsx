// src/components/TestimonialsSection.jsx

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, D2C Brand",
    quote:
      "Maharshi handled everything from the website UI to launch creatives. He was fast, clear to communicate with, and the final result matched our brand perfectly.",
  },
  {
    name: "Ananya Gupta",
    role: "Marketing Head, Tech Startup",
    quote:
      "We needed a clean product site, demo video, and event booth design on a very tight deadline. He managed all three verticals without dropping quality.",
  },
  {
    name: "Sanjay Mehta",
    role: "Event & Expo Coordinator",
    quote:
      "He understands how stalls work in real life – from layout and fabrication to where people will actually stand and click photos. That made a huge difference.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="px-4 py-16 md:px-0"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            What clients{" "}
            <span className="text-brand-gradient">say about working</span> with
            Us.
          </h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            We work with founders, marketing teams and event coordinators. Here&apos;s
            some feedback from people I&apos;ve collaborated with.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/20"
            >
              {/* Quote mark */}
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient/10">
                <span className="text-xl leading-none text-brand-gradient">
                  “
                </span>
              </div>

              <p className="text-sm text-slate-200">{t.quote}</p>

              <div className="mt-4 h-px bg-gradient-to-r from-slate-700/80 via-slate-800 to-transparent" />

              <div className="mt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Subtext */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            Most of my work comes through repeat clients and word of mouth.
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
            Available for new projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
