---
title: Modern Color Scheme Workflow
sidebar_position: 10
---

ACSS 4.x uses the modern CSS color-scheme workflow: the **`color-scheme`** property and the **`light-dark()`** function. Together they give you light/dark mode without duplicate variables or manual media queries.

## The color-scheme property

**`color-scheme`** tells the browser which color schemes an element supports. It’s set on `:root` (or any container) and can be:

- **`light`** – the element is in a light scheme; form controls, scrollbars, and other UA-rendered UI use light styling.
- **`dark`** – the element is in a dark scheme; UA UI uses dark styling.
- **`light dark`** – the element supports both; the browser picks based on user preference (e.g. system or app setting) or inheritance.

So `color-scheme` doesn’t change your custom colors by itself—it declares the *context*. Your CSS variables then use that context when they’re resolved.

## The light-dark() function

**`light-dark(light-value, dark-value)`** is a CSS function that returns the first argument when the effective color scheme is light, and the second when it’s dark. The “effective” scheme comes from `color-scheme` (on the element or an ancestor) or from the user’s preference when the page allows both.

Example:

```css
:root {
  color-scheme: light dark;
  --surface: light-dark(#fff, #1a1a1a);
  --text: light-dark(#111, #eee);
}
```

When the scheme is light, `var(--surface)` is white and `var(--text)` is dark. When the scheme is dark, they flip. One variable name, two values—no media queries and no duplicate token sets.

## How ACSS uses it

When you [enable Color Scheme Support](color-scheme-setup.md), ACSS outputs your palette variables as **`light-dark(light-value, dark-value)`**. For each color and shade:

- The **light** value is the one you set in the dashboard (your “design” scheme).
- The **dark** value is either auto-inverted (for shades: e.g. ultra-light ↔ ultra-dark) or set by you via the Color Scheme overrides (for main and hover, if you want a different dark-mode color).

So `var(--primary)`, `var(--primary-dark)`, and every other token automatically resolve to the right color for the current scheme. Components that use these variables don’t need to know if the page is light or dark.

ACSS also sets **`color-scheme`** on `:root` from your [Website Scheme](color-scheme-setup.md#website-scheme) setting (e.g. `light dark` so the browser can follow user preference), and provides utilities to force a scheme on a section:

- **`.scheme--light`** – forces `color-scheme: light` on that subtree (e.g. a light card on a dark page).
- **`.scheme--dark`** – forces `color-scheme: dark` on that subtree.

Any `light-dark()` variables used inside that subtree will then resolve using the forced scheme.

## Why this workflow

Using `color-scheme` + `light-dark()`:

- Keeps a **single set of variable names** (e.g. `--primary`, `--base-dark`) that work in both schemes.
- Lets the **browser and OS** drive light vs dark when you use `light dark`, for accessibility and user preference.
- Avoids the old “alt” duplicate tokens and large amounts of `prefers-color-scheme` media-query CSS.
- Works with **native form controls and scrollbars** so they match the declared scheme.

See [Color Scheme Setup](color-scheme-setup.md) for how to enable it in the dashboard and configure defaults and overrides.
