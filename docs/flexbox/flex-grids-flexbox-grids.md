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

## Flex Grid Recipes

Flex grids are created using Recipes with `?flex-grid` as the base.

Just add to the parent container and you’re all set. Your unbalanced items will be centered at the bottom of the grid by default.

## Stretching unbalanced items

If you want the unbalanced items to stretch along the inline axis to fill up all the space in the grid, the children of the grid need to be instructed to grow to fill the available space.