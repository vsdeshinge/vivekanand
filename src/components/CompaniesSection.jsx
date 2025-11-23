// src/components/CompaniesSection.jsx

const companies = [
  {
    name: "Acme Corp",
    role: "Web Design & Development",
    logo: "/companies/acme.png",
  },
  {
    name: "Nova Retail",
    role: "Branding & E-commerce",
    logo: "/companies/nova.png",
  },
  {
    name: "Skyline Events",
    role: "Event & Exhibition Fabrication",
    logo: "/companies/skyline.png",
  },
  {
    name: "Pixel Studios",
    role: "Motion & Video",
    logo: "/companies/pixel.png",
  },
  {
    name: "HealthPlus",
    role: "Product Website & Brand Collateral",
    logo: "/companies/healthplus.png",
  },
  {
    name: "TechHive",
    role: "SaaS UI & Dashboard",
    logo: "/companies/techhive.png",
  },
];

const CompaniesSection = () => {
  return (
    <section
      id="companies"
      className="px-4 py-16 md:px-0"
    >
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
            From early-stage startups to established brands, I&apos;ve collaborated
            with 100+ clients on websites, design systems, launch campaigns and
            on-ground event experiences.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gradient" />
            Open to working with product teams, agencies and founders.
          </div>
        </div>

        {/* Logo / company grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-slate-500">
                    {company.name[0]}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-100">
                  {company.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {company.role}
                </p>
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
