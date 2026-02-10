// src/sections/Hero.jsx
import { useEffect, useState } from "react";

const HERO_IMG_1 = "/hero/hero2.png"; // left/top image (priority)
const HERO_IMG_2 = "/hero/hero1.png"; // right/bottom image
const HERO_BG_SVG = "/hero/herobg.svg"; // transparent SVG

export default function Hero() {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Load image 1 first (priority)
    const img1 = new Image();
    img1.decoding = "async";
    img1.src = HERO_IMG_1;

    img1.onload = () => {
      if (cancelled) return;
      setImg1Loaded(true);

      // Then load image 2
      const img2 = new Image();
      img2.decoding = "async";
      img2.src = HERO_IMG_2;

      img2.onload = () => {
        if (cancelled) return;
        setImg2Loaded(true);
      };
      img2.onerror = () => {
        if (cancelled) return;
        setImg2Loaded(true);
      };
    };

    img1.onerror = () => {
      if (cancelled) return;
      // allow UI to show tile 1 as "done" so layout is stable
      setImg1Loaded(true);

      const img2 = new Image();
      img2.decoding = "async";
      img2.src = HERO_IMG_2;

      img2.onload = () => {
        if (cancelled) return;
        setImg2Loaded(true);
      };
      img2.onerror = () => {
        if (cancelled) return;
        setImg2Loaded(true);
      };
    };

    return () => {
      cancelled = true;
      img1.onload = null;
      img1.onerror = null;
    };
  }, []);

  return (
    <section className="relative bg-[#020617] text-white">
      {/* BACKGROUND SVG */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={HERO_BG_SVG}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* TEXT BLOCK */}
        <div className="py-6 text-center md:py-8">
          <p className="text-[6.5px] uppercase tracking-[0.16em] text-slate-400 sm:text-[9.5px] sm:tracking-[0.18em] md:text-xs md:tracking-[0.25em]">
            Web/App Development • Designing • Event Management • Motion Graphics
          </p>

          <div className="mt-1">
            <h1 className="text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
              <span className="gradient-text">Thinking made </span>
              <span className="text-white">visible</span>
            </h1>

            <div className="relative mt-0 flex w-full justify-center">
              <h2
                className="
                  text-[22px] md:text-[30px] lg:text-[72px]
                  font-medium leading-tight
                  transform -translate-x-2 md:-translate-x-10
                  relative
                  -mt-1 md:-mt-2
                "
              >
                <span className="text-white">Visible </span>
                <span className="inline-block pr-4 text-white">MADE</span>

                <span
                  className="
                    gradient-text corinthia-bold
                    text-[40px] md:text-[60px] lg:text-[125px]
                    -ml-[40px] signature-animate
                  "
                >
                  Available
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* TWO HERO IMAGES BELOW TEXT */}
        <div className="pt-3 pb-16 md:pt-4 md:pb-20">
          <div className="relative overflow-hidden bg-[#020617]/80">
            {/* tighter on mobile, normal on desktop */}
            <div className="grid gap-1.5 md:grid-cols-2 md:gap-3">
              {/* TILE 1 */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-950/55">
                {!img1Loaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
                )}

                {/* Taller tiles so "contain" does not look tiny */}
                <div className="h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]">
                  <img
                    src={HERO_IMG_1}
                    alt="Maharshi work showcase part 1"
                    className={`h-full w-full object-contain transition-opacity duration-700 ${
                      img1Loaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>

              {/* TILE 2 */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-950/55">
                {!img2Loaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
                )}

                <div className="h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]">
                  <img
                    src={HERO_IMG_2}
                    alt="Maharshi work showcase part 2"
                    className={`h-full w-full object-contain transition-opacity duration-700 ${
                      img2Loaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* subtle divider feel without big gap */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
