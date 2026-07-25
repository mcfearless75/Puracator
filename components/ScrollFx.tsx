"use client";

import { useEffect, useState } from "react";

/**
 * Global scroll flourishes: a thin brand-gradient progress bar along the top
 * edge, and a back-to-top button that fades in after the first screenful.
 * Purely decorative — hidden from the accessibility tree where appropriate.
 */
export function ScrollFx() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        setShowTop(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-aqua to-cyan"
        style={{ transform: `scaleX(${progress})` }}
      />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
          rounded-full border border-white/20 bg-ink/90 text-mist shadow-glow backdrop-blur
          transition-all duration-300 hover:-translate-y-1 hover:bg-deep
          ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M12 19V5m-7 7 7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
