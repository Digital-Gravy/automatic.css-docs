---
title: Working in ACSS 4 (Coming From 3.x)
sidebar_position: 12
---

If you built sites with ACSS 3, most of what you know still applies: the same spacing and typography system with its t-shirt sizes (`--space-m`, `--text-l`) and the same color names. Some scales changed, for example widths now use numbered steps (`--width-10` to `--width-90`, `.width--60`) instead of `xs` to `xxl`. What changes is **how you apply it**. This page shows the new way of working, side by side with the old one.

[What's New in ACSS 4.x](./whats-new-in-4.md) lists every change. This page is about your day-to-day workflow.

:::tip Keep existing sites on 3.x
ACSS 4 is not backward compatible with 3.x. Start new projects with 4.x and leave existing 3.x sites on 3.x. The 3.x docs stay available under [3.x](/3.0/) in the version menu.
:::

## The short version

| In ACSS 3 you… | In ACSS 4 you… |
| --- | --- |
| Added utility classes to elements (`.grid--3`, `.flex--row`, `.pad--m`) | Give elements your own class and use ACSS variables or recipes in its CSS |
| Set XL/L/M/S breakpoints and mapped them to your builder | Set nothing. Use your builder's breakpoints or your own media and container queries |
| Used responsive class variants (`.grid--l-2`, `.col-span--m-1`) | Write the change in your class's CSS, or use your builder's breakpoint controls |
| Typed `@recipe` | Type `?recipe` |
| Used `@include breakpoint(m)` in Global SCSS | Write `@media (max-width: 768px)` in Global SCSS |
| Used transparency tokens like `var(--primary-trans-50)` | Use `color-mix()` or relative color syntax |

## 1. Your own classes first, variables inside

ACSS 4 is variable-first. Instead of stacking utility classes on an element, you give it one class (BEM or any naming you like) and use ACSS variables in that class:

```css
/* ACSS 3: <div class="grid--3 gap--m pad--l"> */

/* ACSS 4: <div class="feature-grid"> */
.feature-grid {
  display: grid;
  grid-template-columns: var(--grid-3);
  gap: var(--grid-gap);
  padding: var(--space-l);
}
```

The values still come from your dashboard settings, so changing a setting updates every place that uses the variable.

Some classes still exist, for example button classes (`.btn--primary`), section spacing (`.section--l`), text sizes (`.text--m`) and width classes (`.width--60`). The **Cheat Sheet** in the ACSS dashboard lists every class, variable and recipe your current settings generate. When in doubt, check there.

## 2. Recipes instead of copying code

Recipes expand into ready-made CSS right in your builder's CSS input. Type `?`, the recipe name and `;`:

```css
?auto-grid;
```

Then change `--column-count` in the expanded code.

This is how you get things that used to be utility classes, like auto grids, grids with a fixed column count (`?grid-3`), or `?clickable-parent`. The recipe code is yours to edit after it expands. See [Grid Recipes](../recipes/grid-recipes.md) and the other pages in the Recipes section.

## 3. Responsive without breakpoint presets

ACSS 4 has no breakpoint presets (no XL/L/M/S). Most ACSS features don't need them:

- Typography and spacing are fluid between **Minimum Width** and **Content Width** (Layout → Website Dimensions).
- [Auto grids](../grids/auto-grids.md) and the [`?variable-grid` recipe](../recipes/grid-recipes.md#variable-grid) stack when their items run out of space.

When you need a layout change at a certain width, you have two options:

- **Use your page builder's breakpoints.** In Bricks, put `var(--grid-3)` in the grid columns field and set `var(--grid-1)` at the mobile breakpoint. Bricks breakpoints work normally and don't have to match anything in ACSS.
- **Write the query in your class:**

```css
.feature-grid {
  grid-template-columns: var(--grid-3);

  @media (max-width: 768px) {
    grid-template-columns: var(--grid-1);
  }
}
```

For components that appear in different places (a card in a sidebar and in a full-width grid), a container query is usually the better choice, because it reacts to the space the component has.

## 4. Grids

| ACSS 3 | ACSS 4 |
| --- | --- |
| `.grid--3` | `grid-template-columns: var(--grid-3)` or `?grid-3` |
| `.grid--auto-3` | `grid-template-columns: var(--grid-auto-3)` or `?auto-grid` |
| `.grid--1-2` | `grid-template-columns: var(--grid-1-2)` or `?grid-1-2` |
| `.grid--l-2` | Builder breakpoint or media query |
| `.col-span--2` | `grid-column: span 2` |

Details: [Auto Grids](../grids/auto-grids.md), [Grid Variables](../grids/grid-variables.md), [Grid Classes](../grids/grid-classes-standard.md).

## 5. Colors

- Colors use OKLCH. Light and dark mode use the browser's `color-scheme` and `light-dark()` once you turn on **Enable Color Scheme Support** under Color Scheme (Light/Dark). The "Alt" colors are gone.
- The transparency tokens are gone. Mix the transparency you need:

```css
.overlay {
  /* 50% primary */
  background: color-mix(in oklch, var(--primary) 50%, transparent);
  /* or with relative color syntax */
  background: oklch(from var(--primary) l c h / 50%);
}
```

## 6. Global SCSS

- Breakpoint mixins are gone. Write media queries directly.
- Other mixins, like `@include auto-grid(4)`, still work. See [Mixins](../mixins/what-are-mixins.md).

## Checklist for your first ACSS 4 site

1. Set **Content Width** and **Minimum Width** in Layout → Website Dimensions, and set your builder's container width to `var(--content-width)`.
2. Leave your builder's breakpoints as they are, or set them the way you like. ACSS doesn't need to know them.
3. Open the dashboard Cheat Sheet once to see which classes, variables and recipes exist.
4. Build components with your own classes and ACSS variables, and use `?` recipes for grids and patterns.
5. Don't copy CSS or class names from 3.x projects without checking them against the Cheat Sheet.
