---
title: Media Query Recipes
sidebar_position: 100
updated: 4.0.2
---

ACSS 4 has no breakpoint settings, so there are no breakpoint recipes anymore. `?breakpoint-m`, `?breakpoint-up-l` and the other `?breakpoint-*` recipes were removed in 4.0.2. Before that, they expanded to an empty, invalid media query.

Write media queries with the width you need, or use container queries:

```css
.feature-grid {
  grid-template-columns: var(--grid-3);

  @media (max-width: 768px) {
    grid-template-columns: var(--grid-1);
  }
}
```

See [Website Width & Breakpoints](../setup/website-width-breakpoints.md) for how ACSS 4 handles responsiveness.

## Container query recipes

These recipes work in Bricks and Gutenberg (see [Where recipes work](./recipes.md#where-recipes-work)):

- `?container` and `?card-container` both expand an empty `@container card ( … )` query inside a `%root% { … }` block. Fill in the size condition and your styles. They're meant for cards built with the [Card Framework](../cards/card-styling.md), which sets up the `card` container. See [Card Container Recipe](./card-container-recipe.md).

## In Etch

The CSS toolbar in Etch has **Media Query** and **Container Query** buttons. They insert a query that matches the current canvas width or the size of the selected block.
