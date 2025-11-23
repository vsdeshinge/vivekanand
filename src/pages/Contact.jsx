// src/pages/Contact.jsx

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] px-4 py-16 pt-8 md:px-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
        {/* LEFT: Intro + contact info */}
        <div className="md:w-5/12 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s{" "}
              <span className="text-brand-gradient">build something</span>{" "}
              together.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              Whether you need a website, a campaign, motion visuals, or a full
              exhibition experience, tell me what you&apos;re planning and I&apos;ll get
              back with ideas, timelines and next steps.
            </p>
          </div>

          {/* Quick info */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Direct contact
            </p>
            <div className="space-y-1 text-sm text-slate-200">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <span className="font-medium text-slate-100">
                  maharshivivekanands@gmail.com
                </span>
              </p>
              <p>
                <span className="text-slate-400">Based in:</span>{" "}
                <span className="font-medium text-slate-100">India</span>
              </p>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Usually reply within{" "}
              <span className="text-slate-200">24–48 hours</span> on weekdays.
            </p>
          </div>

          {/* Optional social links */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Social / portfolio
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                Behance / Dribbble
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="md:w-7/12">
          <form className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/30">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Maharshi"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project-type"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                What do you need help with?
              </label>
              <select
                id="project-type"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              >
                <option value="">Select one</option>
                <option value="web">Website / Web App</option>
                <option value="design">Branding / Design</option>
                <option value="motion">Motion / Video</option>
                <option value="events">Event / Exhibition</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Approx. budget (optional)
                </label>
                <select
                  id="budget"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                >
                  <option value="">Not sure yet</option>
                  <option value="low">₹25k – ₹75k</option>
                  <option value="mid">₹75k – ₹2L</option>
                  <option value="high">₹2L+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                >
                  <option value="">Flexible</option>
                  <option value="soon">ASAP / next 2 weeks</option>
                  <option value="month">Within 1–2 months</option>
                  <option value="later">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                Project details
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me a bit about your project, goals, and any links or references you have…"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/40 transition hover:shadow-orange-400/60"
              >
                Send message
              </button>
              <p className="text-xs text-slate-400">
                By sending this, you&apos;re okay with me replying over email or
                WhatsApp for follow-ups.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
