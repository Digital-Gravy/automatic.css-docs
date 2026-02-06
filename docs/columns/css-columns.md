---
title: CSS Columns
sidebar_position: 10
---

Columns in CSS break content into visual columns while allowing content to flow dynamically from one column to another. This gives them distinct advantages over layout options like Flexbox and Grid in certain situations. 

The downsides of columns:

- There's no support for `row-gap`, so you need to do some trickery to add a bottom margin to all direct children (but ACSS handles this for you).
- They don't work on Flex containers, so you lose the ability to order items with CSS.
- You can't place items like you can with CSS Grid.

Columns are used in specific situations. Most commonly:

- Breaking long text into columns.
- Breaking lists in columns.
- Creating masonry layouts.

## Using Columns in ACSS

Use the [`?columns` recipe](../recipes/column-recipes.md) to apply column styling to any element. This recipe expands to provide all the necessary column properties with customizable local variables.

### Available Variables

When using the `?columns` recipe, you can customize behavior with these variables:

- `--col-count:` The number of desired columns
- `--col-min-width:` The minimum width a column can be before it stacks
- `--col-rule-style`: The style of the ruler between columns (solid, dotted, dashed, etc.)
- `--col-rule-width`: The thickness of the ruler between columns
- `--col-rule-color`: The color of the ruler between columns
- `--col-gap`: The gap between columns
- `--row-gap`: The gap between "rows" (added as margin to the child elements)

### Column Width Variables

ACSS provides pre-defined column width variables you can use:

- `var(--col-width-s)`
- `var(--col-width-m)`
- `var(--col-width-l)`

**You can configure the exact sizes of these variables in the ACSS dashboard.**

## Column Rules

A unique feature of Columns is the ability to define ruled columns. This is a visual divider between columns that can have a style, width, and color.

Set the rule style, width, and color using the recipe's local variables:

```css
.my-columns {
  --col-rule-style: solid;
  --col-rule-width: var(--col-rule-width-m);
  --col-rule-color: var(--border-color);
}
```

Available rule width variables:

- `var(--col-rule-width-s)`
- `var(--col-rule-width-m)`
- `var(--col-rule-width-l)`

The exact values for these can be configured in the ACSS dashboard.

## Changes From 3.x

In ACSS 4.0:

- Column utility classes (`.col-count--`, `.col-width--`, `.col-rule--`, `.col-span--`) have been **removed**. Use the [`?columns` recipe](../recipes/column-recipes.md) instead.
