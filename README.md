# automatic.css-docs

The Automatic.css documentation at [docs.automaticcss.com](https://docs.automaticcss.com), built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local development

```bash
npm start
```

This starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This generates the static site into the `build` directory. `npm run serve` serves that build locally.

Before building, `npm run build` runs `scripts/ensure-git-history.mjs`. If the checkout is a shallow clone, the script fetches the full git history. Docusaurus needs it for the "Last updated" date at the bottom of each page: the date comes from the last commit that changed that page's file. Without the history, every page shows the date of the latest commit.

## Deployment (Cloudflare Pages)

The site is deployed with Cloudflare Pages. Every push to `main` deploys the live site, and every pull request gets a preview deployment.

Cloudflare Pages clones the repository with only the latest commit. For correct per-page "Last updated" dates, check these settings in the Cloudflare dashboard under **Workers & Pages → automatic-css-docs → Settings → Build**:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `build` |

The build command must run `npm run build`, not `docusaurus build` or `npx docusaurus build` directly. Only `npm run build` runs `scripts/ensure-git-history.mjs` first. If the build command has to stay different for some reason, put `git fetch --unshallow || true` in front of it, for example `git fetch --unshallow || true; npx docusaurus build`.

To check a deployment, look for this line in the Cloudflare build log:

```text
[ensure-git-history] Full history fetched.
```

Then open two pages that were changed at different times. The "Last updated" dates at the bottom of the pages should differ.

If the log shows `Could not fetch the full git history` instead, the build still succeeds, but all pages show the same date. Cloudflare then could not fetch from GitHub. Check that the Cloudflare GitHub integration still has access to the repository.
