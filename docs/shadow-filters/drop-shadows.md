---
title: Drop Shadows
sidebar_position: 3
slug: drop-shadows
sidebar_custom_props:
  badge: "New"
---

ACSS provides five customizable drop shadow slots that can be configured in the dashboard under **Shadows > Drop Shadows**.

Each slot has a customizable **Name** (defaults: 1 through 5) and a **Value** textarea.

## Available Variables

By default, the first three slots have values and the remaining two are empty:

- `var(--drop-shadow-1)`
- `var(--drop-shadow-2)`
- `var(--drop-shadow-3)`
- `var(--drop-shadow-4)` *(empty by default)*
- `var(--drop-shadow-5)` *(empty by default)*

## Using Drop Shadows

Apply drop shadows using the `filter` property:

```css
.my-icon {
  filter: var(--drop-shadow-1);
}

.floating-element {
  filter: var(--drop-shadow-3);
}
```

:::tip
ACSS wraps your value in `drop-shadow()` automatically. In the dashboard, just enter the raw values (offset, blur, color) — not the `drop-shadow()` function itself.
:::

## Custom Names

Each shadow can be given a custom name. If you name shadow 1 "subtle", the variable becomes `var(--drop-shadow-subtle)`.

## Customizing Values

In the dashboard, enter the **inner values** only. ACSS wraps them in `drop-shadow()` for you.

The `drop-shadow()` function accepts: `offset-x offset-y blur-radius color`.

Example values to enter in the dashboard:

```css
/* Subtle */
0 1px 2px hsl(0 0% 0% / 0.15)

/* Medium */
0 4px 6px hsl(0 0% 0% / 0.2)

/* Strong */
0 10px 15px hsl(0 0% 0% / 0.25)
```

## Default Values

| Slot | Default Value (raw) |
|------|---------------------|
| 1 | `0 1px 2px hsl(0 0% 0% / 0.15)` |
| 2 | `0 4px 6px hsl(0 0% 0% / 0.2)` |
| 3 | `0 10px 15px hsl(0 0% 0% / 0.25)` |

These produce CSS custom properties like:

```css
--drop-shadow-1: drop-shadow(0 1px 2px hsl(0 0% 0% / 0.15));
```

## Drop Shadow vs. Box Shadow

| | `box-shadow` | `filter: drop-shadow()` |
|---|---|---|
| **Shape** | Always a rectangle (follows the box model) | Follows the element's alpha channel (transparency) |
| **Best for** | Cards, containers, rectangular elements | Icons, PNGs with transparency, SVGs, irregular shapes |
| **Multiple shadows** | Supports compound values | One shadow per `drop-shadow()` function (can chain multiple `drop-shadow()` filters) |
| **Inset** | Supports `inset` keyword | No inset support |
| **Performance** | Slightly faster | Uses GPU compositing |

### When to use drop shadows

- SVGs and icon elements
- Images with transparent backgrounds (PNGs, WebPs)
- Elements with `clip-path` or `mask`
- Any non-rectangular shape that needs a shadow conforming to its outline

## Disabling

Drop shadow variables can be disabled under **Options > Drop Shadow Variables**.
