---
title: wp acss settings
sidebar_position: 20
---

Manage Automatic.css settings from the command line. These subcommands operate directly on the same settings store used by the dashboard, so changes made here are reflected in the dashboard and vice versa.

## `get`

Retrieve one or all settings.

```bash
wp acss settings get [<key>] [--format=<format>]
```

**Arguments**

- `<key>` *(optional)* — the setting key to retrieve. If omitted, returns all settings.

**Options**

- `--format=<format>` — output format. `json`, `yaml`, or `var_export`. Default is `json` for "all settings" and the raw value for a single key.

**Examples**

```bash
# Get all settings as JSON
wp acss settings get

# Get a specific setting (prints the raw value)
wp acss settings get color-primary
# #3366cc

# Get all settings as YAML
wp acss settings get --format=yaml
```

If the key doesn't exist, the command exits with an error.

## `set`

Update a single setting value.

```bash
wp acss settings set <key> <value> [--force] [--skip-css]
```

**Arguments**

- `<key>` — the setting key to update
- `<value>` — the value to set

**Options**

- `--force` — skip schema validation and write the value directly. Useful when experimenting, but can produce invalid CSS if misused.
- `--skip-css` — do not regenerate stylesheets after saving. You can run [`wp acss css regenerate`](css.md) later when ready.

**Examples**

```bash
# Set a color value (validated, CSS regenerated)
wp acss settings set color-primary "#ff0000"

# Set without regenerating CSS
wp acss settings set color-primary "#ff0000" --skip-css

# Bypass validation (for testing)
wp acss settings set color-primary "invalid" --force
```

On success the command reports how many CSS files were regenerated. Validation errors, permission errors, and other exceptions are reported as `WP_CLI::error`, which exits with a non-zero status — safe to use in scripts.

## `list`

List all settings, optionally filtered by a substring pattern.

```bash
wp acss settings list [--search=<pattern>] [--format=<format>]
```

**Options**

- `--search=<pattern>` — filter to setting keys containing the pattern
- `--format=<format>` — `table` (default), `json`, `csv`, `yaml`, or `count`

**Examples**

```bash
# All settings in a table
wp acss settings list

# All color-related settings
wp acss settings list --search=color

# Just the count
wp acss settings list --format=count
```

## `export`

Export all settings as JSON.

```bash
wp acss settings export [--file=<path>]
```

**Options**

- `--file=<path>` — write JSON to this file. If omitted, the JSON is printed to stdout (so you can pipe it).

**Examples**

```bash
# Print to stdout (pipe-friendly)
wp acss settings export > acss-settings.json

# Write directly to a file
wp acss settings export --file=/tmp/acss-settings.json
```

The output is pretty-printed JSON containing every setting in the database.

## `import`

Import settings from a JSON file, replacing the current configuration.

```bash
wp acss settings import <file> [--force] [--skip-css] [--yes]
```

**Arguments**

- `<file>` — path to a JSON file produced by `wp acss settings export` (or any compatible JSON object)

**Options**

- `--force` — skip validation during import
- `--skip-css` — do not regenerate stylesheets after import
- `--yes` — skip the interactive confirmation prompt (required for non-interactive scripts)

**Examples**

```bash
# Interactive import (asks for confirmation)
wp acss settings import /tmp/acss-settings.json

# Non-interactive, skip CSS regeneration (for CI)
wp acss settings import ./config/acss-settings.json --yes --skip-css
```

:::warning
Import **replaces** all current settings. There is no automatic backup — take a snapshot with `wp acss settings export --file=...` before importing if you need to be able to roll back.
:::

## `reset`

Reset every setting to the plugin defaults.

```bash
wp acss settings reset [--skip-css] [--yes]
```

**Options**

- `--skip-css` — do not regenerate stylesheets after reset
- `--yes` — skip the confirmation prompt

**Examples**

```bash
# Interactive reset
wp acss settings reset

# Non-interactive
wp acss settings reset --yes
```

:::danger
This wipes all dashboard configuration on the site. Export your settings first if you're not certain.
:::
