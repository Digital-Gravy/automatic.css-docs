---
title: wp acss css
sidebar_position: 30
---

Manage Automatic.css stylesheet generation from the command line.

## `regenerate`

Regenerate every stylesheet from the current saved settings without modifying any settings values. Useful after deploying plugin updates, restoring backups, or when stylesheets are missing or stale.

```bash
wp acss css regenerate
```

**Example**

```bash
$ wp acss css regenerate
Regenerating CSS files...
Generated files:
  - /wp-content/uploads/automatic-css/automatic.css
  - /wp-content/uploads/automatic-css/automatic-variables.css
Success: 2 CSS file(s) regenerated in 1.23 seconds.
```

The command prints each generated file and reports the total elapsed time. If no settings have been saved yet, the command exits with an error — configure the plugin from the dashboard first, or import settings with [`wp acss settings import`](settings.md#import).

## When to use it

- After importing settings with `--skip-css`
- When the `uploads/automatic-css/` directory has been cleared or files are missing
- As part of post-restore automation in a CI/CD pipeline
- After a plugin update if stylesheets look out of sync with the current settings

Running the command multiple times is safe — it only overwrites the compiled CSS outputs, and your settings are never touched.
