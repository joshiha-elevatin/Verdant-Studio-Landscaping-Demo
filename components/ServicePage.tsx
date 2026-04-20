/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { ServiceData } from "@/lib/services";

export default function ServicePage({ service }: { service: ServiceData }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const items = page.querySelectorAll<HTMLElement>(
      ".reveal-up, .reveal-scale",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="bg-cream overflow-x-hidden">
      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${service.heroSeed}/1920/1080`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.15) contrast(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,26,12,0.48) 0%, rgba(13,26,12,0.78) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #fdfbf7)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-5xl mx-auto">
          <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-gold/18 text-gold border border-gold/28 mb-10">
            Verdant Studio
          </span>
          <h1
            className="font-serif text-white font-bold leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
          >
            {service.name}
          </h1>
          <p
            className="text-white/72 max-w-2xl leading-relaxed mb-12"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}
          >
            {service.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
            >
              Get a Quote
              <span className="w-8 h-8 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                ↗
              </span>
            </Link>
            <a
              href="tel:+442034567890"
              className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <span className="w-9 h-9 rounded-full bg-white/10 border border-white/14 flex items-center justify-center text-base">
                ☏
              </span>
              +44 20 3456 7890
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. OVERVIEW ───────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              What we do
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              {service.overview.headline}
            </h2>
            <p
              className="reveal-up text-forest/55 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              data-delay="200"
            >
              {service.overview.body}
            </p>
          </div>

          <div className="reveal-up grid grid-cols-2 gap-3" data-delay="150">
            {service.overview.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-2xl bg-forest/4 border border-forest/8"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-[9px] shrink-0">
                  ✓
                </span>
                <span className="text-forest/72 text-sm leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CTA BANNER 1 ───────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-forest">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif text-white text-2xl md:text-3xl font-semibold mb-2 leading-tight">
              Ready to get started?
            </p>
            <p className="text-white/45 text-sm">
              Get a free, no-obligation quote for your project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
            >
              Get a Free Quote
              <span className="w-7 h-7 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                ↗
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Or book a consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS / HOW IT WORKS ─────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream-warm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Our approach
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.steps.map((step, i) => (
              <div
                key={step.n}
                className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8"
                data-delay={String(i * 100)}
              >
                <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-8 py-10 h-full flex flex-col">
                  <span className="inline-flex w-10 h-10 rounded-full bg-forest items-center justify-center text-[11px] font-bold text-gold mb-6 shrink-0">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-forest text-xl font-semibold mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-forest/55 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY ────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Recent work
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              {service.name} projects
            </h2>
          </div>

          {/*
            3-col bento gallery — mathematically verified, zero voids:
            Row 1: img[0] col-span-2  + img[1] col-span-1  = 3 ✓
            Row 2: img[0] continues   + img[2] col-span-1  = 3 ✓
            Row 3: img[3] col-span-1  + img[4] col-span-2  = 3 ✓
          */}
          <div
            className="reveal-scale grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-4"
            data-delay="150"
          >
            <div className="md:col-span-2 md:row-span-2 rounded-4xl overflow-hidden h-75 md:h-auto relative group">
              <img
                src={`https://picsum.photos/seed/${service.gallery[0].seed}/1200/800`}
                alt={service.gallery[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-forest/65 to-transparent">
                <p className="text-white/88 text-xs font-medium">
                  {service.gallery[0].caption}
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-55 md:h-auto relative group">
              <img
                src={`https://picsum.photos/seed/${service.gallery[1].seed}/600/400`}
                alt={service.gallery[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-forest/65 to-transparent">
                <p className="text-white/88 text-xs font-medium">
                  {service.gallery[1].caption}
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-55 md:h-auto relative group">
              <img
                src={`https://picsum.photos/seed/${service.gallery[2].seed}/600/400`}
                alt={service.gallery[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-forest/65 to-transparent">
                <p className="text-white/88 text-xs font-medium">
                  {service.gallery[2].caption}
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-55 md:h-auto relative group">
              <img
                src={`https://picsum.photos/seed/${service.gallery[3].seed}/400/300`}
                alt={service.gallery[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-forest/65 to-transparent">
                <p className="text-white/88 text-xs font-medium">
                  {service.gallery[3].caption}
                </p>
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl overflow-hidden h-55 md:h-auto relative group">
              <img
                src={`https://picsum.photos/seed/${service.gallery[4].seed}/900/400`}
                alt={service.gallery[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-forest/65 to-transparent">
                <p className="text-white/88 text-xs font-medium">
                  {service.gallery[4].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER 2 — REQUEST CALL BACK ──────────────── */}
      <section
        className="py-28 px-4 md:px-8 lg:px-16"
        style={{
          background: "linear-gradient(135deg, #1c2b1a 0%, #2e4528 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <p
              className="reveal-up font-serif text-white font-bold leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              data-delay="0"
            >
              Prefer to speak to someone?
            </p>
            <p
              className="reveal-up text-white/50 max-w-md leading-relaxed"
              data-delay="100"
            >
              Book a free 15-minute call with one of our landscape specialists.
              No obligation, just honest advice.
            </p>
          </div>
          <div
            className="reveal-up flex flex-col sm:flex-row items-center gap-4 shrink-0"
            data-delay="150"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
            >
              Request a Call Back
              <span className="w-7 h-7 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                ↗
              </span>
            </Link>
            <a
              href="tel:+442034567890"
              className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <span className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-base">
                ☏
              </span>
              +44 20 3456 7890
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. BENEFITS / WHY CHOOSE VERDANT ─────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Why Verdant
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              What sets us apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8"
                data-delay={String(i * 100)}
              >
                <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-8 py-10 h-full flex flex-col">
                  <span className="inline-flex w-10 h-10 rounded-full bg-gold/15 border border-gold/30 items-center justify-center text-gold text-sm mb-6 shrink-0">
                    {benefit.icon}
                  </span>
                  <h3 className="font-serif text-forest text-xl font-semibold mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-forest/55 text-sm leading-relaxed">
                    {benefit.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream-warm">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Common questions
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              Frequently asked questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className="reveal-up rounded-3xl border border-forest/10 bg-white overflow-hidden"
                data-delay={String(i * 80)}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                >
                  <span className="font-serif text-forest font-medium text-lg leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-forest/15 flex items-center justify-center text-forest/55 text-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`accordion-content px-8 ${openFaq === i ? "open" : ""}`}
                >
                  <p className="text-forest/60 text-sm leading-relaxed pb-6">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CLOSING CTA — "Get a Quote for [Service]" ─────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="p-2 rounded-4xl bg-forest ring-1 ring-forest">
            <div className="relative rounded-3xl overflow-hidden bg-forest-mid shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)] px-8 py-24 md:py-36 md:px-20 flex flex-col items-center text-center">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 65%, rgba(240,192,64,0.11) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <span
                  className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-gold/18 text-gold border border-gold/28 mb-10"
                  data-delay="0"
                >
                  Get Started
                </span>

                <h2
                  className="reveal-up font-serif text-white font-bold leading-[1.04] tracking-tight mb-8 max-w-3xl"
                  style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
                  data-delay="100"
                >
                  Get a Quote for{" "}
                  <em className="not-italic text-gold">{service.name}</em>
                </h2>

                <p
                  className="reveal-up text-white/52 max-w-lg leading-relaxed mb-14"
                  style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
                  data-delay="200"
                >
                  Tell us about your project and we&rsquo;ll respond within one
                  business day with a tailored quote and honest advice.
                </p>

                <div
                  className="reveal-up flex flex-col sm:flex-row items-center gap-4"
                  data-delay="300"
                >
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
                  >
                    Request a Free Quote
                    <span className="w-8 h-8 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      ↗
                    </span>
                  </Link>
                  <a
                    href="tel:+442034567890"
                    className="flex items-center gap-2.5 text-white/62 hover:text-white text-sm font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    <span className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-base">
                      ☏
                    </span>
                    +44 20 3456 7890
                  </a>
                </div>

                <div
                  className="reveal-up flex flex-wrap items-center justify-center gap-6 mt-16 pt-12 border-t border-white/8"
                  data-delay="400"
                >
                  {[
                    "BALI Accredited",
                    "RHS Partner",
                    "APL Member",
                    "ISO 9001 Certified",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
