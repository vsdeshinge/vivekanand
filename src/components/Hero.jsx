// src/sections/Hero.jsx
import { useEffect, useState } from "react";

const HERO_IMG_1 = "/hero/hero2.png"; // left/top image
const HERO_IMG_2 = "/hero/hero1.png"; // right/bottom image
const HERO_BG_SVG = "/hero/herobg.svg"; // transparent SVG

export default function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // preload both hero images
    const img1 = new Image();
    const img2 = new Image();

    img1.src = HERO_IMG_1;
    img2.src = HERO_IMG_2;

    let loaded = 0;
    const handleLoad = () => {
      loaded += 1;
      if (loaded === 2) {
        setImagesLoaded(true);
      }
    };

    img1.onload = handleLoad;
    img2.onload = handleLoad;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, []);

  return (
    <section className="relative bg-[#020617] text-white">
      {/* BACKGROUND SVG */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src={HERO_BG_SVG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617]" />
      </div>

      <div className="relative">
        {/* FULL-WIDTH TEXT BAR (NO STICKY) */}
        <div className="z-20">
          <div className="bg-[#020617]/96 backdrop-blur-sm pt-24 md:pt-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 text-center">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-slate-400">
              Web Development • Designing • Event Management • Motion Graphics
            </p>

            <div className="mt-3 space-y-1">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-text">Thinking made </span>
                <span className="text-white">visible</span>
              </h1>

              <div className="relative w-full flex justify-center mt-2">
                <h2
                  className="
                    text-[22px] md:text-[30px] lg:text-[40px]
                    font-medium leading-tight
                    transform -translate-x-2 md:-translate-x-4
                    relative
                  "
                >
                  <span className="text-white">Visible </span>

                  {/* Right padding added here */}
                  <span className="text-white pr-6 md:pr-10 lg:pr-16 inline-block">
                    MADE
                  </span>

                  {/* Signature word */}
                  <span
                    className="
                      gradient-text corinthia-bold 
                      text-[40px] md:text-[60px] lg:text-[100px]
                    "
                  >
                    Available
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* TWO HERO IMAGES BELOW TEXT */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-20">
          <div className="relative overflow-hidden bg-[#020617]/80 min-h-[40vh]">
            {/* shimmer placeholder while loading */}
            {!imagesLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
            )}

            <div
              className={`grid gap-3 md:gap-4 md:grid-cols-2 transition-opacity duration-700 ${
                imagesLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative">
                <img
                  src={HERO_IMG_1}
                  alt="Maharshi work showcase part 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <img
                  src={HERO_IMG_2}
                  alt="Maharshi work showcase part 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
