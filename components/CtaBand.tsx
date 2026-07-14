import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "See a drain cleaned without a single joint removed",
  body = "Book a live demonstration and watch the Purascope clear, clean and pasteurise a real drain — sink, urinal or refrigerated cabinet.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x">
      <Reveal>
        <div className="surface-dark relative overflow-hidden rounded-[2.25rem] px-7 py-14 text-center sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-aqua/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow border-aqua/30 bg-white/5 text-aqua">Ready when you are</span>
            <h2 className="mt-5 text-3xl font-bold text-mist sm:text-4xl md:text-[2.75rem]">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-mist/70">{body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-accent">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/how-it-works" className="btn-ghost border-white/20 bg-white/5 text-mist hover:bg-white/10">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
