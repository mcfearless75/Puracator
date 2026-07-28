import { asset } from "@/lib/asset";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

const SRC = asset("/brand/puracator-logo-01.png.webp");

/**
 * The official Puracator logo. On light surfaces it's shown as-is; on dark
 * surfaces (footer) it sits on a small light chip so the grey mark stays
 * legible and keeps its blue accent.
 */
export function Logo({ className, variant = "dark" }: LogoProps) {
  if (variant === "light") {
    return (
      <span className={className} style={{ display: "inline-flex" }}>
        <span className="inline-flex items-center rounded-xl bg-white/95 px-3.5 py-2.5 shadow-sm">
          <img src={SRC} alt="Puracator" className="h-7 w-auto" />
        </span>
      </span>
    );
  }

  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center" }}>
      <img src={SRC} alt="Puracator" className="h-10 w-auto sm:h-11" />
    </span>
  );
}
