---
title: WP-CLI Commands
sidebar_position: 10
---

Automatic.css 4.x ships with a full [WP-CLI](https://wp-cli.org/) command suite, exposed under the top-level `wp acss` namespace. You can script everything from settings changes and CSS regeneration to health checks and log inspection — useful for deployments, CI pipelines, staging/production workflows, and debugging remotely over SSH.

## Prerequisites

- WP-CLI installed on the server (most managed WordPress hosts include it by default)
- Automatic.css 4.x active on the site
- Shell access with permission to run `wp` commands as a user that has access to the WordPress installation

CLI commands are only registered when WP-CLI is available, so they won't affect normal web requests.

## Command Groups

| Command | What it does |
| --- | --- |
| [`wp acss settings`](settings.md) | Get, set, list, export, import, and reset framework settings |
| [`wp acss css`](css.md) | Regenerate the compiled stylesheets |
| [`wp acss status`](status.md) | Show plugin version, active builders, CSS file state, flags |
| [`wp acss logs`](logs.md) | Tail, clear, and locate the activity and debug logs |
| [`wp acss doctor`](doctor.md) | Run diagnostic health checks on the installation |
| [`wp acss flags`](flags.md) | Inspect and override feature flags |

## Getting Help

WP-CLI's built-in help works on every command and subcommand:

```bash
wp help acss
wp help acss settings
wp help acss settings set
```

The help output lists every option, expected format, and includes usage examples pulled straight from the command definitions.

## Common Scripting Patterns

**Check status as JSON and pipe into `jq`:**

```bash
wp acss status --format=json | jq '.css'
```

**Run a non-interactive settings import in CI:**

```bash
wp acss settings import ./config/acss-settings.json --yes --skip-css
wp acss css regenerate
```

**Add a health check to a deployment script:**

```bash
wp acss doctor --format=json > /tmp/acss-health.json
```

The `--format=json` flag is available on most read-only commands, making it straightforward to integrate with monitoring or CI tooling.
