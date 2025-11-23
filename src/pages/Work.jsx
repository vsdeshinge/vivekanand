// src/pages/Work.jsx
import { useEffect, useRef } from "react";
import CompaniesSection from "../components/CompaniesSection";


// smooth infinite horizontal auto-scroller with direction
const AutoScroller = ({ images, speed = 0.7, direction = "ltr" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId;
    let scrollPos = 0;

    const setupAndStart = () => {
      if (!el) return;
      const loopWidth = el.scrollWidth / 2; // because we duplicate images

      if (!loopWidth) return;

      // start position: ltr from 0, rtl from end
      scrollPos = direction === "rtl" ? loopWidth : 0;
      el.scrollLeft = scrollPos;

      const step = () => {
        if (!el) return;

        const loopWidthNow = el.scrollWidth / 2 || loopWidth;

        if (direction === "rtl") {
          scrollPos -= speed;
          if (scrollPos <= 0) {
            scrollPos = loopWidthNow;
          }
        } else {
          scrollPos += speed;
          if (scrollPos >= loopWidthNow) {
            scrollPos = 0;
          }
        }

        el.scrollLeft = scrollPos;
        frameId = requestAnimationFrame(step);
      };

      frameId = requestAnimationFrame(step);
    };

    setupAndStart();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [images.length, speed, direction]);

  // duplicate images so it feels continuous
  const trackImages = [...images, ...images];

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-4 overflow-x-auto py-3"
    >
      {trackImages.map((src, idx) => (
        <div
          key={`${src}-${idx}`}
          className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const Work = () => {
  // 🔁 REPLACE these with your real image paths later
  const webImages = [
    "/works/web/web1.jpg",
    "/works/web/web2.jpg",
    "/works/web/web3.jpg",
    "/works/web/web4.jpg",
  ];

  const designImages = [
    "/works/design/design1.jpg",
    "/works/design/design2.jpg",
    "/works/design/design3.jpg",
  ];

  const motionImages = [
    "/works/motion/motion1.jpg",
    "/works/motion/motion2.jpg",
    "/works/motion/motion3.jpg",
  ];

  const eventsImages = [
    "/works/events/event1.jpg",
    "/works/events/event2.jpg",
    "/works/events/event3.jpg",
  ];

  return (
    <section
      id="work"
      className="min-h-[80vh] px-4 py-16 pt-8 md:px-0"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Work
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            100+ clients across{" "}
            <span className="text-brand-gradient">
              web, design, motion &amp; events.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            These are just slices of the kind of work I&apos;ve done. Each
            horizontal strip is a different vertical – you can drag or let it
            auto-scroll.
          </p>
        </div>

        {/* Web Design / Dev */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Web Design &amp; Development
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Websites • Dashboards • Product pages
              </p>
            </div>
            <div className="hidden flex-col items-end gap-1 text-xs md:flex">
              <span className="text-slate-400">
                Drag sideways or watch it move →
              </span>
              <button
                type="button"
                className="text-[11px] text-slate-300 underline underline-offset-4 hover:text-white"
              >
                View more
              </button>
            </div>
          </div>

          <AutoScroller images={webImages} speed={0.9} direction="ltr" />
        </div>

        {/* Design / Branding */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Design &amp; Branding
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Logos • Social creatives • Print
              </p>
            </div>
            <div className="hidden flex-col items-end gap-1 text-xs md:flex">
              <span className="text-slate-400">
                Identity, campaigns &amp; brand kits
              </span>
              <button
                type="button"
                className="text-[11px] text-slate-300 underline underline-offset-4 hover:text-white"
              >
                View more
              </button>
            </div>
          </div>

          <AutoScroller images={designImages} speed={0.7} direction="rtl" />
        </div>

        {/* Motion / Video */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Motion &amp; Video
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Promos • Reels • Event edits
              </p>
            </div>
            <div className="hidden flex-col items-end gap-1 text-xs md:flex">
              <span className="text-slate-400">
                Built with After Effects &amp; Premiere Pro
              </span>
              <button
                type="button"
                className="text-[11px] text-slate-300 underline underline-offset-4 hover:text-white"
              >
                View more
              </button>
            </div>
          </div>

          <AutoScroller images={motionImages} speed={0.8} direction="ltr" />
        </div>

        {/* Events / Exhibitions */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Event &amp; Exhibition Fabrication
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Stalls • Experiences • Installations
              </p>
            </div>
            <div className="hidden flex-col items-end gap-1 text-xs md:flex">
              <span className="text-slate-400">
                Real spaces where people click photos
              </span>
              <button
                type="button"
                className="text-[11px] text-slate-300 underline underline-offset-4 hover:text-white"
              >
                View more
              </button>
            </div>
          </div>

          <AutoScroller images={eventsImages} speed={0.6} direction="rtl" />
        </div>
      </div>
       <CompaniesSection />
    </section>
  );
};

export default Work;
