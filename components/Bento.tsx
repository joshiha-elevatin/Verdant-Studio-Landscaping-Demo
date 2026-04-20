/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

function useReveal(sectionRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(
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
      { threshold: 0.08 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [sectionRef]);
}

export default function Bento() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span
            className="reveal-up inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium bg-forest/7 text-sage mb-5"
            data-delay="0"
          >
            Our Work
          </span>
          <h2
            className="reveal-up font-serif text-forest font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            data-delay="80"
          >
            Landscapes built to
            <br />
            transcend the ordinary
          </h2>
        </div>

        {/*
          12-col bento. Dense fill — zero voids.
          Row 1: A(7) + B(5) = 12
          Row 2: A(7) + C(5) = 12
          Row 3: D(4) + E(8) = 12
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-flow-dense gap-3 lg:gap-4 auto-rows-[280px] lg:auto-rows-[260px]">
          {/* Card A — hero image, row-span-2 */}
          <div
            className="col-span-1 lg:col-span-7 lg:row-span-2 reveal-scale"
            data-delay="100"
          >
            {/* Double-bezel outer shell */}
            <div className="h-full p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/9">
              {/* Inner core */}
              <div className="relative h-full rounded-3xl overflow-hidden bg-forest">
                <img
                  src="https://picsum.photos/seed/aerial-garden/800/600"
                  alt="The Ashwood Estate aerial view"
                  className="absolute inset-0 w-full h-full object-cover opacity-78 transition-transform duration-1200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                  style={{ filter: "contrast(1.1) saturate(0.88)" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest/85 via-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div>
                    <p className="text-gold text-[9px] uppercase tracking-[0.22em] mb-1.5">
                      Featured Project
                    </p>
                    <h3 className="font-serif text-white text-2xl font-semibold">
                      The Ashwood Estate
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      Surrey, United Kingdom
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-white text-4xl font-bold">
                      220+
                    </p>
                    <p className="text-white/45 text-[9px] uppercase tracking-[0.16em] mt-0.5">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card B — Landscape Architecture */}
          <div className="col-span-1 lg:col-span-5 reveal-up" data-delay="140">
            <div className="h-full p-2 rounded-4xl bg-forest ring-1 ring-forest">
              <div className="h-full rounded-3xl p-7 flex flex-col justify-between bg-forest-mid shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <div>
                  <span className="inline-block rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-medium bg-white/10 text-white/55 mb-5">
                    Specialty
                  </span>
                  <h3 className="font-serif text-white text-2xl font-semibold leading-snug">
                    Landscape
                    <br />
                    Architecture
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white/48 text-xs leading-relaxed max-w-[58%]">
                    From spatial planning to final planting, every detail
                    considered as one.
                  </p>
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-forest font-medium text-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card C — Awards */}
          <div className="col-span-1 lg:col-span-5 reveal-up" data-delay="190">
            <div className="h-full p-2 rounded-4xl bg-gold/10 ring-1 ring-gold/22">
              <div className="h-full rounded-3xl p-7 flex flex-col justify-between bg-cream shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)]">
                <div>
                  <span className="inline-block rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-medium bg-gold/14 text-gold-dark mb-5">
                    Recognition
                  </span>
                  <p className="font-serif text-forest text-5xl font-bold">
                    18
                  </p>
                  <p className="text-sage-muted text-sm mt-1.5 font-medium">
                    Industry Awards
                  </p>
                </div>
                <p className="text-sage-muted text-xs leading-relaxed">
                  BALI National Landscape Awards, RHS Chelsea Flower Show, and
                  more.
                </p>
              </div>
            </div>
          </div>

          {/* Card D — Brand statement */}
          <div className="col-span-1 lg:col-span-4 reveal-up" data-delay="240">
            <div className="h-full p-2 rounded-4xl bg-forest ring-1 ring-forest">
              <div className="relative h-full rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/moss-stone/400/300"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "saturate(0.55) contrast(1.1)",
                    opacity: 0.38,
                  }}
                />
                <div className="relative z-10 h-full p-7 flex flex-col justify-between">
                  <p className="font-serif text-white/90 text-xl font-medium italic leading-snug">
                    {"Where nature becomes living architecture."}
                  </p>
                  <p className="text-white/35 text-[9px] uppercase tracking-[0.22em]">
                    Verdant Studio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card E — Client voice */}
          <div className="col-span-1 lg:col-span-8 reveal-up" data-delay="290">
            <div className="h-full p-2 rounded-4xl bg-sage/7 ring-1 ring-sage/14">
              <div className="h-full rounded-3xl p-7 flex flex-col justify-between bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <p className="font-serif text-forest text-xl md:text-2xl font-medium leading-relaxed">
                  {
                    "Verdant transformed our estate beyond what we imagined possible. The level of craft and attention is truly unmatched."
                  }
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-forest/10 shrink-0">
                    <img
                      src="https://picsum.photos/seed/portrait-client1/80/80"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-forest text-sm font-semibold">
                      Lady Catherine Ashmore
                    </p>
                    <p className="text-sage-light text-xs mt-0.5">
                      Surrey Estate, 2024
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i} className="text-gold text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
