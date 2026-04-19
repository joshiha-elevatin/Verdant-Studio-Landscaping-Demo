/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
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
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-[#fdfbf7]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Double-bezel CTA block */}
        <div className="p-2 rounded-[2.5rem] bg-[#1c2b1a] ring-1 ring-[#1c2b1a]">
          <div className="relative rounded-4xl overflow-hidden bg-[#2e4528] shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)] px-8 py-24 md:py-36 md:px-20 flex flex-col items-center text-center">
            {/* Ambient radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 65%, rgba(200,168,75,0.11) 0%, transparent 70%)",
              }}
            />

            {/* Background texture image */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: 0.06 }}
            >
              <img
                src="https://picsum.photos/seed/garden-texture/1600/900"
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(1) contrast(1.2)" }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Eyebrow */}
              <span
                className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-[#c8a84b]/18 text-[#c8a84b] border border-[#c8a84b]/28 mb-10"
                data-delay="0"
              >
                Begin Your Journey
              </span>

              {/* Headline */}
              <h2
                className="reveal-up font-serif text-white font-bold leading-[1.04] tracking-tight mb-8 max-w-4xl"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
                data-delay="100"
              >
                Your landscape deserves
                <br />
                <em className="not-italic text-[#c8a84b]">
                  nothing less than extraordinary
                </em>
              </h2>

              {/* Subtext */}
              <p
                className="reveal-up text-white/52 max-w-lg leading-relaxed mb-14"
                style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
                data-delay="200"
              >
                Every exceptional garden begins with a conversation. Tell us
                about your space and we will tell you what it could become.
              </p>

              {/* CTAs */}
              <div
                className="reveal-up flex flex-col sm:flex-row items-center gap-4"
                data-delay="300"
              >
                <a
                  href="mailto:studio@verdant.co"
                  className="group flex items-center gap-2.5 rounded-full bg-[#c8a84b] text-[#1c2b1a] px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4b355] active:scale-[0.97]"
                >
                  Schedule a Consultation
                  <span className="w-8 h-8 rounded-full bg-[#1c2b1a]/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    ↗
                  </span>
                </a>

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

              {/* Trust strip */}
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
  );
}
