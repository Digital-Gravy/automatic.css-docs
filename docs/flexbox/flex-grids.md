---
title: Flex Grids (Flexbox Grids)
sidebar_position: 100
---

CSS Grid is a powerful layout system, but it has one weakness for some users. Grids with an unbalanced number of items must remain left-aligned at all times.

![](img/grid3.webp)

Some users prefer unbalanced grid items to be centered at the bottom of the grid, like this:

The only programmatic solution is to use Flexbox. But, Flexbox isn't designed to create grid layouts, so a lot of math is involved to get it right, especially when you want to use gap to space items out.

This is where Automatic.css "Flex Grid" comes in.

Flex Grid is a feature unique to Automatic.css that allows users to create grid layouts where unbalanced items can be centered or stretched.

All the complicated math and setup is done for you. You can even adjust the gap size without issue.

## Using the Flex Grid Recipe

Flex grids are created using the `?flex-grid` recipe in your custom CSS:

```css
.my-grid {
  ?flex-grid;
}
```

Just add the recipe to the parent container and you're all set. Your unbalanced items will be centered at the bottom of the grid by default.

## Locally Scoped Variables

The flex grid recipe provides three locally scoped variables you can use to customize the behavior:

| Variable | Default | Description |
|----------|---------|-------------|
| `--gap` | `var(--grid-gap, 1.5rem)` | Controls the gap between grid items |
| `--columns` | `3` | Sets the number of columns |
| `--stretch` | `0` | Controls whether unbalanced items stretch (set to `1` to enable) |

### Example with Custom Variables

```css
.my-grid {
  ?flex-grid;
  --columns: 4;
  --gap: var(--space-l);
  --stretch: 1; /* Stretch unbalanced items */
}
```

## Responsive Behavior

The recipe includes default media queries for responsive behavior:

```css
@media (max-width: 900px) {
  --columns: 2;
}
@media (max-width: 600px) {
  --columns: 1;
}
```

You can override these breakpoints in your custom CSS to change the responsive behavior:

```css
.my-grid {
  ?flex-grid;
  --columns: 5;
  
  @media (max-width: 1200px) {
    --columns: 3;
  }
  @media (max-width: 768px) {
    --columns: 2;
  }
  @media (max-width: 480px) {
    --columns: 1;
  }
}
```

## Changes From 3.x

In ACSS 4.0:

- Flex Grid utility classes (`.flex-grid--1` through `.flex-grid--6` and all breakpoint variants) have been **replaced** with the `?flex-grid` recipe.
- The recipe provides locally scoped variables (`--gap`, `--columns`, `--stretch`) for customization.
- Responsive behavior is now controlled via media queries rather than breakpoint classes.
