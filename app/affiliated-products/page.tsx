import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Schema";
import { affiliated } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliated products",
  description:
    "Products that pair with the Puracator system — including Goldshield GS75 long-term antimicrobial and the WhiffAway washroom hygiene range — to keep drains protected between cleans.",
  alternates: { canonical: "/affiliated-products/" },
};

export default function Affiliated() {
  return (
    <>
      <Breadcrumbs name="Affiliated products" path="/affiliated-products/" />
      <PageHero
        eyebrow="Better together"
        title={
          <>
            Protection that{" "}
            <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">
              outlasts the clean
            </span>
          </>
        }
        intro="Puracator gets drains hygienically clean. These affiliated products keep them that way — coating the pipe against bacterial regrowth and extending the interval between services."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {affiliated.map((a, i) => (
            <Reveal key={a.name} delay={i * 100} as="article">
              <div className="card card-hover flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                      {a.category}
                    </span>
                    <h2 className="mt-1 text-2xl font-extrabold">{a.name}</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-aqua/15 text-brand">
                    <Icon name="shield" className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{a.desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink/8 pt-6">
                  {a.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-ink/75">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* how they fit */}
        <Reveal>
          <div className="mt-16 rounded-3xl border border-ink/8 bg-white p-8 sm:p-10">
            <h3 className="text-xl font-bold">Where they fit in the cycle</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { n: "1", t: "Clean", d: "Puracator clears and cleans the drain with its 5-bar water ring." },
                { n: "2", t: "Pasteurise", d: "The MF machine applies saturated steam to the full inner surface." },
                { n: "3", t: "Protect", d: "Goldshield GS75 coats the pipe to inhibit bacterial regrowth for months." },
              ].map((s) => (
                <div key={s.n} className="relative rounded-2xl bg-sand p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-mist">
                    {s.n}
                  </span>
                  <h4 className="mt-4 font-bold">{s.t}</h4>
                  <p className="mt-1.5 text-sm text-ink/65">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="pb-20 md:pb-28">
        <CtaBand
          title="Build a complete drain-hygiene programme"
          body="Combine the Puracator machine with the right after-treatment for a clean that lasts — we'll help you specify it."
        />
      </div>
    </>
  );
}
