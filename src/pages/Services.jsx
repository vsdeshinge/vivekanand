// src/pages/Services.jsx

const services = [
  {
    title: "Web Development",
    subtitle: "Frontend • Backend • Full-stack",
    description:
      "Clean, fast and responsive websites built with modern stacks – from landing pages to full web apps.",
    points: [
      "React & Angular frontends",
      "Node.js & Spring Boot APIs",
      "MongoDB, MySQL, PostgreSQL",
      "Portfolio, business & custom tools",
    ],
  },
  {
    title: "Design & Branding",
    subtitle: "Visual identity that feels right",
    description:
      "Brand visuals that look sharp across print, digital and social – built to match your business, not a template.",
    points: [
      "Logos & visual identity",
      "Social media & campaign creatives",
      "Brochures, posters & marketing collaterals",
      "UI layout mockups & design systems",
    ],
  },
  {
    title: "Motion & Video",
    subtitle: "Stories that move",
    description:
      "Short, impactful motion pieces for launches, events and digital campaigns.",
    points: [
      "After Effects motion graphics",
      "Product & brand promo videos",
      "Showreels & event highlight edits",
      "Social reels & ad creatives",
    ],
  },
  {
    title: "Event & Exhibition Fabrication",
    subtitle: "On-ground experiences",
    description:
      "Concept-to-execution support for exhibitions and events, where your brand needs to stand out in the real world.",
    points: [
      "Stall & exhibition hall design",
      "Fabrication coordination & layouts",
      "Experience zones & selfie spots",
      "End-to-end visual consistency with your brand",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-[80vh] px-4 py-16 pt-8 md:px-0">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Services
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
            One team,{" "}
            <span className="text-brand-gradient">
              from code to brand to stage.
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-300 md:text-base">
            We don&apos;t just build websites or just design. We help you connect
            the whole story – from digital presence and visuals to video and
            on-ground event experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-black/10"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm text-slate-200">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gradient" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag chip */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  End-to-end support
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  Freelance / project basis
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
