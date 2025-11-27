// src/components/CompaniesSection.jsx

const companies = [
  {
    name: "REON Skills",
    role: "Web Design & Development",
    logo: "/companies/reonskills.svg",
  },
  {
    name: "POSSPOLE",
    role: "Branding & E-commerce",
    logo: "/companies/posspole.svg",
  },
  {
    name: "Redefine",
    role: "Event & Exhibition Fabrication",
    logo: "/companies/redefine.svg",
  },
  {
    name: "Pixel Studios",
    role: "Motion & Video",
    logo: "/companies/revothasava.svg",
  },
  {
    name: "HealthPlus",
    role: "Product Website & Brand Collateral",
    logo: "/companies/vces.svg",
  },
  {
    name: "TechHive",
    role: "SaaS UI & Dashboard",
    logo: "/companies/fathermuller.jpg",
  },
  {
    name: "TechHive",
    role: "SaaS UI & Dashboard",
    logo: "/companies/omkar.svg",
  },
  {
    name: "TechHive",
    role: "SaaS UI & Dashboard",
    logo: "/companies/sanjeevani.svg",
  },
  {
    name: "TechHive",
    role: "SaaS UI & Dashboard",
    logo: "/companies/Chesney.png",
  },
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="px-4 py-16 md:px-0">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Companies
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            Brands &amp; teams I&apos;ve{" "}
            <span className="text-brand-gradient">worked with.</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            From early-stage startups to established brands, I&apos;ve
            collaborated with 100+ clients on websites, design systems, launch
            campaigns and on-ground event experiences.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gradient" />
            Open to working with product teams, agencies and founders.
          </div>
        </div>

        {/* Logo grid – separate white boxes with orange gradient border */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-2xl bg-[linear-gradient(120deg,#fe5000,#ffb347)] p-[1px] shadow-[0_14px_40px_rgba(15,23,42,0.45)]"
            >
              <div className="flex items-center justify-center rounded-[1rem] bg-white/95 px-6 py-4 transition-transform duration-200 hover:-translate-y-1">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 sm:max-h-12 w-auto max-w-full object-contain opacity-90 transition-transform transition-opacity duration-200 hover:opacity-100 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 100+ clients note */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            This is just a small sample – there are many more projects across
            different industries.
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
            100+ clients &amp; counting
          </span>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
