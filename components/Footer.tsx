import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { site, nav } from "@/lib/site";

export function Footer() {
  const year = 2026;
  const { address, email, phone, phoneHref } = site.contact;

  return (
    <footer className="surface-dark mt-24 text-mist">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-mist/70">{site.tagline}</p>
          <Link href="/contact" className="btn-accent mt-6">
            Book a demonstration
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-aqua">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-mist/75 transition-colors hover:text-mist">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist/75 transition-colors hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-aqua">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-mist/75">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
              <span>
                {address.line1}, {address.line2}
                <br />
                {address.city}, {address.postcode}
              </span>
            </li>
            <li>
              <a href={phoneHref} className="flex items-center gap-3 transition-colors hover:text-mist">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-aqua" />
                {phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="flex items-center gap-3 transition-colors hover:text-mist">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-aqua" />
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist/55 sm:flex-row">
          <p>© {year} {site.registered}. All rights reserved.</p>
          <p>Cleans · Clears · Pasteurises — without dismantling the pipework.</p>
        </div>
      </div>
    </footer>
  );
}
