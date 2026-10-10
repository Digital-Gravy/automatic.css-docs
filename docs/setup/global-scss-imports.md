---
title: Imports in Global SCSS
sidebar_position: 50
---

The **Global SCSS** screen in the Automatic.css dashboard compiles your own SCSS together with the framework. Automatic.css's [mixins](../mixins/auto-grid-mixin.md) and functions are available there without any import.

## What you can import

- **Plain CSS imports** stay as they are in the generated stylesheet, for example `@import url("https://fonts.googleapis.com/css2?family=Inter");`.
- **Automatic.css files**, such as its mixins and functions, are always available.
- **Your own SCSS partials**, for example from your theme, can be imported by users who are allowed to add unfiltered HTML. On a single site, that is every administrator.

## Multisite networks

WordPress treats Super Admins and site administrators differently: only users with the "unfiltered HTML" permission may add raw code. That is why WordPress itself lets only Super Admins edit the Customizer's Additional CSS on a multisite network.

Automatic.css lets site administrators edit Global SCSS, with one limit. When they change it, `@import` can only load Automatic.css files. This keeps one site from reading another site's or the server's stylesheets into its public CSS.

- Plain CSS imports and Automatic.css mixins and functions keep working.
- Importing a partial from the theme or any other folder fails. The dashboard shows a "CSS generation failed" message that names the import, and the previously generated CSS stays in place.
- Super Admins are not limited. If the Global SCSS needs a theme partial, a Super Admin has to add it.
- If a site administrator later changes Global SCSS that imports such a partial, the import stops working until a Super Admin saves it again or the import is removed.

## Sites that disallow unfiltered HTML

Some hosts and security plugins set `DISALLOW_UNFILTERED_HTML` in `wp-config.php`. Then no user has the "unfiltered HTML" permission, not even administrators on a single site, and the same limit applies to everyone who edits Global SCSS.

Global SCSS that was saved before that keeps compiling as it is until someone changes it.
