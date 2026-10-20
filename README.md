# tinypenguin-landing — public marketing page

Static, build-free marketing page served by GitHub Pages. Public-facing.

## Edit

Everything lives in `index.html` — a single self-contained file (HTML +
inline CSS, no build step, no external dependencies). Rebrand by editing the
`:root` design tokens at the top; add a roadmap entry by duplicating a `.card`
block in the `#rookery` section (use `.tag.hatching` for the next thing
shipping, plain `.tag` for "still an egg").

## Flotilla docs

User guides for Flotilla live in `flotilla/docs/<guide>/index.html`, styled by
`/legal.css` plus `flotilla/docs/docs.css`. `flotilla/docs/docs.js` holds the
list of guides in reading order and builds the side navigation, the docs
index and each guide's previous/next links from it. To add a guide, copy an
existing page, change its `<title>`, description, canonical link, crumbs,
heading and body, and add it to the list in `docs.js` and to `sitemap.xml`.
Write for people using the app, starting simple; Pro features get a
`<span class="badge">PRO</span>` or a `.pro` note.

## Deploy

Served by GitHub Pages from the repository root. Push to the published branch
and Pages redeploys automatically. The custom domain (`tinypenguin.com`) is
configured via the `CNAME` file.
