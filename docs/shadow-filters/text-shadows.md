---
title: Text Shadows
sidebar_position: 2
slug: text-shadows
sidebar_custom_props:
  badge: "New"
---

ACSS provides five customizable text shadow slots that can be configured in the dashboard under **Shadows > Text Shadows**.

Each slot has a customizable **Name** (defaults: 1 through 5) and a **Value** textarea.

## Available Variables

By default, the first three slots have values and the remaining two are empty:

- `var(--text-shadow-1)`
- `var(--text-shadow-2)`
- `var(--text-shadow-3)`
- `var(--text-shadow-4)` *(empty by default)*
- `var(--text-shadow-5)` *(empty by default)*

## Using Text Shadows

Apply text shadows using the CSS variables:

```css
.hero-heading {
  text-shadow: var(--text-shadow-1);
}

.overlay-text {
  text-shadow: var(--text-shadow-3);
}
```

## Custom Names

Each shadow can be given a custom name. If you name shadow 1 "subtle", the variable becomes `var(--text-shadow-subtle)`.

## Customizing Values

Enter any valid CSS `text-shadow` value. Omit the semicolon.

The `text-shadow` property accepts: `offset-x offset-y blur-radius color`.

Example values:

```css
/* Subtle legibility shadow */
0 1px 2px hsl(0 0% 0% / 0.2)

/* Stronger depth shadow */
0 4px 8px hsl(0 0% 0% / 0.4)

/* Colored glow */
0 0 10px hsl(200 100% 50% / 0.6)

/* Multi-layer text shadow */
0 1px 1px hsl(0 0% 0% / 0.1),
0 2px 4px hsl(0 0% 0% / 0.15)
```

## Default Values

| Slot | Default Value |
|------|--------------|
| 1 | `0 1px 2px hsl(0 0% 0% / 0.2)` |
| 2 | `0 2px 4px hsl(0 0% 0% / 0.3)` |
| 3 | `0 4px 8px hsl(0 0% 0% / 0.4)` |

## When to Use Text Shadows

- Improving text readability over images or gradients
- Adding subtle depth to headings
- Creating glow effects on dark backgrounds
- Enhancing text over video or busy backgrounds

## Disabling

Text shadow variables can be disabled under **Options > Text Shadow Variables**.
