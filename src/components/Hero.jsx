// src/sections/Hero.jsx

const heroProjects = [
  { src: "/hero/hero-01.jpg", alt: "Magazine / brochure" },
  { src: "/hero/hero-02.jpg", alt: "Redefine branding" },
  { src: "/hero/hero-03.jpg", alt: "Open book design" },
  { src: "/hero/hero-04.jpg", alt: "Framed posters" },
  { src: "/hero/hero-05.jpg", alt: "Style that feels effortless" },
  { src: "/hero/hero-06.jpg", alt: "Ice cream tub" },
  { src: "/hero/hero-07.jpg", alt: "Brand mockup" },
  { src: "/hero/hero-08.jpg", alt: "Leather belt branding" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#020617] text-white">
      {/* BACKGROUND SVG + dark overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero/hero-bg.svg" // ⬅️ your SVG background
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]" />
      </div>

      <div className="relative">
        {/* FULL-WIDTH STICKY TEXT BAR (just under navbar) */}
        <div className="sticky top-32 z-20 bg-[#020617]/96 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 text-center">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-slate-400">
              Web Development • Designing • Event Management • Motion Graphics
            </p>

            <div className="mt-3 space-y-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                <span className="gradient-text">YOU BRING THE </span>
                <span className="text-white">SPARK</span>
              </h1>
              <h2 className="text-[22px] md:text-[30px] lg:text-[40px] font-semibold leading-tight">
                <span className="gradient-text">WE </span>
                <span className="text-white">SHAPE</span>
                <span className="gradient-text"> THE MOMENT AROUND IT</span>
              </h2>
            </div>
          </div>
        </div>

        {/* GRID: scrolls while bar stays stuck under navbar */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-20">
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-4 auto-rows-[180px] md:auto-rows-[210px]">
            {heroProjects.map((item, i) => (
              <div
                key={i}
                className="group relative h-full w-full overflow-hidden bg-white"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
