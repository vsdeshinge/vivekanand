import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const desktopLinkClasses = ({ isActive }) =>
    `text-sm transition ${
      isActive ? "text-white" : "text-slate-200 hover:text-white"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block w-full text-left text-sm ${
      isActive ? "text-white" : "text-slate-100"
    }`;

  return (
    // HARD FIXED NAVBAR, ALWAYS STUCK TO TOP
    <header className="fixed top-0  left-0 right-0 z-50  border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        {/* Left: Logo + wordmark */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-4">
          <div className="flex h-12 w-auto items-center justify-center">
            <img
              src={logo}
              alt="Maharshi logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden flex-col leading-tight sm:flex text-left">
            <span className="font-display text-xl font-semibold tracking-wide text-white">
              Maharshi
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
              Events & Designs
            </span>
          </div>
        </NavLink>

        {/* Right: Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={desktopLinkClasses}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="rounded-full  bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/40 transition hover:shadow-orange-400/60"
          >
            Let&apos;s Talk
          </NavLink>
        </nav>

        {/* Mobile: Burger */}
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-10  w-10 items-center justify-center rounded-full border border-slate-600/70 md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown (also fixed because it's inside header) */}
      <nav
        className={`md:hidden overflow-hidden border-t border-slate-800/80 bg-slate-950/95 transition-all duration-200 ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 py-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={mobileLinkClasses}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mt-1 block w-full rounded-full bg-brand-gradient px-5 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/40"
          >
            Let&apos;s Talk
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
