---
title: Media Query Recipes
sidebar_position: 100
---

ACSS 4 has no preset breakpoints, so the breakpoint media query recipes are gone. What remains are recipes for container queries.

## Container Queries

- `?container`: a container query inside the current element
- `?card-container`: a container query for a card

Both expand to an `@container card ( … ) { … }` block. Add the size condition and your styles.

:::note Bricks and Gutenberg only
Etch does not offer these two recipes. In Etch, use the container query buttons in the CSS toolbar instead.
:::

## Changes From 3.x

In ACSS 4:

- The `?breakpoint-*` and `?breakpoint-up-*` recipes are removed. They inserted the breakpoints from the dashboard, which ACSS 4 no longer has, so they produced an invalid media query. Write the media query with your own value, for example `@media (width < 768px) { … }`.
