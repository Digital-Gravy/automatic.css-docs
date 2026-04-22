---
title: wp acss logs
sidebar_position: 50
---

Inspect and manage Automatic.css log files. ACSS writes two logs inside the CSS uploads directory:

- **`activity.log`** — structured JSON events (one event per record; may span multiple lines). This is the primary observability log for the plugin.
- **`debug.log`** — line-based PHP-style debug output.

Both files live in `wp-content/uploads/automatic-css/`.

## `tail`

Show the most recent log entries, or follow the file live.

```bash
wp acss logs tail [--events=<n>] [--lines=<n>] [--type=<type>] [--follow]
```

**Options**

- `--type=<type>` — `activity` (default) or `debug`
- `--events=<n>` — number of activity events to show (default: `20`). Only applies to `--type=activity` since activity events are JSON objects, not lines.
- `--lines=<n>` — number of debug lines to show (default: `100`). Only applies to `--type=debug`.
- `--follow` — stream new entries as they're written, like `tail -f`. Press `Ctrl+C` to stop. Detects log rotation automatically.

**Examples**

```bash
# Last 20 activity events (default)
wp acss logs tail

# Last 50 events
wp acss logs tail --events=50

# Debug log instead
wp acss logs tail --type=debug --lines=50

# Live-follow activity as it's written
wp acss logs tail --follow
```

Pipe the activity output through `jq` for structured filtering:

```bash
wp acss logs tail --events=100 | jq 'select(.level == "error")'
```

## `clear`

Empty one or both log files.

```bash
wp acss logs clear [--type=<type>] [--yes]
```

**Options**

- `--type=<type>` — `activity` (default), `debug`, or `all`
- `--yes` — skip the confirmation prompt

**Examples**

```bash
# Clear the activity log (interactive)
wp acss logs clear

# Clear the debug log non-interactively
wp acss logs clear --type=debug --yes

# Clear everything
wp acss logs clear --type=all --yes
```

Clearing the activity log also removes its rotated siblings (`activity.log.1`, `activity.log.2`, `activity.log.3`).

## `path`

Show the resolved paths and sizes of both log files. Handy when you want to open a log in your editor or ship it to a support ticket.

```bash
wp acss logs path [--format=<format>]
```

**Options**

- `--format=<format>` — `table` (default), `json`, or `yaml`

**Example**

```bash
$ wp acss logs path
+----------+-------------------------------------------------------------+--------+---------+
| Type     | Path                                                        | Exists | Size    |
+----------+-------------------------------------------------------------+--------+---------+
| activity | /wp-content/uploads/automatic-css/activity.log              | yes    | 84 KB   |
| debug    | /wp-content/uploads/automatic-css/debug.log                 | no     | -       |
+----------+-------------------------------------------------------------+--------+---------+
```
