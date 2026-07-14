type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showWord?: boolean;
};

/**
 * Puracator wordmark + droplet/pipe mark, drawn as pure SVG so it stays
 * razor-sharp at any size and needs zero image assets.
 */
export function Logo({ className, variant = "dark", showWord = true }: LogoProps) {
  const word = variant === "light" ? "#eafaf6" : "#04211e";
  const sub = variant === "light" ? "rgba(234,250,246,0.65)" : "rgba(4,33,30,0.55)";

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <LogoMark />
      {showWord && (
        <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.28rem",
              letterSpacing: "-0.03em",
              color: word,
            }}
          >
            Pura<span style={{ color: "#0b7a6e" }}>cator</span>
            <sup style={{ fontSize: "0.6em", color: "#0b7a6e", top: "-0.7em" }}>®</sup>
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: sub,
              marginTop: 2,
            }}
          >
            Drain hygiene systems
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lm-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2dd4bf" />
          <stop offset="0.55" stopColor="#0b7a6e" />
          <stop offset="1" stopColor="#04211e" />
        </linearGradient>
        <linearGradient id="lm-shine" x1="16" y1="14" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eafaf6" stopOpacity="0.9" />
          <stop offset="1" stopColor="#eafaf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#lm-grad)" />
      {/* droplet */}
      <path
        d="M24 11c5.4 6.2 8.8 11 8.8 15.6A8.8 8.8 0 1 1 15.2 26.6C15.2 22 18.6 17.2 24 11Z"
        fill="#eafaf6"
      />
      {/* inner pipe ring — the 'clean' core */}
      <circle cx="24" cy="27" r="4.4" fill="url(#lm-grad)" />
      <circle cx="24" cy="27" r="4.4" stroke="#2dd4bf" strokeWidth="1.2" opacity="0.6" />
      {/* shine */}
      <path d="M21 16c-2.2 2.6-3.4 4.9-3.4 7.2" stroke="url(#lm-shine)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
