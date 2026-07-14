import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8">
      <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-10 -z-10 h-80 w-80 rounded-full bg-aqua/15 blur-[100px]" />
      <div className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
