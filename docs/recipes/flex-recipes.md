---
title: Flex Recipes
sidebar_position: 100
---

Flex recipes are helper recipes for quickly establishing flexbox layouts in custom CSS.

## Layout Recipes

### `?flex-row`

Establishes a horizontal flex layout:

```css
.my-container {
  ?flex-row;
}
```

### `?flex-column`

Establishes a vertical flex layout:

```css
.my-container {
  ?flex-column;
}
```

## Centering Recipes

### `?center-all`

Centers content both horizontally and vertically with centered text.

### `?center-left`

Centers content vertically, aligned left.

### `?center-right`

Centers content vertically, aligned right.

### `?center-top`

Centers content horizontally, aligned to top.

### `?center-bottom`

Centers content horizontally, aligned to bottom.

## Grid Recipe

### `?flex-grid`

Creates a flexbox-based grid with centered unbalanced items. See [Flex Grids](../flexbox/flex-grids.md) for full documentation.

**Locally scoped variables:**

- `--gap` - Gap between items (default: `var(--grid-gap, 1.5rem)`)
- `--columns` - Number of columns (default: `3`)
- `--stretch` - Set to `1` to stretch unbalanced items (default: `0`)

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` prefix.
- Flex recipes replace the removed flexbox utility classes.
- New centering and flex-grid recipes added.
