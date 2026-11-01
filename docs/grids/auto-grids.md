---
title: Auto Grids
sidebar_position: 100
updated: 4.0.2
---

Auto grids are responsive on their own. You set how many columns the grid has on large screens, and the items move to new rows when they get too narrow. You don't need any breakpoints.

Benefits of auto grids:

- No breakpoint decisions
- Stacking follows the space each item has, not the screen width
- Very little CSS

Downside: column and row spans aren't practical in an auto grid.

:::info Coming from ACSS 3?
ACSS 4 has no auto grid utility classes. `.grid--auto-2` to `.grid--auto-12`, the ratio classes (`.grid--auto-1-2` and so on), `.grid--auto-fill`, `.grid--stack-even` and `.grid--stack-any` don't exist anymore, and there is no Auto Grid toggle under Utility Classes. Use the variables, the recipe or the mixin below. The 3.x page is still available in the [3.x docs](/3.0/grids/auto-grids).
:::

## Three ways to use auto grids

| Method | Where | Use it when |
| --- | --- | --- |
| [Variables](#variables) `var(--grid-auto-4)` | Any CSS input, builder grid controls | You're fine with the default stacking. |
| [Recipe](#recipe) `?auto-grid` | Any CSS input that supports recipes | You want to set the minimum item width or the aggressiveness for one grid. |
| [Mixin](#mixin) `@include auto-grid(4)` | Global SCSS in the ACSS dashboard | You write your styles in SCSS. |

## Variables {#variables}

ACSS outputs one variable per column count, from `var(--grid-auto-2)` to `var(--grid-auto-12)`. Use it as `grid-template-columns`:

```css
.card-grid {
  display: grid;
  grid-template-columns: var(--grid-auto-3);
  gap: var(--grid-gap);
}
```

Use `var(--grid-gap)` as the gap or a value close to it. The variable calculates its stacking point from `var(--grid-gap)`.

The variables are on by default. You can turn them off in **Options → Variable Manager → Auto Grid Variables**.

The variables already contain the calculated minimum width, so setting `--min` on the grid has no effect. If you need a different stacking point, use the recipe.

## Recipe {#recipe}

Type `?auto-grid` in the CSS input of your class and the recipe expands into the full auto grid code. Two values are meant to be edited:

- `--column-count`: the number of columns on large screens (default `4`)
- `--auto-grid-aggressiveness`: how early the items stack, from `0` to `1` (default `.7`). Higher numbers stack sooner.

To set a fixed minimum item width instead, override `--min`:

```css
.testimonial-grid {
  ?auto-grid;
  --column-count: 3;
  --min: 280px;
}
```

Now the cards move to a new row as soon as they would get narrower than 280px.

### Forcing even columns

The recipe contains a commented-out block that keeps grids with an even column count even while they stack (4 → 2 → 1 instead of 4 → 3 → …). Uncomment it if you need it, and change the `min-width` in that block to the width below which a single column is allowed.

## Mixin {#mixin}

In **Global SCSS** in the ACSS dashboard you can apply an auto grid to any selector with the [auto grid mixin](../mixins/auto-grid-mixin.md):

```scss
.my-grid {
  @include auto-grid(4);
}
```

## Global settings

**Layout → Auto Grid** in the dashboard sets the defaults for the variables and the mixin:

- **Flow Option**: `auto-fit` (default) stretches items to fill the row when there are fewer items than columns. `auto-fill` keeps the empty cells.
- **Aggressiveness**: how early items stack, from `0` to `1` (default `.7`).

The recipe doesn't use these settings. It brings its own values, which you edit in the expanded code.

## Uneven (ratio) grids

ACSS 4 has no automatic ratio grids. For uneven columns, use the [grid variables](grid-variables.md) `var(--grid-1-2)`, `var(--grid-2-1)`, `var(--grid-1-3)`, `var(--grid-3-1)`, `var(--grid-2-3)` or `var(--grid-3-2)` and switch to a single column with a media or container query:

```css
.feature-split {
  display: grid;
  grid-template-columns: var(--grid-2-1);
  gap: var(--grid-gap);

  @media (max-width: 992px) {
    grid-template-columns: var(--grid-1);
  }
}
```
