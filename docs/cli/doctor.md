---
title: wp acss doctor
sidebar_position: 60
---

Run a battery of diagnostic health checks on the Automatic.css installation. The doctor inspects PHP and WordPress versions, filesystem permissions, plugin state, config files, compiled CSS, integration detection, and recent activity log errors — and reports each with a status icon.

```bash
wp acss doctor [--format=<format>] [--fix]
```

**Options**

- `--format=<format>` — `text` (default) or `json`
- `--fix` — attempt to automatically fix issues where possible (for example, creating the CSS uploads directory if it's missing)

## Example

```bash
$ wp acss doctor
Automatic.css Doctor
====================

Environment
  ✓ PHP version: 8.2.10 (requires 8.1+)
  ✓ WordPress version: 6.4.2 (requires 5.9+)
  ℹ WP_DEBUG: disabled

File System
  ✓ CSS directory exists: /wp-content/uploads/automatic-css
  ✓ CSS directory writable: yes
  ✓ Activity log: accessible

Plugin Health
  ℹ Plugin version: 4.0.0
  ✓ DB version: 4.0.0 (up to date)
  ✓ Settings: 487 settings configured
  ✓ Upgrade lock: not set
  ✓ Delete lock: not set

Configuration
  ✓ framework.json: loaded successfully
  ✓ Utility expansions: loaded successfully

CSS Files
  ✓ automatic: 312 KB, 2 hours ago
  ✓ automatic-variables: 48 KB, 2 hours ago

Integrations
  ✓ Bricks: active
  ℹ Gutenberg: not active

Recent Activity
  ✓ Recent errors: none
  ℹ Total events logged: 342

Summary: 12 passed, 0 warnings, 0 errors
```

Status icons:

- `✓` OK
- `⚠` warning
- `✗` error
- `ℹ` informational (no pass/fail judgement)

## Check categories

- **Environment** — PHP version (requires 8.1+), WordPress version (requires 5.9+), and whether `WP_DEBUG` is on
- **File System** — existence and writability of the CSS uploads directory, and activity log accessibility
- **Plugin Health** — plugin version, DB schema version (flags mismatches as a warning if a migration might be needed), settings count, and whether the upgrade or delete locks are stuck
- **Configuration** — `framework.json` and utility expansion config files loading cleanly
- **CSS Files** — each expected file exists and is not stale. Files untouched for more than 7 days are flagged as warnings.
- **Integrations** — detection of supported builders (Bricks, Gutenberg)
- **Recent Activity** — counts of `error` and `warning` level entries in the last 100 activity events, plus total events logged

## Automatic fixes

When run with `--fix`, the doctor will currently:

- Create the CSS uploads directory if it doesn't exist

More fixers may be added over time. The flag is safe to run — each fix is reported inline and everything else stays read-only.

## JSON output for monitoring

```bash
wp acss doctor --format=json
```

The JSON shape mirrors the sections above, with each check carrying `label`, `status` (`ok`/`warning`/`error`/`info`), and `message`. Pipe it into a monitoring system or fail a deploy on any error:

```bash
wp acss doctor --format=json \
  | jq -e '[.. | objects | select(.status == "error")] | length == 0' \
  || exit 1
```
