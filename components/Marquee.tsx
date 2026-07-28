const items = [
  "Sinks",
  "Urinals",
  "Multi-deck refrigerated cabinets",
  "No dismantling",
  "5-bar water ring",
  "Saturated steam",
  "Biofilm removal",
  "Pasteurised pipework",
  "Months of protection",
];

/**
 * Infinite scrolling capability band. The track holds two copies of the list
 * and the animation translates -50%, so the loop is seamless. Reduced-motion
 * users get a static strip (the global media query freezes the animation).
 */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/8 bg-white/60 py-4 backdrop-blur-sm">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-10"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-ink/45"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-aqua" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
