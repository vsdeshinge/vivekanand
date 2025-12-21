// src/pages/Services.jsx
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "web",
    title: "Web/App Design & Development",
    subtitle: "High-performance websites and dashboards built to convert.",
    video: "/videos/iphone.mp4",
  },
  {
    id: "systems",
    title: "Product UI & Design Systems",
    subtitle: "Reusable components and UI kits that keep teams aligned.",
    video: "/videos/redefine2.mp4",
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    subtitle: "Brand identities, print, and digital assets that look premium.",
    video: "/videos/fathermuller1.mp4",
  },
  {
    id: "logos",
    title: "Logo Design",
    subtitle: "Distinct, memorable logos that fit your brand and audience.",
    video: "/videos/redefine.mp4",
  },
  {
    id: "motion",
    title: "Motion & Video",
    subtitle: "Promos, reels, and edits that feel modern and sharp.",
    video: "/videos/redefine2.mp4",
  },
  {
    id: "events",
    title: "Event & Exhibition Fabrication",
    subtitle: "Concept-to-execution spaces that people notice and remember.",
    video: "/videos/posspole_exhi.mp4",
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
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  return (
    <article ref={wrapRef} className="p-5">
      {/* square video */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/40">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={item.video}
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
      </div>

      <h3 className="mt-4 text-xl font-semibold md:text-2xl">
        <span className="bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200 bg-clip-text text-transparent">
          {item.title}
        </span>
      </h3>

      <p className="mt-2 text-sm text-slate-300 md:text-base">
        {item.subtitle}
      </p>
    </article>
  );
}

export default function Services() {
  return (
    // ↑ increased top padding so page content never kisses the fixed navbar
    <section className="min-h-screen bg-[#020617] px-4 pb-16 pt-32 text-white md:px-0 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        {/* LEFT (sticky) */}
        <aside className="md:col-span-5">
          {/* ↑ increased sticky top so it stays a bit lower than navbar */}
          <div className="space-y-5 md:sticky md:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Services
            </p>

            <h1 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              We build <span className="text-brand-gradient">digital</span>,{" "}
              <span className="text-brand-gradient">visual</span> &{" "}
              <span className="text-brand-gradient">real-world</span>{" "}
              experiences.
            </h1>

            <p className="text-sm text-slate-300 md:text-base">
              A small team led by Maharshi — mixing development, design, motion,
              and fabrication to help brands look sharp and feel memorable.
            </p>

            {/* optional mini tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Web", "Branding", "Motion", "Events", "UI Systems"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-200"
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
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm hover:bg-white/[0.06]"
              >
                Start a project <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT (scrolling stack) */}
        <div className="space-y-6 md:col-span-7">
          {services.map((item, idx) => (
            <ServiceCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
