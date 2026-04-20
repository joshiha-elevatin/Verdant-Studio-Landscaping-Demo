"use client";

import { useState, useRef, useEffect } from "react";

const services = [
  "Garden Architecture",
  "Hardscape & Paving",
  "Pool & Water Features",
  "Outdoor Lighting",
  "Planting Design",
];

const budgets = ["Under £10k", "£10k – £50k", "£50k – £150k", "£150k+"];

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "We schedule a call to understand your vision, site conditions, and timeline.",
  },
  {
    n: "02",
    title: "Site Survey & Concept",
    body: "Our team visits your property and returns with a tailored concept proposal.",
  },
  {
    n: "03",
    title: "Design & Delivery",
    body: "Full design drawings, material specs, and end-to-end project management.",
  },
];

export default function ContactContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal-up, .reveal-scale");
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

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  }

  return (
    <main ref={sectionRef} className="bg-cream overflow-x-hidden">
      {/* ── Page header ───────────────────────────────────── */}
      <section className="pt-44 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <span
            className="reveal-up inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] font-medium bg-forest/7 text-forest/70 border border-forest/12 mb-10"
            data-delay="0"
          >
            Start Your Journey
          </span>

          <h1
            className="reveal-up font-serif font-bold leading-[1.04] tracking-tight text-forest mb-6 max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            data-delay="100"
          >
            Let&rsquo;s create something
            <br />
            <em className="not-italic text-gold">extraordinary together</em>
          </h1>

          <p
            className="reveal-up text-forest/52 max-w-lg leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
            data-delay="200"
          >
            Every exceptional garden begins with a single conversation. Share
            your vision and we&rsquo;ll show you exactly what your space can become.
          </p>
        </div>
      </section>

      {/* ── Two-column body ───────────────────────────────── */}
      <section className="pb-40 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-6" data-delay="0">

            {/* Steps card — double-bezel */}
            <div
              className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8"
              data-delay="100"
            >
              <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-8 py-10">
                <p className="text-[10px] uppercase tracking-[0.26em] font-medium text-forest/38 mb-8">
                  What happens next
                </p>
                <div className="flex flex-col gap-8">
                  {steps.map((step) => (
                    <div key={step.n} className="flex gap-5">
                      <span className="mt-0.5 w-9 h-9 rounded-full bg-forest flex items-center justify-center text-[10px] font-bold text-gold shrink-0">
                        {step.n}
                      </span>
                      <div>
                        <p className="font-serif font-semibold text-forest text-[1rem] mb-1">
                          {step.title}
                        </p>
                        <p className="text-forest/52 text-sm leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact details card */}
            <div
              className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/8"
              data-delay="200"
            >
              <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-8 py-10">
                <p className="text-[10px] uppercase tracking-[0.26em] font-medium text-forest/38 mb-8">
                  Direct contact
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: "✉", label: "Email", value: "studio@verdant.co" },
                    { icon: "☏", label: "Phone", value: "+44 20 3456 7890" },
                    { icon: "◎", label: "Studio", value: "London & Home Counties" },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-forest/6 border border-forest/10 flex items-center justify-center text-forest/60 text-base shrink-0">
                        {icon}
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-forest/35 font-medium mb-0.5">
                          {label}
                        </p>
                        <p className="text-forest text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div
              className="reveal-up flex flex-wrap gap-3"
              data-delay="300"
            >
              {["BALI Accredited", "RHS Partner", "APL Member", "ISO 9001"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-forest/14 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-forest/42 font-medium"
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right column — form */}
          <div
            className="reveal-up p-2 rounded-4xl bg-forest/5 ring-1 ring-forest/9"
            data-delay="150"
          >
            <div className="rounded-3xl bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-8 py-12 md:px-12">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-serif text-forest text-2xl font-semibold mb-2">
                      Message received
                    </p>
                    <p className="text-forest/52 text-sm leading-relaxed max-w-xs">
                      We&rsquo;ll be in touch within one business day to arrange your
                      initial consultation.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div>
                    <p className="font-serif text-forest text-xl font-semibold mb-1">
                      Tell us about your project
                    </p>
                    <p className="text-forest/45 text-sm">
                      All fields marked * are required.
                    </p>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["First name *", "Last name *"].map((label) => (
                      <div key={label} className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                          {label}
                        </label>
                        <input
                          required
                          type="text"
                          className="rounded-xl border border-forest/12 bg-forest/3 px-4 py-3 text-sm text-forest placeholder:text-forest/28 focus:outline-none focus:border-forest/35 focus:ring-2 focus:ring-forest/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                          placeholder={label.replace(" *", "")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      className="rounded-xl border border-forest/12 bg-forest/3 px-4 py-3 text-sm text-forest placeholder:text-forest/28 focus:outline-none focus:border-forest/35 focus:ring-2 focus:ring-forest/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="rounded-xl border border-forest/12 bg-forest/3 px-4 py-3 text-sm text-forest placeholder:text-forest/28 focus:outline-none focus:border-forest/35 focus:ring-2 focus:ring-forest/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      placeholder="+44 ..."
                    />
                  </div>

                  {/* Service pills */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                      Services of interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const active = selectedServices.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              active
                                ? "bg-forest text-white border-forest"
                                : "bg-transparent text-forest/55 border-forest/18 hover:border-forest/35 hover:text-forest"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget pills */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                      Estimated budget *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => {
                        const active = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              active
                                ? "bg-gold text-forest border-gold"
                                : "bg-transparent text-forest/55 border-forest/18 hover:border-forest/35 hover:text-forest"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-forest/45 font-medium">
                      Tell us about your space *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="rounded-xl border border-forest/12 bg-forest/3 px-4 py-3 text-sm text-forest placeholder:text-forest/28 focus:outline-none focus:border-forest/35 focus:ring-2 focus:ring-forest/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] resize-none"
                      placeholder="Describe your garden, outdoor space, or project goals..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center justify-center gap-2.5 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gold-hover active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-forest/30 border-t-forest animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Consultation
                        <span className="w-8 h-8 rounded-full bg-forest/14 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          ↗
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-forest/32 leading-relaxed">
                    We respond within one business day. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
