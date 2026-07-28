import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/CtaBand";
import { ProductPhoto } from "@/components/ProductPhoto";
import { Breadcrumbs, JsonLd, siteOrigin } from "@/components/Schema";
import { products, applications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Puracator range: the SF machine cleans and clears drains, and the MF machine adds saturated-steam pasteurisation — both without dismantling the pipework.",
  alternates: { canonical: "/products/" },
};

export default function Products() {
  return (
    <>
      <Breadcrumbs name="Products" path="/products/" />
      {products.map((p) => (
        <JsonLd
          key={p.id}
          data={{
            "@type": "Product",
            name: p.name,
            image: `${siteOrigin}/brand/${p.image}`,
            description: p.summary,
            brand: { "@type": "Brand", name: "Puracator" },
          }}
        />
      ))}
      <PageHero
        eyebrow="The range"
        title={
          <>
            Two machines,{" "}
            <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">
              one standard of clean
            </span>
          </>
        }
        intro="Choose the SF for fast, in-place cleaning and clearing, or the MF for the complete cycle that also pasteurises the pipe with saturated steam. Both work on sinks, urinals and multi-deck refrigerated display cabinets — with no pipework removed."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} as="article">
              <div
                className={`card flex h-full flex-col ${
                  p.featured ? "ring-2 ring-aqua/40" : ""
                }`}
              >
                <div className={`-m-7 mb-0 rounded-t-3xl bg-gradient-to-br ${p.accent} p-7`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink/70">
                      {p.kicker}
                    </span>
                    {p.featured && (
                      <span className="rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold text-mist">
                        Complete cycle
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold text-ink">{p.name}</h2>
                </div>

                <ProductPhoto
                  file={p.image}
                  alt={p.imageAlt}
                  className="mt-8 aspect-[4/3] w-full"
                />

                <p className="mt-6 text-ink/70">{p.summary}</p>

                <ul className="mt-6 space-y-3 border-t border-ink/8 pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ink/75">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link href="/contact" className={p.featured ? "btn-accent w-full" : "btn-primary w-full"}>
                    Enquire about the {p.name.split(" ")[1]}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* the kit */}
        <Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="card flex flex-col gap-5 sm:flex-row sm:items-center">
              <ProductPhoto
                file="Purascope2.png.webp"
                alt="The Puracator Purascope cleaning lance"
                className="h-40 w-full shrink-0 sm:w-40"
              />
              <div>
                <h3 className="text-xl font-bold">The Purascope</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  The specially designed lance that delivers the pressured 5-bar
                  water ring and saturated steam deep into the pipework — reaching
                  the full inner surface no rod or brush can.
                </p>
              </div>
            </div>
            <div className="card flex flex-col gap-5 sm:flex-row sm:items-center">
              <ProductPhoto
                file="bowser.png.webp"
                alt="The Puracator water reservoir / bowser"
                className="h-40 w-full shrink-0 sm:w-40"
              />
              <div>
                <h3 className="text-xl font-bold">Water reservoir</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  A self-contained supply feeds the machine on site, so the
                  Puracator goes wherever the drains are — no permanent plumbing
                  connection required.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* spec comparison */}
        <Reveal>
          <div className="mt-16 overflow-hidden rounded-3xl border border-ink/8">
            <div className="grid grid-cols-3 bg-ink text-mist">
              <div className="p-5 text-sm font-semibold uppercase tracking-wider">Capability</div>
              <div className="p-5 text-center text-sm font-semibold uppercase tracking-wider">SF</div>
              <div className="p-5 text-center text-sm font-semibold uppercase tracking-wider">MF</div>
            </div>
            {[
              ["Purascope 5-bar water ring", true, true],
              ["Clears obstructions", true, true],
              ["Removes biofilm & surface contamination", true, true],
              ["No pipework dismantling", true, true],
              ["Saturated-steam pasteurisation", false, true],
              ["Enzyme / biocide after-treatment ready", true, true],
            ].map((row, idx) => (
              <div
                key={row[0] as string}
                className={`grid grid-cols-3 items-center border-t border-ink/8 ${
                  idx % 2 ? "bg-sand" : "bg-white"
                }`}
              >
                <div className="p-5 text-sm font-medium text-ink/80">{row[0]}</div>
                <Cell on={row[1] as boolean} />
                <Cell on={row[2] as boolean} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* applications recap */}
      <section className="surface-dark py-20 text-mist md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow border-aqua/30 bg-white/5 text-aqua">Where it works</span>
              <h2 className="mt-5 text-3xl font-bold text-mist sm:text-4xl">
                Three demanding drains, one machine
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua/15 text-aqua">
                    <Icon name={a.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-mist">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/65">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 md:py-28">
        <CtaBand
          title="Not sure which machine fits your sites?"
          body="Tell us what you clean and how often, and we'll recommend SF or MF — and show it working on your own drains."
        />
      </div>
    </>
  );
}

function Cell({ on }: { on: boolean }) {
  return (
    <div className="flex items-center justify-center p-5">
      {on ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-mist">
          <Icon name="check" className="h-4 w-4" />
        </span>
      ) : (
        <span className="h-0.5 w-4 rounded-full bg-ink/20" />
      )}
    </div>
  );
}
