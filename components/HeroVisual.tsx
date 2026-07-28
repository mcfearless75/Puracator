import { asset } from "@/lib/asset";

/**
 * Hero showcase — the award-winning Puracator machine (transparent-background
 * product shot) floating on a dark gradient panel, with the headline
 * capability chips beneath it.
 */
export function HeroVisual() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-aqua/25 via-brand/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-deep to-ink p-6 shadow-glow sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-aqua">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
            Award-winning
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-widest text-mist/50">
            Purascope · 5 bar
          </span>
        </div>

        {/* the real machine */}
        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute inset-x-6 bottom-6 h-24 rounded-full bg-aqua/20 blur-2xl" />
          <img
            src={asset("/brand/puracator-unit4.png.webp")}
            alt="The award-winning Puracator machine — 2018 Tomorrow's Cleaning Awards finalist and a world first"
            className="relative z-10 w-full max-w-md animate-float drop-shadow-2xl"
            width={860}
            height={950}
            fetchPriority="high"
          />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
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
