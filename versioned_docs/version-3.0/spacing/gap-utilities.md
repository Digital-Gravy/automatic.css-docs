---
title: Gap Utilities
sidebar_position: 100
---

Gap can be used with [Grid](../grids/grid-classes-standard.md), [Flex-Grid](../flexbox/flex-grids-flexbox-grids.md), [Content Grid](../grids/content-grid.md), [Variable Grid](../grids/variable-grid.md), Flexbox, [Columns](../columns/css-columns.md), and [Masonry](../columns/masonry-layouts.md) utilities.

Remember the fundamentals of the box model:

- **Margin**: Space outside an element.
- **Padding**: Space inside an element.
- **Gap**: Space between elements in flexbox or grid.

## Row Gap Classes

Row Gap classes add spacing to rows in a Flexbox or Grid layout.

Use the syntax: `.row-gap--[size]`.

You can change the row gap at breakpoints by using the following syntax: `.row-gap--[breakpoint]-[size]`.

## Column Gap Classes

Column Gap classes add spacing to columns in a Flexbox or Grid layout.

Use the syntax: `.col-gap--[size]`.

You can change the row gap at breakpoints by using the following syntax: `.col-gap--[breakpoint]-[size]`.

## Gap Classes (Column + Row)

If you want to set both column and row gap simultaneously with a single utility, you use the syntax: `.gap--[size]`. These also have breakpoint variations using the syntax `.gap--[breakpoint]-[size]`.

## Adding Gap With Variables

Remember that when using variables, there’s no such thing as margin or padding or gap. This is because the code you’re writing or the input field you’re using is already assigning the property. All variables do is act as placeholders for values.

For this reason, there are only [spacing variables](../spacing/spacing-variables.md). You can use these in any gap input or in CSS using the gap property:

```CSS
.card {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}
```

Remember, the gap property only works with Flexbox and Grid. Also remember that you have [contextual spacing utilities](../spacing/contextual-spacing.md) that should be used in most common scenarios.

## Can I create custom spacing utilities for gap?

Yes, you can quickly and easily create custom gap uitilities using the [fluid() function](../functions/fluid-function.md). Or you can simply [use a `calc()`](../functions/calc.md).
