import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${site.domain}`),
  title: {
    default:
      "Puracator — Clean, clear & pasteurise drains without dismantling the pipework",
    template: "%s · Puracator",
  },
  description: site.tagline,
  keywords: [
    "Puracator",
    "drain cleaning",
    "urinal descaling",
    "refrigerated cabinet drains",
    "biofilm removal",
    "drain pasteurisation",
    "commercial kitchen hygiene",
    "washroom hygiene",
  ],
  authors: [{ name: "Puracator" }],
  openGraph: {
    title: "Puracator — Drain hygiene without dismantling the pipework",
    description: site.tagline,
    url: `https://www.${site.domain}`,
    siteName: "Puracator",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puracator — Drain hygiene systems",
    description: site.shortTagline,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#04211e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Puracator",
  url: `https://www.${site.domain}`,
  description: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.contact.address.line1}, ${site.contact.address.line2}`,
    addressLocality: site.contact.address.city,
    postalCode: site.contact.address.postcode,
    addressCountry: "GB",
  },
  email: site.contact.email,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Progressive enhancement: if JS never runs, scroll-reveal content
            must still be fully visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-mist"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
