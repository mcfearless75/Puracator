const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://puracator.co.uk";

/** Inject any schema.org object as JSON-LD. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}

/** BreadcrumbList schema for a subpage. */
export function Breadcrumbs({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name, item: `${origin}${path}` },
        ],
      }}
    />
  );
}

export { origin as siteOrigin };
