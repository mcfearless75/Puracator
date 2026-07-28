"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/8 bg-sand/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link href="/" className="shrink-0" aria-label="Puracator home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-accent">
            Book a demo
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/60 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-2 rotate-45" : "top-0.5"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-2 -rotate-45" : "top-3.5"}`} />
          </span>
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-x-0 top-18 z-40 origin-top bg-sand/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ height: open ? "calc(100dvh - 4.5rem)" : 0 }}
      >
        <nav className="container-x flex flex-col gap-1 pt-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-ink/8 py-4 text-lg font-semibold text-ink"
            >
              {item.label}
              <Icon name="arrow" className="h-5 w-5 text-brand" />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-accent mt-6 w-full">
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
