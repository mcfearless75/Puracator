/**
 * Static-export config so the site can be served from GitHub Pages
 * (and any static host / CDN).
 *
 * PAGES_BASE_PATH is injected by the deploy workflow:
 *   - project page  → "/Puracator"
 *   - custom domain → "" (when public/CNAME is present)
 */
const basePath = process.env.PAGES_BASE_PATH || "";

// Absolute origin the deployed site lives at — used for canonicals, the
// sitemap, robots.txt and og:image URLs so they are correct on GitHub Pages
// now and on the custom domain later.
const siteUrl = basePath
  ? `https://mcfearless75.github.io${basePath}`
  : "https://puracator.co.uk";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
