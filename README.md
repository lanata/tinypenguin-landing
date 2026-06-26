# tinypenguin-landing — public marketing page

Static, build-free marketing page served by `nginx:alpine`. Public-facing
(no Cloudflare Access gate) — fronted by the cloudflared tunnel.

## Edit

Everything lives in `site/index.html` — a single self-contained file (HTML +
inline CSS, no build step, no external dependencies). Rebrand by editing the
`:root` design tokens at the top; add an app by duplicating a `.card` block in
the `#apps` section.

## Deploy

Redeploy this stack in Komodo after editing `site/`. nginx serves `site/`
read-only at container port 80, published on host `:8088`.

## Routing

Hand-wired in `terraform/cloudflare/tinypenguin.tf` (tinypenguin.com is a
separate zone from lanata.me, so it isn't part of the `services.tf` engine):
a proxied apex CNAME → the shared cloudflared tunnel, plus a tunnel ingress
entry → host `:8088`. No Access app — the page is fully public. Apply
Terraform after changes so the DNS record and tunnel ingress exist.
