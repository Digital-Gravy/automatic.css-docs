---
title: Transparencies
sidebar_position: 40
---

In ACSS 4.x there are no pre-built transparency tokens. Instead, you create transparencies on demand using two modern CSS features: **Relative Color Syntax** and **color-mix()**. Both are well supported in current browsers and give you full control without maintaining a large library of tokens.

## Why we removed transparency tokens

Previous versions of ACSS shipped a large set of transparency variables (e.g. `--primary-trans-10`, `--base-ultra-dark-trans-60`) for each main color and shade. In 4.x we removed all of them. They’re no longer needed: you can get any transparency you want, for any color, directly in your CSS using the two methods below. That keeps the framework smaller, avoids unused tokens, and lets you define exactly the opacity you need per use case.

## 1. color-mix()

**color-mix()** blends two colors in a given color space. For transparencies, you mix your color with `transparent` and control the result with a percentage.

Syntax: `color-mix(in <color-space>, <color> <percentage>, transparent)`.

**Examples:**

```css
/* 20% primary, 80% transparent */
background: color-mix(in oklch, var(--primary) 20%, transparent);

/* 60% neutral in srgb */
border-color: color-mix(in srgb, var(--neutral) 60%, transparent);
```

Use `in oklch` for consistency with the ACSS palette; `in srgb` is also common and works everywhere. The percentage is how much of the first color (your palette color) is in the mix—so `20%` gives a light tint, `80%` is mostly opaque.

**When to use it:** Quick, readable transparencies from any variable. Great for overlays, borders, shadows, and backgrounds when you want “this color at X% opacity.”

## 2. Relative Color Syntax

**Relative Color Syntax** lets you take an existing color and change one of its channels. So you can start from `var(--primary)` and set only the alpha (or lightness, etc.) to get a transparent version.

Syntax: `oklch(from <color> l c h / <alpha>)` (for OKLCH; other spaces use their own channel names).

**Example:**

```css
/* Primary at 50% opacity */
background: oklch(from var(--primary) l c h / 0.5);

/* Base with 10% alpha */
color: oklch(from var(--base) l c h / 0.1);
```

Here `l`, `c`, and `h` mean “keep the same lightness, chroma, and hue as the source color”; only the alpha (after the `/`) is changed. You can also adjust `l`, `c`, or `h` (e.g. with `calc()`) if you want a lighter or duller transparent color.

**When to use it:** When you want to preserve the exact hue and saturation of a palette color and only change opacity (or tweak one channel). Useful for overlays, focus rings, or any time you need “this exact color, but transparent.”

## Summary

| Need | Prefer |
|------|--------|
| “This color at X% opacity” | `color-mix(in oklch, var(--color) X%, transparent)` |
| “Same color, only change alpha (or one channel)” | `oklch(from var(--color) l c h / 0.5)` |

You can still create your own custom transparency variables in ACSS (e.g. in Custom CSS or a recipe) and reuse them. The change in 4.x is that we no longer ship a fixed set of tokens—you define only what you use, with the full power of modern CSS.
