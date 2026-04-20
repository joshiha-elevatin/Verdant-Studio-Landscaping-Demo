/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const stats = [
  { value: "16", label: "Years established" },
  { value: "340+", label: "Projects completed" },
  { value: "18", label: "Awards won" },
  { value: "96%", label: "Client retention" },
];

const team = [
  {
    name: "James Harwood",
    role: "Founder & Principal Designer",
    bio: "RHS Gold Medallist and BALI Accredited Designer with over 20 years in landscape architecture. James founded Verdant after a decade leading projects for some of London's most celebrated private residences.",
    seed: "portrait-man-outdoor",
  },
  {
    name: "Sophie Chen",
    role: "Senior Landscape Architect",
    bio: "MA Landscape Architecture, Edinburgh. Sophie leads our residential design studio and brings a rigorous spatial sensibility shaped by years working on large-scale ecological planting and urban greening projects.",
    seed: "portrait-woman-architect",
  },
  {
    name: "Marcus Webb",
    role: "Construction Director",
    bio: "25 years in groundworks, stonework, and structural landscaping. Marcus oversees every build from sub-base to final finish, ensuring that nothing leaves our hands unless it meets the standard we'd be proud to put our name to.",
    seed: "portrait-man-construction",
  },
  {
    name: "Fiona Blake",
    role: "Head of Horticulture",
    bio: "RHS Level 3 and Kew-trained plantswoman. Fiona designs and oversees all planting schemes, bringing an extraordinary depth of botanical knowledge to every border, meadow, and woodland planting we create.",
    seed: "portrait-woman-garden",
  },
];

const values = [
  {
    icon: "◈",
    title: "Rigour over speed",
    body: "We take the time to understand a site properly before we design it. Thorough surveys, careful study of light and soil, and long conversations with clients before pencil touches paper.",
  },
  {
    icon: "◈",
    title: "Craft in every detail",
    body: "The quality of a garden is felt in the details — the tightness of a mortar joint, the precision of a hedge line, the way a planted border fills in over three seasons. We are obsessive about all of it.",
  },
  {
    icon: "◈",
    title: "Honesty above everything",
    body: "We tell clients what their budget will and won't achieve. We advise against ideas that won't work. We never oversell a project to win it. This is why 96% of our clients come back.",
  },
];

const awards = [
  { year: "2023", title: "RHS Chelsea Flower Show", award: "Gold Medal" },
  { year: "2022", title: "BALI National Landscape Awards", award: "Grand Award" },
  { year: "2021", title: "APL Awards", award: "Designer of the Year" },
  { year: "2020–24", title: "House & Garden", award: "Top 50 Garden Designers" },
  { year: "2019", title: "Gardens Illustrated Awards", award: "Outstanding Garden" },
];

