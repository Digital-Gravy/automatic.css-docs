---
title: Masonry Layouts
sidebar_position: 20
---

![Masonry Layout Example](img/masonry-layout.webp)

ACSS supports masonry layouts through the [`?columns` recipe](../recipes/column-recipes.md). Masonry layouts in CSS are created with CSS Columns, and the `?columns` recipe provides all the control you need.

## Creating a Masonry Layout

Apply the `?columns` recipe to your container element, then set the desired column count:

```css
.my-masonry {
  --col-count: 3;
  --col-gap: var(--space-l);
  --row-gap: var(--space-l);
}
```

## Responsive Masonry Layouts

To make masonry layouts responsive, set a minimum column width instead of (or in addition to) a fixed column count:

```css
.my-masonry {
  --col-min-width: 300px;
  --col-gap: var(--space-l);
  --row-gap: var(--space-l);
}
```

This tells the browser to render as many columns as possible while maintaining the minimum width. Columns will automatically stack when they can't meet the minimum width requirement.

## Gaps in Masonry Layouts

The `?columns` recipe supports both column and row gaps:

- `--col-gap`: Sets the horizontal gap between columns
- `--row-gap`: Sets the vertical gap between items (applied as margin to child elements)

## Ruled Masonry Layouts

Since masonry layouts use CSS columns, ruled columns are supported. Control rule style, color, and width using the recipe's local variables. Read the [Columns documentation](css-columns.md) for more details.

## Changes From 3.x

In ACSS 4.0:

- Masonry utility classes (`.masonry--1` through `.masonry--5`) have been **removed**. Use the [`?columns` recipe](../recipes/column-recipes.md) instead.
