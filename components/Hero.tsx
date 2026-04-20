"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base =
    "transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)]";
  const hidden = "opacity-0 translate-y-12";
  const visible = "opacity-100 translate-y-0";

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-cream">
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landscaping_demo_vid.mp4" type="video/mp4" />
        </video>

        {/* Dark centre overlay — keeps text legible without fighting the edge masks */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(13,26,12,0.52) 0%, transparent 100%)",
          }}
        />

        {/* ── Inward masking gradients — all 4 edges fade into cream (#fdfbf7) ── */}

        {/* Top */}
        <div className="absolute top-0 left-0 right-0 h-52 bg-linear-to-b from-cream to-transparent" />

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-linear-to-t from-cream to-transparent" />

        {/* Left */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-64 bg-linear-to-r from-cream to-transparent" />

        {/* Right */}
        <div className="absolute inset-y-0 right-0 w-40 md:w-64 bg-linear-to-l from-cream to-transparent" />
      </div>

      {/* ── Centred content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`${base} ${loaded ? visible : hidden} mb-8`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium bg-gold text-white border border-sage-light/40">
            Award-Winning Landscape Design
          </span>
        </div>

        {/* H1 — clamp guarantees 2–3 lines across all viewports */}
        <h1
          className={`${base} ${loaded ? visible : hidden} font-serif text-white font-bold leading-[1.05] tracking-tight mb-7`}
          style={{
            fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
            transitionDelay: "150ms",
            textShadow: "0 2px 32px rgba(13,26,12,0.45)",
          }}
        >
          Where Nature Becomes
          <br />
          <em className="not-italic text-gold">Living Architecture</em>
        </h1>

        {/* Subheading */}
        <p
          className={`${base} ${loaded ? visible : hidden} text-white/70 max-w-lg mx-auto leading-relaxed mb-12`}
          style={{
            fontSize: "clamp(1rem, 1.35vw, 1.15rem)",
            transitionDelay: "300ms",
            textShadow: "0 1px 12px rgba(13,26,12,0.4)",
          }}
        >
          We sculpt outdoor environments that blur the line between the built
          and the natural — crafted to outlast trends and outlive expectations.
        </p>

        {/* CTAs */}
        <div
          className={`${base} ${loaded ? visible : hidden} flex flex-col sm:flex-row items-center justify-center gap-4`}
          style={{ transitionDelay: "450ms" }}
        >
          <a
            href="/contact"
            className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
          >
            Start Your Project
            <span className="w-7 h-7 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              ↗
            </span>
          </a>

          <a
            href="#portfolio"
            className="group flex items-center gap-2.5 rounded-full bg-white/12 text-white border border-white/25 px-7 py-4 text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/20 active:scale-[0.97]"
          >
            View Our Work
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <span className="text-forest text-[9px] uppercase tracking-[0.35em]">
          Scroll
        </span>
        <div className="w-px h-9 bg-linear-to-b from-forest/60 to-transparent" />
      </div>
    </section>
  );
}
