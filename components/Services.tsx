/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    index: "01",
    title: "Lawn Mowing",
    tagline: "Precision cutting, on a schedule that suits your lawn",
    description:
      "We take the guesswork and hard work out of lawn care. Our experienced team visits on a schedule that suits your lawn's growth cycle — cutting to the right height, edging borders cleanly, and leaving your grass healthy and stripe-perfect every time.",
    image: "https://picsum.photos/seed/lawn-summer-garden/600/400",
    href: "/services/lawn-mowing",
  },
  {
    index: "02",
    title: "Garden Design",
    tagline: "Bespoke outdoor spaces, designed to endure",
    description:
      "Great garden design is about understanding how you live — and translating that into a space that flows beautifully, feels personal, and works through every season. Every element, from the paving pattern to the final shrub placement, is considered and intentional.",
    image: "https://picsum.photos/seed/luxury-garden-design/600/400",
    href: "/services/garden-design",
  },
  {
    index: "03",
    title: "Paving & Landscaping",
    tagline: "Premium surfaces and structural elements, built to last",
    description:
      "The hard landscaping in your garden sets the tone for everything else. Our construction team combines traditional stonemasonry skills with modern drainage engineering, using materials sourced from the best UK and European quarries.",
    image: "https://picsum.photos/seed/yorkstone-patio-garden/600/400",
    href: "/services/paving-landscaping",
  },
  {
    index: "04",
    title: "Hedge Trimming",
    tagline: "Expert hedge care, species-timed and immaculate",
    description:
      "A well-kept hedge is the backbone of a great garden — structure, privacy, and a crisp backdrop for everything else. We work to seasonal schedules, cutting each species at exactly the right point in the year for dense, healthy regrowth and clean lines.",
    image: "https://picsum.photos/seed/formal-yew-hedge/600/400",
    href: "/services/hedge-trimming",
  },
  {
    index: "05",
    title: "Commercial Landscaping",
    tagline: "Grounds maintenance for businesses and estates",
    description:
      "First impressions matter. We provide structured, contract-based grounds maintenance programmes for offices, retail parks, housing developments, hotels, and private estates — consistent, high-quality results under a single point of contact.",
    image: "https://picsum.photos/seed/corporate-campus-grounds/600/400",
    href: "/services/commercial-landscaping",
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
      className="py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-cream-warm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium bg-forest/7 text-sage mb-5"
              data-delay="0"
            >
              What We Do
            </span>
            <h2
              className="reveal-up font-serif text-forest font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              data-delay="80"
            >
              Services crafted
              <br />
              for discerning clients
            </h2>
          </div>
          <p
            className="reveal-up text-sage-muted max-w-xs leading-relaxed text-sm"
            data-delay="150"
          >
            Every project begins with listening. We tailor our approach to the
            specific character of your land and the rhythms of how you live.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-forest/10">
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
                <span className="text-sage-light text-sm font-medium w-8 shrink-0 tabular-nums">
                  {service.index}
                </span>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-serif text-forest font-semibold transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-sage"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.9rem)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sage-light text-sm mt-0.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
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
                      ? "rotate-45 bg-forest text-white border-forest"
                      : "border-forest/18 text-forest group-hover:border-sage group-hover:text-sage"
                  }`}
                >
                  +
                </div>
              </button>

              {/* Expandable content */}
              <div className={`accordion-content ${activeIndex === i ? "open" : ""}`}>
                <div className="pb-12 pl-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex flex-col gap-6">
                    <p className="text-sage-muted leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={service.href}
                        className="group/btn flex items-center gap-2 rounded-full bg-forest text-white px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-forest-mid active:scale-[0.97]"
                      >
                        View full service
                        <span className="w-6 h-6 rounded-full bg-white/12 flex items-center justify-center group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          ↗
                        </span>
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sage-muted hover:text-forest text-xs font-medium transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        Get a quote →
                      </Link>
                    </div>
                  </div>
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
