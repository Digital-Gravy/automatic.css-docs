---
title: Implementing Color Scheme
sidebar_position: 30
---

Once [Color Scheme Support is enabled](color-scheme-setup.md) and your palette uses `light-dark()`, you choose how the site *applies* the scheme: follow the user, use a manual switch, or keep one default and use scheme only in specific areas.

## Respecting user preference with global "light dark"

**Use case:** The whole site should follow the user’s system or app preference (light or dark). No toggle—the browser decides.

**Setup:**

1. In **Color Scheme (Light/Dark)**, turn **Enable Color Scheme Support** on.
2. Set **Website Scheme** to **light dark**.

ACSS sets `color-scheme: light dark` on `:root`. The browser then uses the user’s preference (e.g. OS or browser setting) to resolve every `light-dark(light, dark)` variable. Your palette automatically matches that preference site-wide. Form controls, scrollbars, and other UA UI also follow the same scheme.

This is the best option for accessibility and “it just works” dark mode with no extra UI.

## Loading a light or dark site by default with a manual switch

**Use case:** The site loads in one scheme (e.g. light) and the user can switch to the other via a button or control. The choice can be stored (e.g. in `localStorage`) and reapplied on the next visit.

**Setup:**

1. Enable **Color Scheme Support**.
2. Set **Website Scheme** to **light only** or **dark only** so the *default* load is the scheme you design for.
3. Implement a toggle (e.g. “Dark mode” button) that:
   - Updates `color-scheme` on the root (e.g. on `<html>` or a wrapper). For example, when the user turns dark mode on, set `color-scheme: dark` on the root; when off, set `color-scheme: light`.
   - Optionally saves the choice and restores it on load so the next visit starts in the user’s preferred scheme.

Because your variables are already `light-dark(light, dark)`, changing the root `color-scheme` is enough—all variables flip without changing any class names or tokens. You can use a small script or a builder feature that toggles a class that sets `color-scheme: dark` or `light` on the root.

## Default light or dark, with scheme only for parts of the site

**Use case:** The site is mostly one scheme (e.g. light), but you want:
- Certain areas to be inverted (e.g. a dark footer or a dark card), or
- “Alt” versions of components (e.g. a light card on a dark page, or dark form/icon variants) without making the whole site switch.

**Setup:**

1. Enable **Color Scheme Support**.
2. Set **Website Scheme** to **light only** or **dark only** so the *page default* is fixed.
3. So only specific elements use the other scheme, either:
   - **Use the `color-scheme` property on the block** – Add a wrapper (e.g. a card, form container, icon block) and set `color-scheme: dark` or `color-scheme: light` on it—via the utility classes **.scheme--dark** / **.scheme--light** or in your own CSS. That subtree then uses the dark or light value of every `light-dark()` variable.
   - **Or use Force Scheme in the dashboard** – Under **Force Scheme**, enter selectors for elements that should always be dark or always light. Those elements (and their descendants) get the corresponding `color-scheme` and thus the right variable values.

So the main page stays light (or dark), and only the sections you wrap or target switch. That gives you:
- Inverted sections (e.g. dark hero or dark sidebar on a light site).
- Alt components: e.g. a “dark” card or “dark” form that’s just a wrapper with `.scheme--dark` so it uses dark palette values while the rest of the page stays light.

Icons, forms, and other components that use ACSS palette variables will respond to the scheme of their nearest ancestor with a set `color-scheme`, so you can mix light and dark components on the same page.

:::note
Sections, blocks, or components that you manually flip the scheme for will not appear to invert correctly if they don’t have **explicitly defined background and foreground colors**. For example, a section with no background that relies on the body background will not invert its background, because it has no background set. The same can be true for text that inherits the body color—headings and text should have their color set in the typography settings for manual color scheme inversion to work more consistently.
:::

## Customizing scheme with manual light-dark functions

**Use case:** You want a property to switch with the active scheme but the value isn’t in the ACSS palette—e.g. a custom border color, a shadow, or a one-off background. Or you want to override a palette variable for one component with a different light/dark pair.

**Approach:** Use the **`light-dark(light-value, dark-value)`** function directly in your own CSS or in the input fields in the ACSS dashboard. The effective scheme (from `color-scheme` on the element or an ancestor) decides which argument is used.

These rules respect the same scheme context as ACSS variables: inside a `.scheme--dark` wrapper, the second (dark) value is used; inside `.scheme--light` or on a light page, the first (light) value is used. So you can customize individual properties without leaving the palette for everything else.
