/**
 * Animated schematic of the Puracator cleaning cycle: the Purascope inside a
 * length of pipe, a 5-bar water ring stripping biofilm, and steam rising.
 * Pure SVG + CSS — no image assets, crisp on every display.
 */
export function HeroVisual() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-aqua/25 via-brand/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-deep to-ink p-6 shadow-glow sm:p-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-aqua">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
            Live clean cycle
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-widest text-mist/50">
            Purascope · 5 bar
          </span>
        </div>

        <svg viewBox="0 0 420 240" className="w-full" role="img" aria-label="Purascope cleaning a drain pipe with a pressured water ring and steam">
          <defs>
            <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0e8a7c" stopOpacity="0.25" />
              <stop offset="0.5" stopColor="#04211e" stopOpacity="0.9" />
              <stop offset="1" stopColor="#0e8a7c" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="clean" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#2dd4bf" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <radialGradient id="ring" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0.55" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="0.8" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* pipe body */}
          <rect x="20" y="86" width="380" height="68" rx="12" fill="url(#pipe)" stroke="rgba(45,212,191,0.35)" />
          {/* grime (left) vs clean (right) */}
          <rect x="26" y="92" width="150" height="56" rx="8" fill="#3a2f18" opacity="0.55" />
          <rect x="176" y="92" width="218" height="56" rx="8" fill="url(#clean)" opacity="0.16" />

          {/* Purascope shaft */}
          <line x1="30" y1="120" x2="196" y2="120" stroke="#eafaf6" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
          {/* Purascope head */}
          <g>
            <circle cx="200" cy="120" r="16" fill="url(#ring)" className="[animation:steam_3s_ease-in-out_infinite]" />
            <circle cx="200" cy="120" r="9" fill="#eafaf6" />
            <circle cx="200" cy="120" r="9" stroke="#22d3ee" strokeWidth="2" />
          </g>

          {/* water ring pulses moving right */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="200"
              cy="120"
              r="14"
              fill="none"
              stroke="url(#clean)"
              strokeWidth="2.5"
              opacity="0"
            >
              <animate attributeName="cx" values="200;360" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="10;22" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* steam rising from clean section */}
          {[250, 300, 350].map((x, i) => (
            <path
              key={x}
              d={`M${x} 86 q-6 -12 0 -22 q6 -10 0 -20`}
              fill="none"
              stroke="#eafaf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0"
              className="[animation:steam_4s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}

          {/* droplets under pipe */}
          {[110, 150].map((x, i) => (
            <circle key={x} cx={x} cy="160" r="3" fill="#2dd4bf" opacity="0" className="[animation:drip_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 1.1}s` }} />
          ))}

          {/* labels */}
          <text x="30" y="78" fill="#eafaf6" fillOpacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">Before · biofilm &amp; scale</text>
          <text x="300" y="78" fill="#2dd4bf" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">Pasteurised</text>
        </svg>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Water ring", v: "5 bar" },
            { k: "Saturated", v: "Steam" },
            { k: "Dismantling", v: "None" },
          ].map((c) => (
            <div
              key={c.k}
              className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-2.5 py-3"
            >
              <div className="text-sm font-bold text-mist sm:text-lg">{c.v}</div>
              <div className="mt-0.5 text-[0.56rem] uppercase leading-tight tracking-normal text-mist/50 sm:text-[0.6rem]">
                {c.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
