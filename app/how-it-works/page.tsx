import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { process, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The Puracator clean cycle: a 5-bar water ring from the Purascope removes obstructions and biofilm, then saturated steam pasteurises the entire inner pipe surface — without dismantling the pipework.",
};

const compare = [
  {
    label: "Rodding / plunging",
    result: "Pushes blockages, misses the pipe wall",
    good: false,
  },
  { label: "Chemical drain cleaner", result: "Harsh, temporary, leaves biofilm", good: false },
  { label: "Stripping the pipework", result: "Slow, disruptive, costly downtime", good: false },
  {
    label: "Puracator",
    result: "Clears, cleans, pasteurises — in place",
    good: true,
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The clean cycle"
        title={
          <>
            Water and steam,{" "}
            <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">
              engineered to reach everything
            </span>
          </>
        }
        intro="Thanks to the specially designed Purascope, Puracator delivers a pressured ring of water at five bar that removes obstructions and surface contamination — including any biofilm on the inner pipe wall. Saturated steam then pasteurises the entire surface, and an optional treatment keeps it protected."
      />

      {/* process steps */}
      <section className="container-x py-20 md:py-28">
        <ol className="grid gap-6 md:grid-cols-2">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 2) * 90} as="li">
              <div className="card card-hover flex h-full gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-aqua text-lg font-extrabold text-mist">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* the science band */}
      <section className="surface-dark py-20 text-mist md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {[
            {
              icon: "wave",
              t: "5-bar water ring",
              d: "The Purascope emits a 360° ring of pressured water that scours the full circumference of the pipe, lifting scale, grease and biofilm the flow of water alone never disturbs.",
            },
            {
              icon: "steam",
              t: "Saturated steam",
              d: "Steam raises the entire inner surface to pasteurisation temperature, killing the bacteria responsible for odour and contamination — a genuine hygienic clean, not just a rinse.",
            },
            {
              icon: "shield",
              t: "Protective coat",
              d: "An enzyme or biocide treatment such as Goldshield GS75 can be applied afterwards to inhibit regrowth for months and extend the interval between cleans.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua/15 text-aqua">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-mist">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/65">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* comparison */}
      <section className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">The difference</span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              What ordinary methods leave behind
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-ink/8">
            {compare.map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between gap-4 border-b border-ink/8 px-6 py-5 last:border-0 ${
                  row.good ? "bg-brand/5" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      row.good ? "bg-brand text-mist" : "bg-ink/8 text-ink/40"
                    }`}
                  >
                    <Icon name={row.good ? "check" : "wrench"} className="h-4 w-4" />
                  </span>
                  <span className={`font-semibold ${row.good ? "text-brand" : "text-ink"}`}>
                    {row.label}
                  </span>
                </div>
                <span className="text-right text-sm text-ink/60">{row.result}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-7 text-center">
              <div className="text-3xl font-extrabold text-brand md:text-4xl">{s.value}</div>
              <p className="mt-2 text-sm leading-snug text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-20 md:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
