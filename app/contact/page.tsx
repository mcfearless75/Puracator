import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a Puracator demonstration or ask a question. Based at Suite 7, iCentre, Howard Way, Newport Pagnell, MK16 9PY.",
};

export default function Contact() {
  const { address, email, phone, phoneHref } = site.contact;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Book a demo,{" "}
            <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">
              or ask us anything
            </span>
          </>
        }
        intro="Tell us what you need to clean and we'll arrange a live demonstration on your own drains — sinks, urinals or refrigerated cabinets. No pipework removed."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* details */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold">Contact details</h2>
              <p className="mt-3 text-ink/65">
                We&apos;re happy to talk through your requirements and recommend the
                right machine for your sites.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: "pin",
                  title: "Visit us",
                  lines: [
                    `${address.line1}, ${address.line2}`,
                    `${address.city}, ${address.postcode}`,
                    address.country,
                  ],
                },
                { icon: "mail", title: "Email", lines: [email], href: `mailto:${email}` },
                { icon: "phone", title: "Phone", lines: [phone], href: phoneHref },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="card flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">{c.title}</h3>
                      {c.href ? (
                        <a href={c.href} className="mt-1 block text-sm text-brand hover:underline">
                          {c.lines[0]}
                        </a>
                      ) : (
                        c.lines.map((l) => (
                          <p key={l} className="text-sm text-ink/65">
                            {l}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="surface-dark mt-6 rounded-3xl p-7 text-mist">
                <h3 className="text-lg font-bold text-mist">What a demo looks like</h3>
                <ul className="mt-4 space-y-3 text-sm text-mist/75">
                  {[
                    "We bring the Puracator to your site",
                    "We clean a real drain — sink, urinal or cabinet",
                    "You see the before and after, in place",
                    "No pipework is removed and no mess is left",
                  ].map((l) => (
                    <li key={l} className="flex gap-3">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
