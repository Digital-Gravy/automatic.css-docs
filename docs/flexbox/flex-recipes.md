---
title: Flex Recipes
sidebar_position: 200
---

Flex recipes are helper recipes for quickly establishing flexbox layouts in custom CSS. These recipes are available as utility expansions in the ACSS workflow.

## Layout Recipes

### `?flex-row`

Establishes a horizontal flex layout:

```css
.my-container {
  ?flex-row;
}
```

Expands to:

```css
.my-container {
  display: flex;
  flex-direction: row;
}
```

### `?flex-column`

Establishes a vertical flex layout:

```css
.my-container {
  ?flex-column;
}
```

Expands to:

```css
.my-container {
  display: flex;
  flex-direction: column;
}
```

## Centering Recipes

These recipes provide quick centering solutions using Flexbox.

### `?center-all`

Centers content both horizontally and vertically:

```css
.hero-content {
  ?center-all;
}
```

Expands to:

```css
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
```

### `?center-left`

Centers content vertically, aligned to the left:

```css
.sidebar-content {
  ?center-left;
}
```

Expands to:

```css
.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
}
```

### `?center-right`

Centers content vertically, aligned to the right:

```css
.action-buttons {
  ?center-right;
}
```

Expands to:

```css
.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}
```

### `?center-top`

Centers content horizontally, aligned to the top:

```css
.header-content {
  ?center-top;
}
```

Expands to:

```css
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}
```

### `?center-bottom`

Centers content horizontally, aligned to the bottom:

```css
.footer-content {
  ?center-bottom;
}
```

Expands to:

```css
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
}
```

## Grid Recipe

### `?flex-grid`

Creates a flexbox-based grid layout with centered unbalanced items. See [Flex Grids](./flex-grids.md) for full documentation.

```css
.my-grid {
  ?flex-grid;
}
```

Provides locally scoped variables for customization:

| Variable | Default | Description |
|----------|---------|-------------|
| `--gap` | `var(--grid-gap, 1.5rem)` | Gap between grid items |
| `--columns` | `3` | Number of columns |
| `--stretch` | `0` | Set to `1` to stretch unbalanced items |

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` prefix.
- Flex recipes replace the removed flexbox utility classes (`.flex--row`, `.flex--col`, etc.).
- New centering recipes added: `?center-all`, `?center-left`, `?center-right`, `?center-top`, `?center-bottom`.
- New `?flex-grid` recipe replaces the deprecated flex-grid utility classes.
