# Puracator

A modern rebuild of [puracator.co.uk](https://www.puracator.co.uk) — the drain
hygiene machine that **cleans, clears and pasteurises the drains of sinks,
urinals and multi-deck refrigerated display cabinets without dismantling the
pipework**.

## Tech stack

- **[Next.js 15](https://nextjs.org)** (App Router) with **static export** —
  ships pure HTML/CSS/JS, deployable to any static host.
- **React 19** + **TypeScript**.
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first `@theme` config).
- **Zero image dependencies** — the logo, product schematics, animated cleaning
  cycle and every icon are hand-authored inline SVG, so the site is razor-sharp
  on any display and loads instantly.
- Accessible by default: semantic landmarks, skip link, keyboard-friendly nav,
  reduced-motion support, and `prefers-color-scheme`-safe contrast.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, applications, animated clean cycle, benefits, product range |
| `/how-it-works` | The 5-bar water ring + saturated-steam process, comparisons |
| `/products` | The **SF** (clean & clear) and **MF** (adds pasteurisation) machines |
| `/affiliated-products` | Goldshield GS75 and WhiffAway partner products |
| `/contact` | Enquiry form + company details |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment — GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it with the official
`actions/deploy-pages` flow.

**One-time setup** (repository admin): go to **Settings → Pages → Build and
deployment → Source** and choose **GitHub Actions**. After that, every push to
`main` (or the active feature branch) deploys automatically.

- **Project page** (default): served at
  `https://<owner>.github.io/Puracator/`. The workflow detects there is no
  `public/CNAME` and builds with the `/Puracator` base path automatically.
- **Custom domain** (e.g. `www.puracator.co.uk`): add a file `public/CNAME`
  containing the domain (one line, e.g. `www.puracator.co.uk`), set the same
  custom domain under **Settings → Pages**, and point DNS at GitHub Pages. The
  workflow then builds with an empty base path so assets resolve at the root.

A `.nojekyll` file is included so GitHub Pages serves the Next.js `_next/`
assets directory correctly.

## Content note

The original puracator.co.uk site sits behind Cloudflare and could not be
crawled to extract its original photography and logo files. This rebuild
therefore uses an original, self-contained SVG brand identity and schematic
illustrations built from the product's documented capabilities. Drop real
brand assets into `public/` and swap the SVG components in `components/` to
match the exact house style.
