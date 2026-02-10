---
title: Width Utilities
sidebar_position: 80
---

Width utilities set the **max inline size** of elements so they don’t exceed a fraction of your [content width](content-width.md). They use logical properties (`inline-size`, `max-inline-size`) and are responsive by default.

**When are they loaded?** The width **classes** (`.width--10` … `.width--90`, `.width--full`, etc.) are only included in your compiled CSS when the **Width** option is on. The width **variables** (`--width-10` … `--width-90`) are only included when **Width Variables** is on (in **Options > Variable Manager**). If you don’t see the width classes or variables, turn on the corresponding option in **Options** and regenerate your CSS. Disabling Width Variables does not remove `--content-width`; that variable is always available.

## How they work

Width classes are based on your website’s content width, not percentages. Each utility sets `inline-size: 100%` and `max-inline-size` to a fraction of `var(--content-width)`. That gives you a fixed maximum that scales with your content width and avoids the layout issues you get with percentage-based widths on small screens.

## Standard width classes (10–90)

Use the pattern `.width--[value]` with **10, 20, 30, 40, 50, 60, 70, 80, or 90**. The value is the percentage of content width (e.g. `.width--50` = 50% of content width).

Example for `.width--20`:

```css
inline-size: 100%;
max-inline-size: calc(var(--content-width) * 0.2);
```

Because they use `max-inline-size`, elements stay responsive and don’t cause horizontal overflow.

## Width variables

When **Width Variables** is on, each standard width has a matching variable:

- `var(--width-10)` … `var(--width-90)`  
  Same as the classes: e.g. `--width-30` = `calc(var(--content-width) * 0.3)`.

Use them when you need a width in custom CSS or in a builder field that accepts CSS.

## Special width classes

| Class | Effect |
|-------|--------|
| `.content-width` | Max inline size = content width; centered. See [Content Width](content-width.md). |
| `.content-width--safe` | Content width with virtual gutter. See [Content Width (Safe)](content-width-safe.md). |
| `.width--full` | `inline-size: 100%`; `max-inline-size: 100%`. |
| `.width--auto` | `inline-size: auto`; `max-inline-size: 100%`. |
| `.width--max-content` | `inline-size: max-content`; `max-inline-size: 100%`. |
| `.width--min-content` | `inline-size: min-content`; `max-inline-size: 100%`. |
| `.width--fit-content` | `inline-size: fit-content`; `max-inline-size: 100%`. |

## Changes From 3.x

In ACSS 4.0:

- All width utilities use **logical properties**: `inline-size` and `max-inline-size` instead of `width` and `max-width`.
- **Width** and **Width Variables** are toggled under **Options** (Width in the main options list; Width Variables in Variable Manager). The width classes and variables are **optional**—they are only output when these options are on.
- Standard scale is unchanged: `.width--10` through `.width--90` and matching `--width-10` … `--width-90` variables when enabled.
