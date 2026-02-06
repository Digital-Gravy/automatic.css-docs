---
title: Focus Parent
sidebar_position: 5
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Where [clickable parent](./clickable-parent.md) extends the clickable area of a link to cover an entire content group, focus parent alters the focus behavior of that content group. In other words, the focus-parent technique also allows your entire clickable element to be focusable.

ACSS provides utilities for easily doing this:

1.  `?focus-parent` recipe (recommended for most users)
2.  `@include focus-parent` mixin (for SCSS users)

## The Focus Parent Mixin

The Focus Parent mixin allows you to manipulate the focus styling of a BEM class so you don't have to litter utility classes everywhere.

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

Your options are `shadow` or `outline`:
- `shadow` applies focus to the parent using a box-shadow style
- `outline` applies focus to the parent using an offset outline style

## Changes From 3.x

In ACSS 4.0, the `.focus-parent`, `.focus-parent--shadow`, and `.focus-parent--outline` utility classes have been removed in favor of the `?focus-parent` recipe. This change was made to reduce stylesheet bloat and encourage the use of recipes, which are more flexible and maintainable.

**What changed:**
- The `.focus-parent`, `.focus-parent--shadow`, and `.focus-parent--outline` utility classes are no longer available
- Use the `?focus-parent` recipe instead (recommended)
- The `@include focus-parent(shadow)` and `@include focus-parent(outline)` mixins remain available for SCSS users
