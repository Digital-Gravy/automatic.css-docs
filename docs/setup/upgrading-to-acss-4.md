---
title: Upgrading a v4 prerelease to ACSS 4.0.0
sidebar_position: 20
---

Use this guide if your site is running an **ACSS 4.x prerelease** and you want to move to the final ACSS 4.0.0 release.

The final release installs as a separate WordPress plugin. This is expected: follow the steps below and ACSS will move you from the prerelease to the final release without deleting your settings.

:::warning Are you using ACSS v3?
We recommend leaving existing v3 sites on v3 because v4 is not backward compatible. ACSS will not stop you from installing v4 on a v3 site, but preserving your settings does not make your site compatible with v4. A v3-to-v4 migration is not covered by this guide.

Learn more in [What's New in ACSS 4.x](./whats-new-in-4.md) and [Preparing for ACSS 4.0](https://automaticcss.com/preparing-for-acss-4-0/).
:::

## Before you start

1. Back up the site's files and database.
2. Save the license key used by the prerelease in case you need to roll back.
3. Download the ACSS 4.0.0 ZIP.
4. Copy your new v4 license key [from your account](https://automaticcss.com/account/).

The prerelease key will not work with the final release. If you do not see a new v4 key in your account, [contact support](https://digitalgravy.co/support).

Leave the prerelease plugin active and installed for now. ACSS 4.0.0 will handle the switch when you activate it.

## Upgrade manually

1. Upload, install, and activate ACSS 4.0.0.
2. In WordPress admin, go to **Automatic CSS → License** and activate your new v4 license key.
3. Regenerate the CSS and clear your caches.
4. Check the site and confirm that the license and plugin updates are working.
5. Once everything is working, delete the prerelease plugin.

## Upgrade with WP-CLI

See the command references for [`wp acss license`](../cli/license.md), [`wp acss css`](../cli/css.md), and [`wp acss status`](../cli/status.md).

```bash
# Install and activate ACSS 4.0.0.
wp plugin install /path/to/automatic-css.zip --activate

# Enter your new v4 license key when prompted.
wp acss license set

# If the previous command says the legacy release is pending,
# run these commands and then continue:
# wp acss license deactivate --product=v3
# wp acss license set

# Activate the license and regenerate the CSS.
wp acss license activate
wp acss css regenerate

# Check the upgrade.
wp acss license get --format=json
wp acss status --format=json

# After checking the site, delete the prerelease plugin.
# wp plugin delete automaticcss-plugin
```

The CLI uses the name `v3` for the old license because the v4 prerelease used the v3 licensing system. These commands are still upgrading a v4 prerelease, not a v3 site.

## Multisite

You can upgrade one site at a time or upgrade the whole network at once. We recommend one site at a time because it is easier to check each site and roll it back if needed. The choice belongs to the network administrator, and ACSS does not block network activation.

### Recommended: one site at a time

1. If the prerelease is network-active, change it to individual site activation first.
2. Install ACSS 4.0.0 once, but do not network-activate it.
3. Activate ACSS 4.0.0 on the first site and follow the upgrade steps above.
4. Check the site before moving to the next one.
5. Delete the prerelease plugin only after every site has been upgraded.

With WP-CLI, add the site's URL to each command:

```bash
wp --url=https://subsite.example.com plugin activate automatic-css
```

Use the same `--url` option for the license, CSS, status, and rollback commands.

### Alternative: upgrade the whole network at once

You may network-activate ACSS 4.0.0, but ACSS will not automatically handle the old plugin and license on every site. Before network activation:

1. Back up every site.
2. Save and deactivate the prerelease license on each site.
3. Install ACSS 4.0.0 without activating it.
4. Deactivate the prerelease everywhere it is active.
5. Network-activate ACSS 4.0.0.
6. On each site, activate its new v4 license, regenerate the CSS, clear caches, and check the site.

Do not delete the prerelease plugin until you have checked the whole network. Even after network activation, license setup, CSS regeneration, and verification still happen one site at a time.

## Roll back

For a single site, deactivate ACSS 4.0.0 and reactivate the prerelease:

```bash
wp plugin deactivate automatic-css
wp plugin activate automaticcss-plugin
```

Restore the saved prerelease key if needed, regenerate the CSS, clear caches, and check the site.

For a network-wide upgrade, network-deactivate ACSS 4.0.0 and restore the prerelease's previous network or per-site activation. Then restore and check each site separately.

If you did not save the prerelease key or cannot restore the license, [contact support](https://digitalgravy.co/support).

## Upgrade with an AI assistant

Copy this prompt and replace the bracketed values:

```text
Upgrade my WordPress sites from an ACSS 4.x prerelease to ACSS 4.0.0 using WP-CLI.

The ACSS 4.0.0 ZIP is at: [PATH TO ZIP]
The sites are: [SITE LIST AND ACCESS DETAILS]

First confirm that each site is running an ACSS 4.x prerelease. Stop if a site is running ACSS v3 because a v3-to-v4 migration is not covered by this procedure.

For each site:
1. Confirm there is a current backup.
2. Request the old and new v4 license keys securely. Never expose them in commands or logs.
3. Install and activate ACSS 4.0.0.
4. Release the old license if prompted, set and activate the new v4 key, regenerate CSS, and check ACSS and license status.
5. Keep the prerelease plugin until the site has been checked.
6. If the upgrade fails, deactivate ACSS 4.0.0, reactivate the prerelease, restore its key if needed, regenerate CSS, and report the result.

For multisite, ask the network administrator whether to upgrade one site at a time or the whole network. Recommend one site at a time, but follow the administrator's choice. Never leave the prerelease active when network-activating ACSS 4.0.0. Configure and check every site separately.

Stop on unexpected errors.

Reference documentation:
- Upgrade process: https://docs.automaticcss.com/setup/upgrading-to-acss-4
- WP-CLI commands: https://docs.automaticcss.com/cli/
```
