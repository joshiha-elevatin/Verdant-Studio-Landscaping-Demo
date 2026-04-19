"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by listening deeply — understanding your relationship with the land, your aspirations, and the rhythms of how you live. An initial site visit allows us to read the genius loci: the spirit of the place.",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Design & Concept",
    description:
      "From initial sketches to detailed drawings, we develop a design that responds to the site's inherent character while expressing your vision with clarity. We present concepts, refine together, and iterate until the design is exactly right.",
    duration: "4–8 weeks",
  },
  {
    number: "03",
    title: "Build & Installation",
    description:
      "Our skilled team of landscape contractors bring the design to life with meticulous precision. We oversee every detail of construction, planting, and installation on-site — nothing is left to chance.",
    duration: "8–24 weeks",
  },
  {
    number: "04",
    title: "Care & Evolution",
    description:
      "A great garden is never finished — it evolves. We offer ongoing management programmes that ensure your landscape matures as intended through every season, deepening in beauty and complexity each year.",
    duration: "Ongoing",
  },
];

export default function Process() {
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
      id="process"
      className="py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-[#1c2b1a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium bg-white/8 text-[#c8a84b] mb-5"
              data-delay="0"
            >
              How We Work
            </span>
            <h2
              className="reveal-up font-serif text-white font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              data-delay="80"
            >
              A process as refined
              <br />
              as the results
            </h2>
          </div>
          <p
            className="reveal-up text-white/48 max-w-xs leading-relaxed text-sm"
            data-delay="150"
          >
            {
              "From initial consultation to ongoing stewardship, we accompany you at every stage of your landscape's life."
            }
          </p>
        </div>

        {/* Step cards — double-bezel on dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal-up"
              data-delay={String(i * 90)}
            >
              {/* Outer shell */}
              <div className="p-2 rounded-4xl bg-white/5 ring-1 ring-white/8 h-full">
                {/* Inner core */}
                <div className="h-full rounded-3xl p-7 bg-white/3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-5xl font-bold text-white/14 leading-none">
                      {step.number}
                    </span>
                    <span className="rounded-full px-3 py-1 bg-white/7 text-white/45 text-[9px] uppercase tracking-[0.16em] mt-1">
                      {step.duration}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-lg font-semibold mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-white/42 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-16 border-t border-white/8">
          <p
            className="reveal-up font-serif text-white/75 text-xl md:text-2xl font-medium max-w-lg leading-relaxed"
            data-delay="0"
          >
            Ready to begin the conversation about your landscape?
          </p>
          <a
            href="#contact"
            className="reveal-up group flex items-center gap-2.5 rounded-full bg-[#c8a84b] text-[#1c2b1a] px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4b355] active:scale-[0.97] shrink-0"
            data-delay="80"
          >
            Schedule a Consultation
            <span className="w-7 h-7 rounded-full bg-[#1c2b1a]/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
