---
title: wp acss flags
sidebar_position: 70
---

Inspect and override Automatic.css feature flags. Flags gate experimental or optional features and resolve from three layered sources (highest priority first):

1. **`flags.user.json`** — per-site overrides stored in `wp-content/uploads/automatic-css/flags.user.json`. This is what `wp acss flags set`/`unset` edits.
2. **`flags.dev.json`** — in-repo development overrides, shipped from `config/flags.dev.json` in the plugin directory.
3. **`flags.json`** — the canonical list of flags and their default values, shipped from `config/flags.json` in the plugin directory.

A flag must be declared in `flags.json` to be considered valid — entries in the override files that don't exist in `flags.json` are ignored (and surfaced at the bottom of `wp acss flags list` output).

## `list`

List every flag, its current effective value, and which file that value is coming from.

```bash
wp acss flags list [--format=<format>]
```

**Options**

- `--format=<format>` — `table` (default), `json`, or `yaml`

**Example**

```bash
$ wp acss flags list
+----------------------+-------+------------------+
| flag                 | value | source           |
+----------------------+-------+------------------+
| EXAMPLE_FLAG_A       | on    | flags.user.json  |
| EXAMPLE_FLAG_B       | on    | flags.json       |
| EXAMPLE_FLAG_C       | off   | flags.dev.json   |
+----------------------+-------+------------------+
```

If any overrides reference undefined flags, a warning lists them after the table.

## `get`

Print the current value of a single flag. Flag names are matched case-insensitively.

```bash
wp acss flags get <flag>
```

**Example**

```bash
$ wp acss flags get EXAMPLE_FLAG
EXAMPLE_FLAG: on
```

Exits with an error if the flag is not declared in `flags.json`.

## `set`

Override a flag via `flags.user.json`. The file is created on first use.

```bash
wp acss flags set <flag> <value>
```

**Arguments**

- `<flag>` — the flag name (case-insensitive; stored uppercase)
- `<value>` — `on` or `off`

**Example**

```bash
$ wp acss flags set EXAMPLE_FLAG on
Success: Set EXAMPLE_FLAG to "on" in flags.user.json
Note: Reload the page or run "wp acss css regenerate" to apply changes.
```

Only flags declared in `flags.json` can be set — unknown flags are rejected.

## `unset`

Remove an override from `flags.user.json`, reverting the flag to its default (or to the `flags.dev.json` value if one exists).

```bash
wp acss flags unset <flag>
```

**Example**

```bash
$ wp acss flags unset EXAMPLE_FLAG
Success: Removed EXAMPLE_FLAG from flags.user.json
```

If `flags.user.json` ends up empty after the removal, the file itself is deleted.

## `path`

Show the resolved paths of all three flag files and whether each exists.

```bash
wp acss flags path [--format=<format>]
```

**Options**

- `--format=<format>` — `table` (default) or `json`

**Example**

```bash
$ wp acss flags path
+-----------------+----------------------------------------------------------------+--------+
| file            | path                                                           | exists |
+-----------------+----------------------------------------------------------------+--------+
| flags.json      | /wp-content/plugins/automatic-css/config/flags.json            | yes    |
| flags.dev.json  | /wp-content/plugins/automatic-css/config/flags.dev.json        | no     |
| flags.user.json | /wp-content/uploads/automatic-css/flags.user.json              | yes    |
+-----------------+----------------------------------------------------------------+--------+
```

## Applying flag changes

Flags are consumed when the framework runs — in some cases a page reload is enough, in others you'll need to regenerate CSS so the change is picked up in the compiled output:

```bash
wp acss flags set EXAMPLE_FLAG on
wp acss css regenerate
```

If you're not sure whether a given flag affects the compiled CSS, regenerating is the safe default.
