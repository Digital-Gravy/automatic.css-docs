---
title: “Flex Grids” (Flexbox Grids)
sidebar_position: 100
---

CSS Grid is a powerful layout system, but it has one weakness for some users. Grids with an unbalanced number of items must remain left-aligned at all times.

![](img/grid3.webp)

Some users prefer unbalanced grid items to be centered at the bottom of the grid, like this:

The only programmatic solution is to use Flexbox. But, Flexbox isn’t designed to create grid layouts, so a lot of math is involved to get it right, especially when you want to use gap to space items out.

This is where Automatic.css “Flex Grid” comes in.

Flex Grid is a feature unique to Automatic.css that allows users to create grid layouts where unbalanced items can be centered or stretched.

All the complicated math and setup is done for you. You can even adjust the gap size without issue.

## How to use Flex Grid classes

Flex grid classes work exactly like our regular [grid classes](https://automaticcss.com/docs/grid-classes-standard/).

1.  Make sure Flex Grid is turned on in ACSS options.
2.  Add the desired desktop Flex Grid count class to the parent container (e.g. `flex-grid--3`)
3.  Change the column count at the desired breakpoints using breakpoint classes (e.g. `flex-grid--l-2`)
4.  Adjust the gap using `gap--[size]` classes or `gap--[breakpoint]-[size]` classes.

Just add to the parent container and you’re all set. Your unbalanced items will be centered at the bottom of the grid by default.

The only difference is that Flex Grid only supports up to six columns, whereas our regular Grid system supports up to 12 columns.

## Stretching unbalanced items

If you want the unbalanced items to stretch along the inline axis to fill up all the space in the grid, the children of the grid need to be instructed to grow to fill the available space. You can do this with the class `.flex--grow` (applied to the grid container, not the child).

## Are there variables for Flex Grid?

Creating variables for Flex Grid isn’t possible. This is because Flex Grid isn’t established with a single value like Grid. Instead, it’s a collection of instructions, and collections of instructions can’t be assigned to a single variable.

Your only option for using Flex Grid is the utility classes.
