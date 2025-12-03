// src/pages/About.jsx
import { useEffect, useState, useRef } from "react";

// Count-up animation for stats
const CountUp = ({ value, duration = 1200, suffix = "" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let startTime;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextValue = Math.floor(progress * value);
      setCurrent(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, duration]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
};

// Fade + slide observer hook (TOP LEVEL, not inside CountUp)
const useInView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return [ref, isVisible];
};

const About = () => {
  // left block
  const [leftRef, leftVisible] = useInView();
  // right block
  const [rightRef, rightVisible] = useInView();

  return (
    <section className="min-h-[70vh] px-4 py-16 pt-8 md:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start">
        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className={`md:w-1/2 space-y-4 fade-slide-in-left ${
            leftVisible ? "visible-block" : ""
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </p>

          <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
            The team that loves{" "}
            <span className="text-brand-gradient">building &amp; creating</span>
          </h1>

          <p className="text-sm text-slate-300 md:text-base">
            We&apos;re a team led by Maharshi — blending{" "}
            <span className="font-medium text-slate-100">
              web development, design, motion graphics, and event fabrication
            </span>{" "}
            to help brands look sharp and feel memorable.
          </p>

          <p className="text-sm text-slate-300 md:text-base">
            Together we&apos;ve worked with{" "}
            <span className="font-medium text-slate-100">100+ clients</span> on
            websites, brand identities, launch campaigns, and exhibition setups.
          </p>

          {/* Role pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Web Development",
              "Brand & Graphic Design",
              "Motion & Video",
              "Event / Expo Fabrication",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={rightRef}
          className={`md:w-1/2 space-y-6 fade-slide-in-right ${
            rightVisible ? "visible-block" : ""
          }`}
        >
          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                "Clients",
                <CountUp key="clients" value={100} suffix="+" />,
                "Projects across web, design & events.",
              ],
              ["Focus", "Full-stack & Creative", "From frontend UX to backend logic."],
              ["Based In", "India", "Working with clients anywhere."],
            ].map(([title, stat, desc], i) => (
              <div
                key={i}
                className={`rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 fade-slide-in-up ${
                  rightVisible ? "visible-block" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {title}
                </p>
                <p className="mt-2 text-2xl font-display font-semibold text-brand-gradient">
                  {stat}
                </p>
                <p className="mt-1 text-xs text-slate-400">{desc}</p>
              </div>
            ))}
          </div>

          {/* Tools + Tech */}
          <div
            className={`space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 fade-slide-in-up ${
              rightVisible ? "visible-block" : ""
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              What we work with
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Web &amp; Backend
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  HTML, CSS, JavaScript, React, Angular, Node.js, Spring Boot,
                  MongoDB, MySQL, PostgreSQL.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Design &amp; Motion
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Illustrator, Photoshop, InDesign, Lightroom, After Effects,
                  Premiere Pro, plus custom fabrication & expo layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
