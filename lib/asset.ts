/**
 * Prefix a public asset path with the deploy base path so images resolve both
 * at the site root and under a project sub-path (e.g. /Puracator on GitHub
 * Pages). Plain <img> src values are NOT rewritten by Next.js the way
 * next/link and next/image are, so we prepend it ourselves.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
