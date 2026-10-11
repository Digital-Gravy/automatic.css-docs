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

You can use calc() inside relative color syntax to derive new colors from existing ones. For example, to reduce the chroma (saturation) of your primary color by 20% and assign that to a new custom property:

```CSS
:root {
    --primary-muted: oklch(from var(--primary) l calc(c * .8) h);
}
```

Here’s a breakdown:

- `oklch(from var(--primary) …)` – Start from your primary color.
- `l` and `h` – Keep its lightness and hue.
- `calc(c * .8)` – Reduce its chroma by 20%.

[Transparencies](../colors/transparencies.md) explains relative color syntax in more detail.

## Changes From 3.x

No changes in ACSS 4.0.
