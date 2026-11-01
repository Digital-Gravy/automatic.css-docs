---
title: Grid Classes
sidebar_position: 100
updated: 4.0.2
---

ACSS 4 has no grid utility classes. `.grid--1` to `.grid--12`, the ratio classes like `.grid--1-2`, the breakpoint variants like `.grid--l-2` or `.grid--m-1`, and the span classes like `.col-span--2` were removed together with the breakpoints.

Build grids on your own classes with [grid variables](grid-variables.md) or [grid recipes](../recipes/grid-recipes.md) instead. The 3.x page is still available in the [3.x docs](/3.0/grids/grid-classes-standard).

## Replacing grid classes

| ACSS 3.x | ACSS 4.x |
| --- | --- |
| `.grid--3` | `grid-template-columns: var(--grid-3);` or `?grid-3` |
| `.grid--1-2` | `grid-template-columns: var(--grid-1-2);` or `?grid-1-2` |
| `.grid--auto-3` | `grid-template-columns: var(--grid-auto-3);` or `?auto-grid` (see [Auto Grids](auto-grids.md)) |
| `.grid--l-2`, `.grid--m-1` | A media query or container query in your class, or your builder's breakpoints |
| `.col-span--2` | `grid-column: span 2;` |

## Example

A three-column grid that switches to one column on small screens:

```css
.service-grid {
  display: grid;
  grid-template-columns: var(--grid-3);
  gap: var(--grid-gap);

  @media (max-width: 768px) {
    grid-template-columns: var(--grid-1);
  }
}
```

In Bricks or another builder with grid controls, you can put `var(--grid-3)` straight into the grid template columns field and change it per breakpoint in the builder.
