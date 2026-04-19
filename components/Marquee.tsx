const items = [
  "Garden Architecture",
  "Hardscape & Paving",
  "Pool & Water Features",
  "Outdoor Lighting",
  "Planting Design",
  "Estate Management",
  "Landscape Consultation",
  "Seasonal Care",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-5 bg-[#1c2b1a] border-y border-white/6">
      <div className="animate-marquee flex">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 mr-5 whitespace-nowrap"
          >
            <span className="text-white/65 text-[11px] font-medium tracking-[0.14em] uppercase">
              {item}
            </span>
            <span className="text-[#c8a84b] text-sm leading-none">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
