---
title: CSS Columns
sidebar_position: 100
---

Columns in CSS break content into visual columns with distinct advantages over layout options like Flexbox and Grid. Below is an example of a simple bulleted list broken into columns:

- This is a list item.
- This is a list item.
- This is a list item.
- This is a list item.
- This is a list item.
- This is a list item.

There are two advantages to columns over Flexbox and Grid:

1.  Content will flow automatically from column to column.
2.  You can easily separate columns with ruled dividers.

The downsides of columns:

- There’s no support for `row-gap`, so you need to do some trickery to add a bottom margin to all direct children.
- They don’t work on Flex containers, so you lose the ability to order items with CSS.
- You can’t place items like you can with CSS Grid.

Columns are used in specific situations. Most commonly:

- Breaking long text into columns.
- Breaking lists in columns.
- Creating masonry layouts.

Automatic.css offers utility classes to help you quickly achieve various column layouts and styles.

## Column Functionality in ACSS

You can turn Columns support on or off in the ACSS dashboard under “Options.” This will enable or disable all Columns utilities.

## Column Count & Column Width

There are three ways you can approach creating columns:

1.  Define a specific column count at each breakpoint.
2.  Define a minimum column width.
3.  Define a specific column count and a minimum column width.

Let’s take a look at each option:

Note: Column utilities in ACSS will automatically set an element to `display: block;`. This is because columns don’t work with display flex or display grid.

### Defining a specific column count at each breakpoint

As is true with [grid classes](https://automaticcss.com/docs/grid-classes-standard/), you can define a specific column count at each breakpoint using `.col-count--[number]` classes and you can change the column count at a specific breakpoint with `.col-count--[breakpoint]-[number]`.

You can declare column counts from 1 to 5 at any breakpoint level.

### Defining a minimum column width (automatically responsive)

Defining a column number isn’t required with CSS columns. If you define a column width instead of a count, you’re effectively telling the browser to render as many or as few columns as possible based on the column width.

This column width acts as a minimum width. Columns can be wider, but they can’t be smaller than the declared width. If a column can’t be its minimum width, it’ll stack automatically.

Use the `.col-width--[size]` classes to set a minimum column width. Your options are:

- `.col-width--s`
- `.col-width--m`
- `.col-width--l`

**You can configure the exact sizes of these three utilities in the ACSS dashboard.**

If you’re creating a custom element with BEM classes and want to use columns, you can reference your column widths using variables as well:

- `var(--col-width-s)`
- `var(--col-width-m)`
- `var(--col-width-l)`

### Defining a specific column count & minimum column width (automatically responsive)

If you want to declare a specific number of columns on desktop, but still want the columns to stack automatically, you can declare the desired number of columns and a minimum column width.

Example:

- `.col-count--3`
- `.col-width--m`

Remember, since you defined a specific number of columns, the space between columns will be determined by the width of the parent container. If there’s too much space between columns, change the width of the parent container.

## Gap

Columns support column gap natively, but not row gap. Since this is Automatic.css and we know you want row gap supported, we’ve built in the required functionality (as of v2.8). Here’s how it works:

### If you want column-gap only or different gap values for columns and rows

Column gap can be set with `.row-gap--[size]` or `` .col-gap--`[breakpoint]-[size]` `` utilities.

### If you want row-gap only or different gap values for columns and rows (v2.8+)

Row gap can be set with `.row-gap--[size]` or `.row-gap--[breakpoint]-[size]`utilities.

Using the shorthand `.gap--` utilities will still set both row and column to the same value.

### If you want column-gap and row-gap to be the same (v2.8+)

Symmetrical gaps can be set with standard `` .gap--`[breakpoint]-[size]` `` utilities. This will only work in combination with `.col-count--` or `.col-width--` utilities.

## Column Rule Width, Style, and Color

A unique feature of Columns is the ability to define ruled columns. This is a visual divider between columns that can have a style, width, and color.

### Set a style first

Think of a column rule like a border. If a style isn’t set, the border won’t show up. So, the first thing you need to do is set a style with `.col-rule--[style]` classes. The following styles are available:

- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset

### Column rule width

You can change the width of the rule style with .col-rule-\[size\] utilities:

- `.col-rule--s`
- `.col-rule--m`
- `.col-rule--l`

Additionally, you can reference these values with variables:

- `var(--col-rule-width-s)`
- `var(--col-rule-width-m)`
- `var(--col-rule-width-l)`

The exact values for these utilities can be configured in the ACSS dashboard.

### Column rule color

Finally, you can set the color of the ruler using `.col-rule--[color]` utilities. All active colors and shades are available.

## Column Span

Columns have one last trick up their sleeve. While they don’t support spans and starts the way Grid does, they do have the ability to “span all.” This can be set on any direct child element of the Columns container (e.g. a `<p>`, `<li>`, `<img>`, etc.)

To make an element span all columns, you can use the same utility class from Flex and Grid: `.col-span--all`.
