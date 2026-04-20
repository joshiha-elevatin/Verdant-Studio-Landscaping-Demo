/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Verdant transformed our estate beyond what we imagined possible. The level of craft and attention is truly unmatched. Our garden is now the heart of family life.",
    author: "Lady Catherine Ashmore",
    role: "Estate Owner, Surrey",
    image: "https://picsum.photos/seed/portrait-w1/120/120",
  },
  {
    quote:
      "The design process was collaborative, considered, and deeply thoughtful. They understood our vision before we could fully articulate it ourselves.",
    author: "James & Sarah Willoughby",
    role: "Private Clients, Cotswolds",
    image: "https://picsum.photos/seed/portrait-m1/120/120",
  },
  {
    quote:
      "Five years on, our garden continues to evolve and surprise us. The planting scheme was designed for all seasons — Verdant truly thinks long-term.",
    author: "Dr. Harriet Langford",
    role: "Private Client, Edinburgh",
    image: "https://picsum.photos/seed/portrait-w2/120/120",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function navigate(dir: 1 | -1) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-32 md:py-48 px-4 md:px-8 lg:px-16 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span
            className="reveal-up inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium bg-forest/7 text-sage mb-5"
            data-delay="0"
          >
            Client Stories
          </span>
          <h2
            className="reveal-up font-serif text-forest font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            data-delay="80"
          >
            Trusted by those who
            <br />
            demand the exceptional
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — quote card (double-bezel) */}
          <div className="reveal-up" data-delay="120">
            <div className="p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/9">
              <div
                className={`rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] p-10 min-h-72 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  animating
                    ? "opacity-0 translate-y-3"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <div>
                  <p className="font-serif text-forest/18 text-7xl leading-none mb-6 select-none">
                    &ldquo;
                  </p>
                  <p className="font-serif text-forest text-xl md:text-2xl leading-relaxed font-medium">
                    {testimonials[current].quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-forest/8">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-forest/12 shrink-0">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-forest font-semibold text-sm">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sage-light text-xs mt-0.5">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — controls + stats */}
          <div className="flex flex-col gap-10 reveal-up" data-delay="200">
            {/* Overlapping portrait thumbnails */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!animating) {
                        setAnimating(true);
                        setTimeout(() => {
                          setCurrent(i);
                          setAnimating(false);
                        }, 200);
                      }
                    }}
                    aria-label={`View testimonial from ${t.author}`}
                    className={`w-14 h-14 rounded-full overflow-hidden ring-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      current === i
                        ? "ring-gold scale-110 relative z-10"
                        : "ring-white/80 grayscale opacity-55 hover:opacity-90 hover:grayscale-0"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div>
                <p className="text-forest text-sm font-medium">
                  {testimonials[current].author}
                </p>
                <p className="text-sage-light text-xs mt-0.5">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-forest/18 flex items-center justify-center text-forest hover:bg-forest hover:text-white hover:border-forest transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.95]"
              >
                ←
              </button>
              <button
                onClick={() => navigate(1)}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-forest flex items-center justify-center text-white hover:bg-forest-mid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.95]"
              >
                →
              </button>
              <span className="ml-2 text-sage-light text-xs tracking-widest tabular-nums">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-forest/5 ring-1 ring-forest/9">
                <p className="font-serif text-forest text-4xl font-bold">
                  98%
                </p>
                <p className="text-sage-muted text-xs mt-2 leading-relaxed">
                  Client retention across all estate projects
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gold/8 ring-1 ring-gold/18">
                <p className="font-serif text-forest text-4xl font-bold">
                  15+
                </p>
                <p className="text-sage-muted text-xs mt-2 leading-relaxed">
                  Years designing premium outdoor environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
