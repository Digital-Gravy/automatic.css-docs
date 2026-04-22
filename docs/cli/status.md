---
title: wp acss status
sidebar_position: 40
---

Show a snapshot of the Automatic.css installation: version info, active builder integrations, compiled CSS files, settings count, and feature flags.

```bash
wp acss status [--format=<format>] [--section=<section>]
```

**Options**

- `--format=<format>` — `text` (default), `json`, or `yaml`
- `--section=<section>` — show only one section. Available: `plugin`, `integrations`, `css`, `settings`, `flags`.

## Examples

**Human-readable summary (default):**

```bash
$ wp acss status
Plugin Information
  Version:       4.0.0
  DB Version:    4.0.0
  CSS Directory: /wp-content/uploads/automatic-css

Active Integrations
  Builders: bricks

CSS Files
  automatic: exists (modified: 2026-04-22 14:03:12, size: 312 KB)
  automatic-variables: exists (...)

Settings
  Total:  487
  Option: automatic_css_settings

Feature Flags
  Active: EXAMPLE_FLAG
```

**Machine-readable output for scripting:**

```bash
wp acss status --format=json
wp acss status --format=yaml
```

**Inspect a single section:**

```bash
# Just the CSS files
wp acss status --section=css

# Just the flags
wp acss status --section=flags
```

## What each section reports

- **plugin** — plugin version, database schema version, and the CSS directory/URL
- **integrations** — which builders (Bricks, Gutenberg) are currently active on the site
- **css** — every expected CSS file with its existence, modified time, and size. Missing files are highlighted in red in text mode.
- **settings** — total number of settings stored and the option name they live under
- **flags** — whether the flag system initialized, the currently active flags, and any ignored flags (entries in `flags.user.json`/`flags.dev.json` that are no longer defined in `flags.json`)

Use this command as a quick first look when troubleshooting a site — if a CSS file is missing or an integration isn't detected, [`wp acss doctor`](doctor.md) drills deeper.
