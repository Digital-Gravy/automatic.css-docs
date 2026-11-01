---
title: Media Query Recipes
sidebar_position: 100
updated: 4.0.2
---

ACSS 4 has no breakpoint presets, so there are no breakpoint recipes anymore. `?breakpoint-m`, `?breakpoint-up-l` and the other `?breakpoint-*` recipes were removed in 4.0.2. Before that, they expanded to an empty, invalid media query.

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

These recipes work in Bricks and Gutenberg:

- `?container` and `?card-container` both expand an empty `@container card ( … )` query inside a `%root% { … }` block. Fill in the size condition and your styles. ACSS doesn't create a `card` container for you. Add `container: card / inline-size;` to the element that wraps the card, then fill in the size condition. See [Card Container Recipe](./card-container-recipe.md).
