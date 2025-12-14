---
title: Width Utilities
sidebar_position: 80
---

Width utilities control the max width (inline-size) of elements.

Unlike most frameworks, width utilities are not mapped to percentages in ACSS. Rather, they’re a calculation based on your website’s [Content Width](content-width.md). This is much more useful, since percentages cause complications with the responsive size of elements.

## Standard Width Classes (10 to 90)

The syntax for width classes is `.width--[value]` with the value being 10-90 in increments of 10.

Example output for these width classes:

```CSS
calc(var(--content-width) * .2)
```

As mentioned previously, this results in a fixed width calculation rather than a percent value. And since they use `max-inline-size`, they’re automatically responsive and won’t create overflow issues.

## Special Width Classes

ACSS contains the following special width classes that exist outside of the above syntaxes.

- `.content-width` and `var(--content-width)`: Matches the [content width](content-width.md) of your website.
- `.content-width--safe` and `var(--content-width-safe)`: “[Safe content width](content-width-safe.md)” utilities with a virtual gutter.
- `.width--full`: Sets an element to 100% width.
- `.width--max-content`: Sets the inline size to `max-content` and the `max-inline-size` to 100%.
- `.width--min-content`: Sets the inline size to `min-content` and the `max-inline-size` to 100%.
- `.width--fit-content` Sets width to fit the content (uses `fit-content`).

## Width Variables

The standard width values all have tokens/variables available for use, e.g. `var(--width-30)`.
