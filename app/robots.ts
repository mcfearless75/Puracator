import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://www.puracator.co.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
