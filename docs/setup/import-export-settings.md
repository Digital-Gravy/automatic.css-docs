---
title: Import and Export Settings
sidebar_position: 40
---

You can move your Automatic.css settings between sites, or keep a copy of them, by exporting them as a JSON file and importing that file on another site. Both actions live in the dashboard's header menu.

![The dashboard header menu with Import settings and Export settings](img/dashboard-import-export-menu.webp)

## Export your settings

1. Open the Automatic.css dashboard on the site's front end or in your builder. The keyboard shortcut <kbd>CMD</kbd> + <kbd>SHIFT</kbd> + <kbd>O</kbd> (<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>O</kbd> on Windows) opens it too, unless you changed it in the dashboard's Options screen.
2. Click the menu icon in the top right corner of the dashboard.
3. Click **Export settings**.

Your browser downloads a file named `acss-settings-YYYY-MM-DD.json`. The file contains the values you currently see in the dashboard, including changes you have not saved yet.

## Import settings

1. Open the dashboard on the site that should receive the settings.
2. Click the menu icon in the top right corner of the dashboard.
3. Click **Import settings** and choose the JSON file.
4. Review the imported values, then open any settings screen and click **Save**.

![The dashboard confirms the import and asks you to review and save](img/dashboard-import-staged.webp)

Imported values are not saved right away. They show up as unsaved changes, so you can look at the result first. If you reload the page without saving, the import is discarded.

Settings that are not in the file keep their current values. Values in the file that this version of Automatic.css does not know are skipped.

## Importing a file from ACSS 3.x

You can import a settings file that was exported from an ACSS 3.x site. Automatic.css recognizes the file and converts its colors and other settings to the 4.x format before staging them.

![The dashboard reports that it converted an ACSS 3.x file](img/dashboard-import-acss3-converted.webp)

:::warning This only converts the file
Importing a 3.x settings file does not upgrade a site from ACSS 3.x to 4.x, and it does not make 3.x content compatible with 4.x. We still recommend leaving existing 3.x sites on 3.x. See [What's New in ACSS 4.x](whats-new-in-4.md) for the differences.
:::

Settings that no longer exist in 4.x are skipped. Always review the result before you save.

## Import & Export in the WordPress admin

The **Import & Export** tab on the Automatic.css settings page in the WordPress admin no longer has its own form. It points you to the dashboard menu described above.

## Using WP-CLI

To export or import settings from the command line, for example during deployments, use [`wp acss settings export` and `wp acss settings import`](../cli/settings.md).
