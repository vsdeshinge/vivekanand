// src/pages/Services.jsx
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "web",
    title: "Web Design & Development",
    subtitle:
      "Fast, clean, conversion-focused sites + dashboards built to scale.",
    video: "/videos/redefine.mp4",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    subtitle:
      "Logos, identity systems, print & digital assets that feel premium.",
    video: "/services/branding.mp4",
  },
  {
    id: "motion",
    title: "Motion & Video",
    subtitle: "Reels, promos, explainers — edits that feel sharp and modern.",
    video: "/services/motion.mp4",
  },
  {
    id: "events",
    title: "Event & Exhibition Fabrication",
    subtitle:
      "From concept to execution — spaces people remember and photograph.",
    video: "/services/events.mp4",
  },
  {
    id: "systems",
    title: "Product & UI Systems",
    subtitle: "Design systems + UI kits that keep teams consistent and faster.",
    video: "/services/systems.mp4",
  },
];

// lightweight: autoplay on view (prevents mobile playing all videos at once)
function useInViewVideo() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.55 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, active];
}

function ServiceCard({ item, index }) {
  const [wrapRef, active] = useInViewVideo();
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (active) {
      // try play (mobile requires muted + playsInline)
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  return (
    <article ref={wrapRef} className="  p-5 md:p-6">
      {/* square video */}
      <div className="relative aspect-square w-full overflow-hidden bg-black/40">
        <video
          ref={videoRef}
          className="h-full w-full object-cover "
          src={item.video}
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
      </div>

      <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-sm md:text-base text-slate-300">
        {item.subtitle}
      </p>
    </article>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-4 py-16 md:px-0">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-12">
        {/* LEFT (sticky) */}
        <aside className="md:col-span-5">
          <div className="md:sticky md:top-24 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Services
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              We build <span className="text-brand-gradient">digital</span>,{" "}
              <span className="text-brand-gradient">visual</span> &{" "}
              <span className="text-brand-gradient">real-world</span>{" "}
              experiences.
            </h1>

            <p className="text-sm md:text-base text-slate-300">
              A small team led by Maharshi — mixing development, design, motion,
              and fabrication to help brands look sharp and feel memorable.
            </p>

            {/* optional mini tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Web", "Branding", "Motion", "Events", "UI Systems"].map(
                (t) => (
                  <span
                    key={t}
                    className="border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            {/* optional CTA */}
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.04] px-4 py-2 text-sm hover:bg-white/[0.06]"
              >
                Start a project <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT (scrolling stack) */}
        <div className="md:col-span-7 space-y-6">
          {services.map((item, idx) => (
            <ServiceCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
