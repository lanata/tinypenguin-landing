# tinypenguin-landing — public marketing page

Static, build-free marketing page served by GitHub Pages. Public-facing.

## Edit

Everything lives in `index.html` — a single self-contained file (HTML +
inline CSS, no build step, no external dependencies). Rebrand by editing the
`:root` design tokens at the top; add an app by duplicating a `.card` block in
the `#apps` section.

## Deploy

Served by GitHub Pages from the repository root. Push to the published branch
and Pages redeploys automatically. The custom domain (`tinypenguin.com`) is
configured via the `CNAME` file.
