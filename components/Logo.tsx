type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showWord?: boolean;
};

/**
 * Puracator wordmark, drawn as SVG/text to match the real brand mark: the "o"
 * in "Puracat[o]r" is a droplet-and-flow glyph (a ring fed by a droplet, with
 * the flow arrow running out to the right — the pipe being cleared). Blue flow
 * gradient. Stays razor-sharp at any size with zero raster assets.
 */
export function Logo({ className, variant = "dark", showWord = true }: LogoProps) {
  const gradId = variant === "light" ? "wm-light" : "wm-dark";
  const stops =
    variant === "light"
      ? ["#8fd3ff", "#d9f2ff"]
      : ["#173a8f", "#2f9bd6"];
  const glyph = variant === "light" ? "#a9dcff" : "#2f9bd6";
  const sub = variant === "light" ? "rgba(234,250,246,0.6)" : "rgba(4,33,30,0.5)";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 11 }}
    >
      <LogoMark size={38} />
      {showWord && (
        <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              fontWeight: 800,
              fontSize: "1.4rem",
              letterSpacing: "-0.02em",
            }}
          >
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0.2">
                  <stop offset="0" stopColor={stops[0]} />
                  <stop offset="1" stopColor={stops[1]} />
                </linearGradient>
              </defs>
            </svg>
            <span
              style={{
                background: `linear-gradient(95deg, ${stops[0]}, ${stops[1]})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Puracat
            </span>
            {/* the flow "o" glyph, sized to the lowercase x/o height */}
            <OGlyph color={glyph} />
            <span
              style={{
                background: `linear-gradient(95deg, ${stops[0]}, ${stops[1]})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              r
            </span>
          </span>
          <span
            style={{
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: sub,
              marginTop: 3,
            }}
          >
            Drain hygiene systems
          </span>
        </span>
      )}
    </span>
  );
}

/** The distinctive "o" — a droplet feeding a ring, flow arrow exiting right. */
function OGlyph({ color }: { color: string }) {
  return (
    <svg
      width="0.92em"
      height="0.92em"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ margin: "0 0.02em", transform: "translateY(0.06em)" }}
    >
      {/* droplet feeding the ring */}
      <path d="M12 1.4c1.9 2.2 3 3.9 3 5.4a3 3 0 1 1-6 0c0-1.5 1.1-3.2 3-5.4Z" fill={color} />
      {/* the ring (the 'o') */}
      <circle cx="10.5" cy="15" r="6" stroke={color} strokeWidth="2.6" />
      {/* flow arrow running out to the right */}
      <path
        d="M16.5 15h6.2m0 0-2.4-2.3m2.4 2.3-2.4 2.3"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lm-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f9bd6" />
          <stop offset="0.55" stopColor="#173a8f" />
          <stop offset="1" stopColor="#0b1f4d" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#lm-grad)" />
      {/* droplet */}
      <path
        d="M24 11c5.4 6.2 8.8 11 8.8 15.6A8.8 8.8 0 1 1 15.2 26.6C15.2 22 18.6 17.2 24 11Z"
        fill="#eafaf6"
      />
      {/* ring + flow arrow — echo of the wordmark glyph */}
      <circle cx="22" cy="27" r="4.4" stroke="url(#lm-grad)" strokeWidth="2.4" fill="none" />
      <path
        d="M27 27h6m0 0-2-2m2 2-2 2"
        stroke="#173a8f"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
