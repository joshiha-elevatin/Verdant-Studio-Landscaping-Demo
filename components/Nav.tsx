"use client";

import { useState, useEffect } from "react";

const links = ["Services", "Portfolio", "Process", "About"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating pill nav — detached from top */}
      <nav
        className={`fixed top-6 left-1/2 z-40 -translate-x-1/2 flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[#1c2b1a]/92 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "bg-[#fdfbf7]/88 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.09)]"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-sm font-semibold tracking-tight px-4 py-2 rounded-full transition-colors duration-500 ${
            scrolled ? "text-white" : "text-[#1c2b1a]"
          }`}
        >
          Verdant
        </a>

        <div
          className={`h-4 w-px mx-1 transition-colors duration-500 ${
            scrolled ? "bg-white/15" : "bg-[#1c2b1a]/12"
          }`}
        />

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-xs font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                scrolled
                  ? "text-white/65 hover:text-white hover:bg-white/8"
                  : "text-[#1c2b1a]/65 hover:text-[#1c2b1a] hover:bg-[#1c2b1a]/6"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA — button-in-button architecture */}
        <a
          href="#contact"
          className={`hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] group ${
            scrolled
              ? "bg-[#c8a84b] text-[#1c2b1a] hover:bg-[#d4b355]"
              : "bg-[#1c2b1a] text-white hover:bg-[#2e4528]"
          }`}
        >
          Get a Quote
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px ${
              scrolled ? "bg-[#1c2b1a]/12" : "bg-white/15"
            }`}
          >
            ↗
          </span>
        </a>

        {/* Mobile hamburger — morphs to × */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`md:hidden relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${
            scrolled ? "bg-white/8 text-white" : "bg-[#1c2b1a]/6 text-[#1c2b1a]"
          }`}
        >
          <span
            className={`absolute block h-px w-[18px] bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "w-0 opacity-0" : "w-[18px] opacity-100"
            }`}
          />
          <span
            className={`absolute block h-px w-[18px] bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-[#1c2b1a]/96 backdrop-blur-3xl`}
      >
        <div className="flex flex-col items-center gap-4">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`font-serif text-5xl sm:text-6xl font-medium text-white/90 hover:text-[#c8a84b] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: open ? `${80 + i * 70}ms` : "0ms",
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-8 flex items-center gap-2.5 rounded-full bg-[#c8a84b] text-[#1c2b1a] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] group ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: open ? "360ms" : "0ms" }}
          >
            Get a Quote
            <span className="w-6 h-6 rounded-full bg-[#1c2b1a]/12 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