export default function AboutContent() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const items = page.querySelectorAll<HTMLElement>(".reveal-up, .reveal-scale");
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
    <main ref={pageRef} className="bg-cream overflow-x-hidden">

      {/* ── 1. PAGE HEADER ────────────────────────────────────── */}
      <section className="pt-44 pb-20 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <span
            className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/70 border border-forest/12 mb-10"
            data-delay="0"
          >
            Est. 2009
          </span>
          <h1
            className="reveal-up font-serif font-bold leading-[1.04] tracking-tight text-forest mb-6 max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            data-delay="100"
          >
            We believe every garden
            <br />
            <em className="not-italic text-gold">should tell a story</em>
          </h1>
          <p
            className="reveal-up text-forest/52 max-w-lg leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
            data-delay="200"
          >
            Verdant was founded on a single principle: that exceptional outdoor
            spaces are not a luxury reserved for the few, but the result of
            care, craft, and genuine expertise applied to any site, any budget,
            any brief.
          </p>

          {/* Stats strip */}
          <div
            className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-px bg-forest/8 rounded-3xl overflow-hidden mt-16 border border-forest/8"
            data-delay="300"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-cream px-8 py-8 flex flex-col gap-1"
              >
                <span
                  className="font-serif text-forest font-bold leading-none"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-forest/45 text-xs uppercase tracking-[0.18em] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. STORY ──────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream-warm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Our story
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              Built from a conviction that gardens deserve better
            </h2>
            <div
              className="reveal-up flex flex-col gap-5 text-forest/60 leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1rem)" }}
              data-delay="200"
            >
              <p>
                James Harwood started Verdant in 2009 after years working
                within large practices where the pressure to move fast and
                cut costs consistently compromised the quality of finished
                work. He believed there was a better way.
              </p>
              <p>
                The first studio was a single room in Islington. The first
                projects were small — residential gardens in North London,
                built with a level of care that clients had not encountered
                before. Word spread quickly.
              </p>
              <p>
                Today Verdant employs a team of sixteen, works on projects
                from Chelsea courtyards to country estates, and maintains a
                waiting list. The founding conviction hasn&rsquo;t changed: every
                client deserves the same rigour, the same honesty, and the
                same extraordinary result.
              </p>
            </div>
          </div>

          <div className="reveal-scale" data-delay="150">
            <div className="p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8">
              <div className="rounded-3xl overflow-hidden h-[480px]">
                <img
                  src="https://picsum.photos/seed/garden-studio-work/800/900"
                  alt="Verdant Studio at work"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(0.9)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES ─────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-gold/18 text-gold border border-gold/28 mb-8"
              data-delay="0"
            >
              What we believe
            </span>
            <h2
              className="reveal-up font-serif font-bold text-white leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              The principles behind every project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="reveal-up p-2 rounded-4xl bg-white/5 ring-1 ring-white/8"
                data-delay={String(i * 100)}
              >
                <div className="rounded-3xl bg-forest-mid shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] px-8 py-10 h-full flex flex-col">
                  <span className="inline-flex w-10 h-10 rounded-full bg-gold/15 border border-gold/28 items-center justify-center text-gold text-sm mb-6 shrink-0">
                    {value.icon}
                  </span>
                  <h3 className="font-serif text-white text-xl font-semibold mb-3 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEAM ───────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              The team
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              The people behind Verdant
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8"
                data-delay={String(i * 80)}
              >
                <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] overflow-hidden flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${member.seed}/400/500`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(0.25) contrast(1.05)" }}
                    />
                  </div>
                  <div className="px-6 py-6">
                    <p className="font-serif text-forest font-semibold text-lg leading-tight mb-1">
                      {member.name}
                    </p>
                    <p className="text-gold text-[11px] uppercase tracking-[0.16em] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-forest/52 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AWARDS ─────────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream-warm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span
              className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/60 border border-forest/12 mb-8"
              data-delay="0"
            >
              Recognition
            </span>
            <h2
              className="reveal-up font-serif font-bold text-forest leading-[1.08] tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
              data-delay="100"
            >
              Awards & press
            </h2>
            <p
              className="reveal-up text-forest/52 leading-relaxed max-w-sm"
              data-delay="200"
            >
              Recognised consistently by the industry&rsquo;s most respected bodies
              since our founding year.
            </p>
          </div>

          <div className="flex flex-col gap-px bg-forest/8 rounded-3xl overflow-hidden border border-forest/8">
            {awards.map((item, i) => (
              <div
                key={item.title}
                className="reveal-up flex items-center gap-6 bg-cream-warm px-8 py-6"
                data-delay={String(i * 60)}
              >
                <span className="text-gold font-serif font-semibold text-sm w-14 shrink-0 tabular-nums">
                  {item.year}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-forest font-medium text-sm leading-tight">
                    {item.award}
                  </p>
                  <p className="text-forest/45 text-xs mt-0.5">{item.title}</p>
                </div>
                <span className="text-forest/20 text-lg shrink-0">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CLOSING CTA ────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="p-2 rounded-4xl bg-forest ring-1 ring-forest">
            <div
              className="relative rounded-3xl overflow-hidden bg-forest-mid shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)] px-8 py-24 md:py-36 md:px-20 flex flex-col items-center text-center"
            >
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
                  Work with us
                </span>
                <h2
                  className="reveal-up font-serif text-white font-bold leading-[1.04] tracking-tight mb-8 max-w-3xl"
                  style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}
                  data-delay="100"
                >
                  Ready to start your
                  <br />
                  <em className="not-italic text-gold">next project?</em>
                </h2>
                <p
                  className="reveal-up text-white/52 max-w-lg leading-relaxed mb-14"
                  style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
                  data-delay="200"
                >
                  Every exceptional garden begins with a conversation. Tell us
                  about your space and we will tell you what it could become.
                </p>
                <div
                  className="reveal-up flex flex-col sm:flex-row items-center gap-4"
                  data-delay="300"
                >
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2.5 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97]"
                  >
                    Get in Touch
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
