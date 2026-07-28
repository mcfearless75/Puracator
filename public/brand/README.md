# Brand assets drop folder

Put the **original Puracator images** here (from the current WordPress site,
e.g. files under `puracator.co.uk/wp-content/uploads/…`).

## How to add them (no local setup needed)

1. Go to this folder on the feature branch on GitHub:
   `https://github.com/mcfearless75/Puracator/tree/claude/puracator-website-rebuild-vk3ldz/public/brand`
2. Click **Add file → Upload files**.
3. Drag in the images — the **logo** and any **product / unit / application
   photos** (`.png`, `.webp`, `.jpg`, `.svg` all fine). Name them anything.
4. Commit to the branch `claude/puracator-website-rebuild-vk3ldz`.
5. Tell me "uploaded" — I'll open each image, see what it is, and wire it into
   the correct place (header/footer logo, hero, product cards, applications),
   then rebuild and redeploy.

Suggested files to grab from the old site (whatever exists):

- The **logo** (header) — often a PNG/SVG in `wp-content/uploads/…/logo…`
- The **machine / unit photos** — e.g. `puracator-unit1…4.png.webp`
- Any **application photos** (sink, urinal, refrigerated cabinet)
- Affiliated product logos (Goldshield, WhiffAway) if you want them shown

You don't need to resize or optimise anything — I'll handle sizing in code.
