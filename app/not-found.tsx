import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
        That drain runs nowhere
      </h1>
      <p className="mt-4 max-w-md text-ink/65">
        The page you were looking for can&apos;t be found. Let&apos;s get you back
        on a clear path.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </section>
  );
}
