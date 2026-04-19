/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    index: "01",
    title: "Garden Architecture",
    tagline: "Spatial planning for outdoor rooms",
    description:
      "We approach garden design as architectural practice — every path, terrace, and planted border considered as part of a cohesive spatial composition. From formal parterres to naturalistic meadow planting, each project begins with understanding the land's inherent character.",
    image: "https://picsum.photos/seed/garden-arch/600/400",
  },
  {
    index: "02",
    title: "Hardscape & Paving",
    tagline: "Precision stonework and structural elements",
    description:
      "Natural stone terraces, bespoke joinery, retaining walls, and structural elements built to endure. We work with heritage materials alongside contemporary finishes to create surfaces that age with dignity and develop their own patina over time.",
    image: "https://picsum.photos/seed/stone-path/600/400",
  },
  {
    index: "03",
    title: "Pool & Water Features",
    tagline: "Reflective water as a design element",
    description:
      "From formal reflecting pools to naturalistic swimming ponds and animated fountains, we integrate water as a sensory and visual anchor. Each water feature is designed to complement its setting — never as spectacle for its own sake.",
    image: "https://picsum.photos/seed/luxury-pool/600/400",
  },
  {
    index: "04",
    title: "Outdoor Lighting",
    tagline: "Illumination that transforms after dark",
    description:
      "Considered lighting schemes that reveal texture, highlight specimen planting, and create drama after sunset. All systems are energy-efficient, sympathetic to local ecology, and designed to minimise light pollution while maximising atmosphere.",
    image: "https://picsum.photos/seed/garden-night/600/400",
  },
  {
    index: "05",
    title: "Planting & Horticulture",
    tagline: "Curated plant communities that evolve",
    description:
      "We design planting with an ecological conscience — species-rich communities that support biodiversity, evolve through seasons, and reward close inspection year after year. Our planting is never static; it is designed to mature and deepen over decades.",
    image: "https://picsum.photos/seed/flower-garden/600/400",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".reveal-up");
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-[#f5f1eb]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium bg-[#1c2b1a]/7 text-[#4a7040] mb-5"
              data-delay="0"
            >
              What We Do
            </span>
            <h2
              className="reveal-up font-serif text-[#1c2b1a] font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              data-delay="80"
            >
              Services crafted
              <br />
              for discerning clients
            </h2>
          </div>
          <p
            className="reveal-up text-[#5c6b5a] max-w-xs leading-relaxed text-sm"
            data-delay="150"
          >
            Every project begins with listening. We tailor our approach to the
            specific character of your land and the rhythms of how you live.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-[#1c2b1a]/10">
          {services.map((service, i) => (
            <div
              key={service.index}
              className="reveal-up"
              data-delay={String(i * 55)}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center gap-6 py-7 text-left group"
              >
                <span className="text-[#8baf7c] text-sm font-medium w-8 shrink-0 tabular-nums">
                  {service.index}
                </span>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-serif text-[#1c2b1a] font-semibold transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#4a7040]"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.9rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[#8baf7c] text-sm mt-0.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      activeIndex === i
                        ? "opacity-0 -translate-y-2"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>

                {/* + icon — rotates to × when open */}
                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center text-lg shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    activeIndex === i
                      ? "rotate-45 bg-[#1c2b1a] text-white border-[#1c2b1a]"
                      : "border-[#1c2b1a]/18 text-[#1c2b1a] group-hover:border-[#4a7040] group-hover:text-[#4a7040]"
                  }`}
                >
                  +
                </div>
              </button>

              {/* Expandable content */}
              <div
                className={`accordion-content ${activeIndex === i ? "open" : ""}`}
              >
                <div className="pb-12 pl-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <p className="text-[#5c6b5a] leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <div className="rounded-2xl overflow-hidden h-52 md:h-60">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                      style={{ filter: "contrast(1.04) saturate(0.88)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
