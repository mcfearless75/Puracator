/**
 * Static-export config so the site can be served from GitHub Pages
 * (and any static host / CDN).
 *
 * PAGES_BASE_PATH is injected by the deploy workflow:
 *   - project page  → "/Puracator"
 *   - custom domain → "" (when public/CNAME is present)
 */
const basePath = process.env.PAGES_BASE_PATH || "";

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
  },
};

export default nextConfig;
