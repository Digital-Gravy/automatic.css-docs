---
title: Upgrading to ACSS 4.0.0
sidebar_position: 20
---

## Before you start

- Back up the site's files and database, and save the current v3 license key for rollback.
- Download the ACSS 4.0.0 ZIP and copy your v4 license key [from your account](https://automaticcss.com/account/).

The v3 license key does not work with ACSS v4. If no v4 key is shown in your account, [contact support](https://digitalgravy.co/support).

ACSS v4 is not backward compatible with v3. Upgrading generally only makes sense for sites using Bricks or Etch. Read [Preparing for ACSS 4.0](https://automaticcss.com/preparing-for-acss-4-0/) before continuing.

Do not deactivate or delete the existing plugin before the process is complete.

## Upgrading manually

1. Upload, install, and activate ACSS 4.0.0.
2. Open the Automatic.css dashboard, enter your v4 license key, and activate it.
3. Regenerate the CSS, clear caches, and verify the site, license, and updates.
4. After verification, you may delete the legacy plugin.

## Upgrading via WP-CLI

See the command references for [`wp acss license`](../cli/license.md), [`wp acss css`](../cli/css.md), and [`wp acss status`](../cli/status.md).

```bash
# Install and activate ACSS 4.0.0.
wp plugin install /path/to/automatic-css.zip --activate

# Enter the v4 license key when prompted.
wp acss license set

# If the previous command says the legacy release is pending,
# run these two commands before continuing:
# wp acss license deactivate --product=v3
# wp acss license set

# Activate the v4 license and regenerate the CSS.
wp acss license activate
wp acss css regenerate

# Verify the upgrade.
wp acss license get --format=json
wp acss status --format=json

# After checking the site, you can remove the old plugin.
# wp plugin delete automaticcss-plugin
```

## Upgrading multisite

On multisite, the network administrator controls when each subsite is ready to upgrade:

1. If the legacy plugin is network-active, convert it to per-site activation before starting.
2. Install ACSS 4.0.0 once without network activation. Keep both plugin versions installed during the staged upgrade.
3. Activate v4 from the target subsite's Plugins screen, then follow the manual steps above. Activating v4 switches only that subsite; other subsites remain on the legacy plugin.
4. For WP-CLI, add `--url=https://subsite.example.com` after `wp` in every site-scoped command. After installing the ZIP for the first subsite, begin later upgrades with `wp --url=https://subsite.example.com plugin activate automatic-css`.
5. Repeat the process only for subsites that are ready. Wait until every subsite has been upgraded before deleting the legacy plugin files.

Do not network-activate v4 as part of a staged upgrade. For rollback, add the affected subsite's `--url` argument to both rollback commands below.

## Rolling back

Use this procedure if the upgrade fails before ACSS v4 has been fully verified.

```bash
wp plugin deactivate automatic-css
wp plugin activate automaticcss-plugin
```

Restore the saved v3 key in the legacy dashboard and reactivate it if necessary. Then regenerate the CSS, clear caches, and verify the site. Contact support if the v3 key was not saved.

## Upgrade with an AI assistant

Copy the following prompt and replace the bracketed values:

```text
Upgrade my WordPress sites to ACSS 4.0.0 using WP-CLI.

The ACSS ZIP is at: [PATH TO ZIP]
The sites are: [SITE LIST AND ACCESS DETAILS]

For each site:
1. Confirm there is a current backup.
2. Request the v3 and v4 keys securely; never expose them in commands or logs.
3. Install and activate v4, release the v3 activation if pending, set and activate the v4 key, regenerate CSS, and verify ACSS and license status.
4. Keep the legacy plugin until verification. On failure, deactivate v4, reactivate v3, restore its key if needed, regenerate CSS, and report the result.

For multisite, install the ZIP once, use `wp --url=<subsite>` for site-scoped commands, and upgrade only the explicitly approved subsites. Do not network-activate v4 or change another subsite. Wait until every subsite has been upgraded before deleting the legacy plugin files.

Stop on unexpected errors.

Reference documentation:
- Upgrade process: https://docs.automaticcss.com/setup/upgrading-to-acss-4
- WP-CLI commands: https://docs.automaticcss.com/cli/
```
