---
title: Column Recipes
sidebar_position: 100
updated: 4.0.2
---

## `?columns`

Expands the code for creating responsive, text-flow columns. This is best used on a rich text element.

- `--col-count:` The number of desired columns
- `--col-min-width:` The minimum width a column can be before it stacks. Defaults to `350px`.
- `--col-rule-style`: The style of the ruler between columns (solid, dotted, dashed, etc.). Defaults to `none`, so set it to show a ruler.
- `--col-rule-width`: The thickness of the ruler between columns
- `--col-rule-color`: The color of the ruler between columns
- `--col-gap`: The gap between columns
- `--row-gap`: The gap between "rows" (added as margin to the child elements).

## Changes in 4.0.2 <Since version="4.0.2" /> {#changes-in-402}

- New defaults: `--col-min-width` is `350px` (was `250px`) and there's no ruler by default (`--col-rule-style: none`).

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@columns` to `?columns`.
