---
title: Selection Styling
sidebar_position: 50
---

ACSS users can control the background and foreground color of selected text (highlighted when the user clicks and drags to select text on the site) via the Selection Styling panel under Additional Styling.

![Selection Styling Options](img/selection-styling-options.webp)

The first two fields define the default selection styling for the website. The second two fields define an alternate selection style, for when the main selection style might not be appropriate (primary colored selection text on a primary colored background, for example).

As always, color tokens are recommended here. Users should avoid using raw color values or keywords, especially if you want to retain compatibility with [color scheme](../color-scheme/color-scheme-dark-mode.md).

To use the alternate selection style, place the `.selection--alt` class on any box. This will affect all children of the box as well.
