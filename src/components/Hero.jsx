// src/sections/Hero.jsx
import { useEffect, useState } from "react";

const HERO_DESKTOP_IMAGE = "/hero/hero.png"; // desktop
const HERO_MOBILE_IMAGE = "/hero/herov.png"; // mobile
const HERO_BG_SVG = "/hero/herobg.svg"; // transparent SVG

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // preload both versions
    const desktop = new Image();
    const mobile = new Image();

    desktop.src = HERO_DESKTOP_IMAGE;
    mobile.src = HERO_MOBILE_IMAGE;

    desktop.onload = mobile.onload = () => setImageLoaded(true);

    return () => {
      desktop.onload = null;
      mobile.onload = null;
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
        {/* FULL-WIDTH STICKY TEXT BAR */}
        <div className="sticky top-0 z-20">
          <div className="bg-[#020617]/96 backdrop-blur-sm pt-24 md:pt-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 text-center">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-slate-400">
              Web Development • Designing • Event Management • Motion Graphics
            </p>

            <div className="mt-3 space-y-1">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-text">YOU BRING THE </span>
                <span className="text-white">SPARK</span>
              </h1>
              <h2 className="text-[22px] md:text-[30px] lg:text-[40px] font-medium leading-tight">
                <span className="gradient-text">We </span>
                <span className="text-white">SHAPE</span>
                <span className="gradient-text"> the MOMENT Around IT</span>
              </h2>
            </div>
          </div>
        </div>

        {/* BIG IMAGE BELOW TEXT (hero.png desktop, herov.png mobile) */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#020617]/80 min-h-[60vh] flex items-center justify-center">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
            )}

            <picture>
              {/* mobile first */}
              <source srcSet={HERO_MOBILE_IMAGE} media="(max-width: 767px)" />
              {/* desktop */}
              <source srcSet={HERO_DESKTOP_IMAGE} media="(min-width: 768px)" />
              <img
                src={HERO_DESKTOP_IMAGE}
                alt="Maharshi work showcase"
                className={`w-full h-auto transition-opacity duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
