// src/pages/About.jsx
const About = () => {
  return (
    <section className="min-h-[70vh] px-4 py-16 pt-8 md:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start">
        {/* Left: Heading + intro */}
        <div className="space-y-4 md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </p>

          <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
            The guy who loves{" "}
            <span className="text-brand-gradient">building &amp; creating</span>
          </h1>

          <p className="text-sm text-slate-300 md:text-base">
            I&apos;m Maharshi — a freelancer who blends{" "}
            <span className="font-medium text-slate-100">
              web development, design, motion graphics, and event fabrication
            </span>{" "}
            to help brands look sharp and feel memorable. I&apos;ve worked with{" "}
            <span className="font-medium text-slate-100">100+ clients</span> on
            websites, brand identities, launch campaigns, and exhibition experiences.
          </p>

          <p className="text-sm text-slate-300 md:text-base">
            From front-end &amp; back-end builds to complete event setups, I like
            taking messy ideas and turning them into clean, working experiences that
            people actually enjoy using and seeing.
          </p>

          {/* Role pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Web Developer",
              "Graphic Designer",
              "Motion & Video",
              "Event / Expo Fabrication",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Stats + stacks */}
        <div className="space-y-6 md:w-1/2">
          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Clients
              </p>
              <p className="mt-2 text-2xl font-display font-semibold text-brand-gradient">
                100+
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Projects across web, design &amp; events.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                Full-stack &amp; Creative
              </p>
              <p className="mt-1 text-xs text-slate-400">
                From frontend UX to backend logic.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Based In
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                India
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Working with clients anywhere.
              </p>
            </div>
          </div>

          {/* Tech + Tools */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              What I work with
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Web &amp; Backend
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  HTML, CSS, JavaScript, React, Angular, Node.js, Spring Boot,
                  MongoDB, MySQL, PostgreSQL.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Design &amp; Motion
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Illustrator, Photoshop, InDesign, Lightroom, After Effects,
                  Premiere Pro, plus hands-on exhibition &amp; fabrication work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
