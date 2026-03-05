---
title: Box Shadows
sidebar_position: 1
slug: box-shadows
---

ACSS provides five customizable box shadow slots that can be configured in the dashboard under **Shadows > Box Shadows**.

Each slot has a customizable **Name** (defaults: 1 through 5) and a **Value** textarea.

## Available Variables

By default, the first three slots have values and the remaining two are empty (ready for your custom presets):

- `var(--box-shadow-1)`
- `var(--box-shadow-2)`
- `var(--box-shadow-3)`
- `var(--box-shadow-4)` *(empty by default)*
- `var(--box-shadow-5)` *(empty by default)*

## Using Box Shadows

Apply box shadows using the CSS variables:

```css
.my-card {
  box-shadow: var(--box-shadow-1);
}

.my-modal {
  box-shadow: var(--box-shadow-3);
}
```

## Custom Names

Each shadow can be given a custom name. If you name shadow 1 "subtle", the variable becomes `var(--box-shadow-subtle)`.

This follows the same pattern as Surfaces and Overlays — use the default numeric names or create semantic names that fit your project.

## Customizing Values

Enter any valid CSS `box-shadow` value, including compound (multi-layer) shadows. Omit the semicolon.

Example values:

```css
/* Simple shadow */
0 4px 20px rgba(0, 0, 0, 0.1)

/* Compound shadow for depth */
0 4px 4px -10px hsl(0 0% 0% / 0.04),
0 13px 13px -10px hsl(0 0% 0% / 0.06),
0 40px 60px -10px hsl(0 0% 0% / 0.08)
```

## Default Values

The first three slots ship with layered, production-quality shadows:

| Slot | Description |
|------|-------------|
| 1 | Subtle — light 3-layer shadow |
| 2 | Medium — 4-layer shadow with more spread |
| 3 | Heavy — 6-layer shadow for strong depth |

## Disabling

Box shadow variables can be disabled under **Options > Box Shadow Variables**.

## Changes From 3.x

In ACSS 4.0:

- Box shadows have moved from **Additional Styling** to the new **Shadows** panel.
- Shadow names now default to `1`, `2`, `3` instead of `m`, `l`, `xl`. Existing installations are migrated automatically.
- There are now **5 available slots** (up from 3).
- Box shadow **utility classes** (`.box-shadow--m`, etc.) have been **removed**. Use the CSS variables directly.
- The old numeric aliases (`--box-shadow-1`, etc.) are now the primary naming convention.
