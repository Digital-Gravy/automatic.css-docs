---
title: Calc()
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The `calc()` function is a standard CSS function that’s not proprietary to Automatic.css. However, this documentation outlines our recommendation for using `calc()` in conjunction with ACSS variables in your workflow.

## Text & Spacing “Tweener” Sizes

It’s common to need a size in-between what’s available by default in ACSS for text and spacing utilities. You have two options in these cases. You can [create a brand new custom property with `fluid()`](../functions/fluid-function.md) or you can quickly use `calc()` and move on. In the majority of cases, `calc()` is probably just fine.

For example, let’s say I’m building a card and I want half of my normal [content gap](../spacing/contextual-spacing.md). Rather than making a custom variable, I can simply do this:

```CSS
gap: calc(var(--content-gap) / 2);
```

Of course, you could create a brand new custom property using the calc function also:

```CSS
:root {
    --card-gap: calc(var(--content-gap) / 2);
}
```

There’s really no right or wrong here, but using a raw `calc()` function is definitely the quickest and easiest approach. The other approaches would be good if you find yourself repeating the same `calc()` over and over again.

## Colors

You can calc() colors to manipulate existing colors or create news. For example, let’s say I wanted to reduce the saturation of my primary color by 20% and assign that to a new custom property. I can do this:

```CSS
:root {
    --primary-trans-5: hsl(var(--primary-h) calc(var(--primary-s) / .2) var(--primary-l))
}
```

Here’s a breakdown:

- `hsl()` – Declare a new HSL value.
- `var(--primary-h)` – Reference the primary color’s hue value.
- `calc(var(--primary-s) / .2)` – Reference the primary color’s saturation value and reduce it by 20% using `calc()`.
- `var(--primary-l)` – Reference the primary color’s lightness value.

This is covered in more detail in [Main Colors](../colors/main-colors.md).

## Changes From 3.x

No changes in ACSS 4.0.
