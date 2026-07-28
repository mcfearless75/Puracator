import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://puracator.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[path: string, priority: number]> = [
    ["/", 1],
    ["/how-it-works/", 0.9],
    ["/products/", 0.9],
    ["/affiliated-products/", 0.7],
    ["/contact/", 0.8],
  ];
  return routes.map(([path, priority]) => ({
    url: `${origin}${path}`,
    lastModified: new Date("2026-07-28"),
    changeFrequency: "monthly",
    priority,
  }));
}
