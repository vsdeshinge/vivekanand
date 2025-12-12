// src/pages/Work.jsx
import { useEffect, useRef } from "react";
import CompaniesSection from "../components/CompaniesSection";
import BookPageFlip from "../components/BookPageFlip";

// smooth infinite horizontal auto-scroller with direction
const AutoScroller = ({
  items,
  speed = 0.7,
  direction = "ltr",
  noCrop = false,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId;
    let scrollPos = 0;

    const setupAndStart = () => {
      if (!el) return;
      const loopWidth = el.scrollWidth / 2;

      if (!loopWidth) return;

      // start from left or right depending on direction
      scrollPos = direction === "rtl" ? loopWidth : 0;
      el.scrollLeft = scrollPos;

      const step = () => {
        if (!el) return;
        const loopWidthNow = el.scrollWidth / 2 || loopWidth;

        if (direction === "rtl") {
          scrollPos -= speed;
          if (scrollPos <= 0) scrollPos = loopWidthNow;
        } else {
          scrollPos += speed;
          if (scrollPos >= loopWidthNow) scrollPos = 0;
        }

        el.scrollLeft = scrollPos;
        frameId = requestAnimationFrame(step);
      };

      frameId = requestAnimationFrame(step);
    };

    setupAndStart();
    return () => frameId && cancelAnimationFrame(frameId);
  }, [items.length, speed, direction]);

  const trackItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-4 overflow-x-auto py-3"
    >
      {trackItems.map((item, idx) => {
        const key = `${item.src || item.href || "item"}-${idx}`;
        const clickable = !!item.href;

        const mediaClass = noCrop
          ? "w-full h-full object-contain"
          : "w-full h-full object-cover";

        // simple: only images here
        const media = (
          <img src={item.src} alt={item.alt || ""} className={mediaClass} />
        );

        const content = (
          <div className="relative w-full h-full group">
            {media}

            {clickable && (
              <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-100 flex items-center gap-1">
                    <span>{item.ctaLabel || "Visit"}</span>
                    <span>↗</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

        const wrapperClasses =
          "flex-shrink-0 w-[384px] h-[256px] bg-black/30 overflow-hidden";

        return clickable ? (
          <a
            key={key}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={wrapperClasses}
          >
            {content}
          </a>
        ) : (
          <div key={key} className={wrapperClasses}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

const Work = () => {
  // WEB ITEMS (clickable)
  const webItems = [
    {
      src: "/web/fashionMockup.png",
      href: "https://fashion.posspole.com",
      alt: "Fashion mockup website",
    },
    {
      src: "/web/chapristoreMockup.png",

      alt: "Chapri Store mockup",
    },
    {
      src: "/web/posspoleMockup.png",
      href: "https://posspole.com",
      alt: "Posspole website mockup",
    },
    {
      src: "/web/reonMockup.png",
      href: "https://reonskills.com",
      alt: "Reon Skills website mockup",
    },
    {
      src: "/web/vceMockup.png",

      alt: "VCE website mockup",
    },
  ];

  // DESIGN ITEMS (images)
  const designItems = [
    { src: "/branding/melangeMockup.jpg", alt: "Melange branding mockup" },
    {
      src: "/branding/revothsavamockup.jpg",
      alt: "Revothsava branding mockup",
    },
    { src: "/branding/fashionMockup.jpg", alt: "Fashion branding mockup" },
    {
      src: "/branding/reonskillsMockup.jpg",
      alt: "Reon Skills branding mockup",
    },
    { src: "/branding/mug_design.jpg", alt: "Custom mug design" },
    {
      src: "/branding/sanjeevanimockup.jpg",
      alt: "Sanjeevani branding mockup",
    },
  ];

  // MOTION ITEMS – thumbnail that opens Google Drive video
  const motionItems = [
    {
      src: "/branding/maye.jpg", // your thumbnail
      href: "https://youtu.be/NkrfACyn4ig?si=7Imlj3vf_IsimOUI",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/reonskills.jpg", // your thumbnail
      href: "https://youtu.be/o9tZNeTvE1E",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/posspole.png", // your thumbnail
      href: "https://youtu.be/6u5xUOYIrSw",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/newYear.png", // your thumbnail
      href: "https://youtu.be/lpXa4gvQdeM",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },

    {
      src: "/branding/womensDay.png", // your thumbnail
      href: "https://youtu.be/iSuCVR8Zsts",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/posspoleVerticles.png", // your thumbnail
      href: "https://youtu.be/UbSn-e2FDRw",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
  ];

  // EVENTS ITEMS (images)
  const eventsItems = [
    {
      src: "/exhibition/reonskils_exhibition.png",
      alt: "Reon Skills exhibition booth",
    },
    { src: "/exhibition/TIE.JPG", alt: "TIE event setup" },
  ];

  return (
    <section id="work" className="px-4 py-10 md:py-14 md:px-0">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* HEADING */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Work
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            100+ clients across{" "}
            <span className="text-brand-gradient">
              web, design, motion & events.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
            These are just slices of the work. Each horizontal strip is a
            different category — drag or let it auto-scroll.
          </p>
        </div>

        {/* WEB SECTION WITH CLICKABLE CARDS */}
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Web Design & Development
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Websites • Dashboards • Product pages
              </p>
            </div>
            <span className="hidden md:block text-xs text-slate-400">
              Click tile to visit site →
            </span>
          </div>

          <AutoScroller items={webItems} speed={0.9} direction="ltr" />
        </div>

        {/* DESIGN & BRANDING */}
        <div className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-white">
            Design & Branding
          </h2>
          <AutoScroller items={designItems} speed={0.7} direction="rtl" />
        </div>

        {/* MOTION & VIDEO – thumbnail linking to Drive */}
        <div className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-white">
            Motion & Video
          </h2>
          <AutoScroller items={motionItems} speed={0.8} direction="ltr" />
        </div>

        {/* EVENT & EXHIBITION */}
        <div className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-white">
            Event & Exhibition
          </h2>
          <AutoScroller
            items={eventsItems}
            speed={0.6}
            direction="rtl"
            noCrop
          />
        </div>
      </div>

      <CompaniesSection />
    </section>
  );
};

export default Work;
