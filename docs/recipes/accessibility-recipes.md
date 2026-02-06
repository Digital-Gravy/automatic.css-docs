---
title: Accessibility Recipes
sidebar_position: 100
---

## `?clickable-parent`

This recipe expands the clickable area of a heading link to cover the entire card/parent container. Apply this recipe to the heading element that contains your link.

**Requirements:**
- The parent container must be set to `position: relative`
- The heading must contain a link (`<a>`) element

For more details on the clickable parent technique, see the [Clickable Parent documentation](../accessibility/clickable-parent.md).

## `?focus-parent`

This recipe removes focus styling from internal links and applies the focus indication to the parent element instead. Apply this recipe to the parent container (the same element set to `position: relative`).

This is commonly used in combination with `?clickable-parent` to provide a complete accessible clickable card experience.

For more details on the focus parent technique, see the [Focus Parent documentation](../accessibility/focus-parent.md).

## Changes From 3.x

In ACSS 4.0, these recipes replace the `.clickable-parent` and `.focus-parent` utility classes, which have been removed. The recipes provide the same functionality with greater flexibility and reduced stylesheet bloat.
