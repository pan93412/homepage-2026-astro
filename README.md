# pan93.com

Personal website built with Astro. English at `/`, Traditional Chinese at `/zh/`. The legacy `/index.zh-TW.html` URL redirects to `/zh/`.

## Development

```sh
nix develop
bun install --frozen-lockfile
bun run astro dev --background
```

Open http://localhost:4321. Manage the server with `bun run astro dev status`, `logs`, or `stop`.

```sh
bun run check         # Lint, formatting and type checks
bun run fmt           # Format files
bun run test          # Test friend-link synchronization
bun run build         # Build to dist/
bun run preview       # Preview the production build
bun run sync:friends  # Refresh approved friend links
```

## Content

- Text: `src/i18n/en.ts` and `src/i18n/zh.ts`.
- Project, experience and talk lists: `src/components/`. New experiences also need a table-of-contents entry in `Portfolio.astro`.
- Friend links: edit the source Google Sheet, then run **Sync Friend Links** in GitHub Actions. Approved entries sync daily to `src/data/friends.yaml` and trigger deployment.

## PostHog

Copy `.env.example` to `.env` and set:

- `PUBLIC_POSTHOG_TOKEN`: public project token, not a personal API key.
- `PUBLIC_POSTHOG_API_HOST`: your live reverse-proxy URL.
- `PUBLIC_POSTHOG_UI_HOST`: `https://us.posthog.com` or `https://eu.posthog.com`.

PostHog runs only in production when all three values are set. Session recording is disabled. Provision the proxy separately using the [PostHog guide](https://posthog.com/docs/advanced/proxy).

## Deployment

Hosted on [Bunny Static Hosting](https://bunny.net/docs/storage/static-site-hosting/astro). One-time setup after installing dependencies:

```sh
bunx bunny login
bunx bunny sites create --region SG
```

1. Choose your own site name when prompted. In **Settings → Environments**, create `production`, add the chosen name as variable `BUNNY_SITE` and `BUNNYNET_API_KEY` as a secret, and restrict deployment branches to `master`. Configure required reviewers there if desired. Keep the PostHog values above as repository **Actions variables**, since they are used during the build.
2. Push to `master`, or run **Bunny and Quality** manually. PRs only run checks and builds.
3. Verify the Bunny preview URL, then run `bunx bunny sites domains add pan93.com`, apply the DNS record it prints, and run `bunx bunny sites domains ssl pan93.com`. Disable GitHub Pages after the cutover.

Local deployment: `bun run build && bun run deploy`. Rollback: `bunx bunny sites deployments publish --previous`. Settings live in `bunny.jsonc`; SPA fallback is disabled. Environment changes require a new build.
