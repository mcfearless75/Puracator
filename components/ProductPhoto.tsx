import { asset } from "@/lib/asset";

/**
 * Renders a product photo. The source shots have a dark circular studio
 * background, so we place them on a matching dark rounded tile — the square
 * blends seamlessly and reads as an intentional product badge.
 */
export function ProductPhoto({
  file,
  alt,
  className = "",
}: {
  file: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#04211e] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(45,212,191,0.12),transparent_60%)]" />
      <img
        src={asset(`/brand/${file}`)}
        alt={alt}
        className="relative z-10 h-full w-full object-contain p-3"
        loading="lazy"
      />
    </div>
  );
}
