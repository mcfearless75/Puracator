import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";
import { JsonLd } from "./Schema";

/**
 * FAQ built on native <details>/<summary> — keyboard accessible with zero JS —
 * plus FAQPage structured data for rich results in search.
 */
export function Faq() {
  return (
    <section className="container-x pb-4">
      <JsonLd
        data={{
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow">Good questions</span>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
            Asked before every demo
          </h2>
        </Reveal>
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="faq group rounded-2xl border border-ink/8 bg-white px-6 py-1 transition-colors open:border-brand/30 open:shadow-glow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 group-open:rotate-45">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 text-sm leading-relaxed text-ink/65">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
