---
title: Grid Recipes
sidebar_position: 100
updated: 4.0.2
---

## `?grid-{}`

Expose the code for any standard grid utility in ACSS. This includes:

- `?grid-1`
- `?grid-2`
- `?grid-3`
- `?grid-4`
- `?grid-5`
- `?grid-6`
- `?grid-7`
- `?grid-8`
- `?grid-9`
- `?grid-10`
- `?grid-11`
- `?grid-12`
- `?grid-1-2`
- `?grid-1-3`
- `?grid-2-1`
- `?grid-2-3`
- `?grid-3-1`
- `?grid-3-2`

**Pro tip:** You can declare different grids at different screen widths by combining grid recipes with your own `@media` queries.

## `?auto-grid`

Expands code for creating an auto grid. Set the number of columns with `--column-count` and how early it stacks with `--auto-grid-aggressiveness`. The minimum item width (`--min`) is calculated from these.

## `?variable-grid`

Expands code for creating a variable grid. The min item width can be set with `--min` and defaults to `350px`.

## Changes in 4.0.2 <Since version="4.0.2" /> {#changes-in-402}

- `?variable-grid`: `--min` now defaults to `350px`, and the gap is `var(--grid-gap, 1em)`. It no longer reads a local `--gap`.
