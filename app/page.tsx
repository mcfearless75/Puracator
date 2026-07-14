import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import {
  applications,
  benefits,
  process,
  products,
  stats,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-lines opacity-70" />
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-aqua/15 blur-[110px]" />
        <div className="pointer-events-none absolute -left-20 top-40 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[100px]" />

        <div className="container-x grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Icon name="spark" className="h-3.5 w-3.5" />
                Patented drain hygiene
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
                The only machine that cleans drains{" "}
                <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">
                  without dismantling the pipework
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Puracator clears, cleans and pasteurises the drains of sinks,
                urinals and multi-deck refrigerated display cabinets — in place,
                with a pressured water ring and saturated steam. No stripping
                pipes. No downtime. No mess.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Book a demonstration
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className="btn-ghost">
                  How it works
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/60">
                {["Sinks", "Urinals", "Refrigerated cabinets"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-brand" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="container-x">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-7">
                <div className="text-3xl font-extrabold text-brand md:text-4xl">{s.value}</div>
                <p className="mt-2 text-sm leading-snug text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- APPLICATIONS ---------- */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">One machine, three jobs</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
              Built for the drains other tools can&apos;t reach
            </h2>
            <p className="mt-4 text-ink/65">
              Rodding and chemicals only go so far. Puracator reaches the full
              inner surface of the pipe — wherever it runs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} as="article">
              <div className="card card-hover h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-aqua/15 text-brand">
                  <Icon name={a.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="surface-dark py-20 text-mist md:py-28">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Reveal>
                <span className="eyebrow border-aqua/30 bg-white/5 text-aqua">The clean cycle</span>
                <h2 className="mt-5 text-3xl font-bold text-mist sm:text-4xl md:text-[2.75rem]">
                  Water, steam and science — not brute force
                </h2>
                <p className="mt-5 text-mist/70">
                  The specially designed Purascope delivers a pressured ring of
                  water at five bar to remove obstructions and biofilm. Saturated
                  steam then pasteurises the entire inner surface — and an optional
                  biocide coat keeps it protected for months.
                </p>
                <Link href="/how-it-works" className="btn-accent mt-8">
                  Explore the full process
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 80} as="li">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <span className="text-sm font-bold text-aqua">{p.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-mist">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/65">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Why Puracator</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
              A cleaner result, a smaller footprint
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90} as="article">
              <div className="card card-hover h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={b.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PRODUCTS PREVIEW ---------- */}
      <section className="container-x pb-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">The range</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
              Two machines. One standard of clean.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} as="article">
              <div
                className={`card card-hover h-full ${
                  p.featured ? "ring-2 ring-aqua/40" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                      {p.kicker}
                    </div>
                    <h3 className="mt-1 text-2xl font-extrabold">{p.name}</h3>
                  </div>
                  {p.featured && (
                    <span className="rounded-full bg-aqua/15 px-3 py-1 text-xs font-semibold text-brand">
                      Most complete
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{p.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink/75">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                >
                  View specifications
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="py-20 md:py-28">
        <CtaBand />
      </div>
    </>
  );
}
