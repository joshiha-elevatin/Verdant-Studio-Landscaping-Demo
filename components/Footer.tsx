const footerLinks: Record<string, string[]> = {
  Studio: ["About", "Team", "Awards", "Press"],
  Services: ["Garden Architecture", "Hardscape", "Lighting", "Water Features"],
  Connect: ["Contact", "Instagram", "LinkedIn", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1c2b1a] px-4 md:px-8 lg:px-16 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-white text-3xl font-semibold mb-4 tracking-tight">
              Verdant
            </p>
            <p className="text-white/38 text-sm leading-relaxed">
              Award-winning landscape architecture and outdoor living design.
              Established 2009. Based in London and the Home Counties.
            </p>

            {/* Social pills */}
            <div className="flex gap-3 mt-8">
              {[
                { label: "IG", href: "#" },
                { label: "LI", href: "#" },
                { label: "PI", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/14 flex items-center justify-center text-white/45 hover:text-white hover:border-white/38 text-[10px] font-medium tracking-wider transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category}>
                <p className="text-white/28 text-[9px] uppercase tracking-[0.28em] mb-5">
                  {category}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/55 hover:text-white/90 text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/22 text-xs">
            &copy; 2026 Verdant Studio Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/22 hover:text-white/55 text-xs transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
