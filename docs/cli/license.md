---
title: wp acss license
sidebar_position: 80
---

Manage the Automatic.css v4 license from the command line. You can inspect the current license state, store a replacement key, activate it, or deactivate the site.

:::caution Keep license keys secret
License keys should not be passed as command arguments because arguments can be saved in shell history or exposed in process listings. The `set` command reads the key from a hidden interactive prompt or standard input instead.
:::

## `get`

Check the configured v4 license against the licensing server and show both its current state and the status stored by WordPress.

```bash
wp acss license get [--format=<format>] [--show-key]
```

**Options**

- `--format=<format>` — `table` (default) or `json`
- `--show-key` — print the complete license key instead of a masked value. Treat the output as a secret.

**Examples**

```bash
wp acss license get
wp acss license get --format=json
```

By default, a configured key is masked except for its first and last four characters. The command contacts the licensing server, so it can fail if the site cannot reach the server or if the server rejects the license.

## `set`

Store a replacement v4 license key without activating it.

```bash
wp acss license set
```

In an interactive terminal, WP-CLI displays a hidden prompt:

```bash
$ wp acss license set
Automatic.css v4 license key: 
Success: Automatic.css license key stored. Activation was not attempted.
```

For scripts, pipe the key through standard input:

```bash
printf '%s' "$ACSS_LICENSE_KEY" | wp acss license set
```

The key cannot be supplied as a positional argument. Storing a new key clears the previously saved license status; run `activate` afterward to activate the site.

## `activate`

Activate the stored key for Automatic.css v4.

```bash
wp acss license activate
```

The command uses the key previously saved by the dashboard or [`wp acss license set`](#set). It exits with an error if no key is configured, the licensing server cannot be reached, the key is invalid, or the activation limit has been reached.

```bash
printf '%s' "$ACSS_LICENSE_KEY" | wp acss license set
wp acss license activate
```

## `deactivate`

Deactivate the site's Automatic.css v4 license and remove the locally stored key and status.

```bash
wp acss license deactivate
```

On success, this frees the site's v4 activation and clears its saved license details. If you need the key later, store it securely before deactivating; the command does not print it.

## Non-interactive deployment example

```bash
printf '%s' "$ACSS_LICENSE_KEY" | wp acss license set
wp acss license activate
wp acss license get --format=json
```

Keep `$ACSS_LICENSE_KEY` in your deployment platform's secret store rather than committing it to a script or repository.
