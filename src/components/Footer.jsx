// src/components/Footer.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-auto items-center justify-center">
                <img
                  src={logo}
                  alt="Maharshi logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold tracking-wide text-white">
                  VIVEKANAND
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  Shridhar Deshinge
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              web developer, designer, motion editor and event
              fabrication partner for brands that want clean builds and sharp
              visuals.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-200">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gradient" />
              Available for select projects &amp; collaborations.
            </div>
          </div>

          {/* Quick links */}
          <div className="text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
              <Link to="/work" className="hover:text-white">
                Work
              </Link>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Verticals */}
          <div className="text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              What I work on
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              <span>Web design &amp; development</span>
              <span>Branding &amp; graphic design</span>
              <span>Motion &amp; video editing</span>
              <span>Event &amp; exhibition fabrication</span>
            </div>
          </div>

          {/* Contact / Social */}
          <div className="text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <div className="mt-3 space-y-1.5">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <span className="font-medium text-slate-100">
                  maharshivivekanands@gmail.com
                </span>
              </p>
              <p>
                <span className="text-slate-400">Based in:</span>{" "}
                <span className="font-medium text-slate-100">India</span>
              </p>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              Social
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300 hover:border-slate-500"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300 hover:border-slate-500"
              >
                Behance
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300 hover:border-slate-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500 md:flex-row">
          <p>© {year} Vivekanand. All rights reserved.</p>
          <p>
            Designed &amp; built with{" "}
            <span className="text-brand-gradient">care</span> in React &amp;
            Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
