---
title: Focus Parent
sidebar_position: 5
---

Where [clickable parent](clickable-parent.md) extends the clickable area of a link to cover an entire content group, focus parent alters the focus behavior of that content group. In other words, the focus-parent technique also allows your entire clickable element to be focusable.

If you want the entire element to be focusable, you need to alter the focus behavior of the parent and child elements. You must remove focus from the clickable item and then apply focus to the parent element. This is done using `:focus` and `:focus-within` styling.

You don't need to know the technical details. ACSS provides utilities for easily doing this:

1.  `?focus-parent` recipe (recommended)
2.  `@include focus-parent` mixin (for SCSS users)

## The Focus Parent Recipe (Recommended)

The easiest way to implement focus parent is with the `?focus-parent` recipe. Simply apply the recipe to the parent element (the same element you set to position relative for clickable parent).

The recipe will remove focus styling from focusable children and apply the focus indication to the parent element instead.

## The Focus Parent Mixin

If you're using SCSS and want to apply focus parent to custom BEM classes, you can use the `@include focus-parent` mixin.

**Note:** This mixin must be added to a SCSS stylesheet (such as the Custom SCSS area in the ACSS dashboard). It will not work in vanilla CSS or builder CSS inputs.

Here's an example combining both clickable parent and focus parent mixins:

```CSS
.clickable-card {
    position: relative;
    @include focus-parent(shadow);
}

.clickable-card__heading a {
    @include clickable-parent;
}
```

Your options for the focus-parent mixin are `shadow` or `outline`:
- `shadow` applies focus using a box-shadow style
- `outline` applies focus using an offset outline style

## Changes From 3.x

In ACSS 4.0, the `.focus-parent`, `.focus-parent--shadow`, and `.focus-parent--outline` utility classes have been removed in favor of the `?focus-parent` recipe. This change was made to reduce stylesheet bloat and encourage the use of recipes, which are more flexible and maintainable.

**What changed:**
- The `.focus-parent`, `.focus-parent--shadow`, and `.focus-parent--outline` utility classes are no longer available
- Use the `?focus-parent` recipe instead (recommended)
- The `@include focus-parent(shadow)` and `@include focus-parent(outline)` mixins remain available for SCSS users
