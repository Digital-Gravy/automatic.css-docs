---
title: Width Utilities
sidebar_position: 80
---

Width utilities control the width (inline-size) of elements.

Unlike most frameworks, width utilities are not mapped to percentages in ACSS. Rather, they’re a calculation based on your website’s [Content Width](https://automaticcss.com/docs/content-width/). This is much more useful, since percentages cause complications with the responsive size of elements.

## 10-90 Width Classes (New)

The syntax for width classes is `.width--[value]` with the value being 10-90 in increments of 10.

The output for these width classes is:

```CSS
calc(var(--content-width) * .2)
```

As mentioned previously, this results in a fixed width calculation rather than a percent value. Since the `.width--` classes also set a max-inline size of 100%, they’re automatically responsive and won’t create overflow issues.

## XS-XXL Width Classes (Old)

Prior to v3.0, .width– classes followed our traditional t-shirt size syntax of XS-XXL.

For example, `.width--l` or `.width--s`.

These classes still exist in the framework and are still valid. We haven’t put them behind a deprecation flag because they contribute hardly anything to the overall stylesheet.

## Special Width Classes

ACSS contains the following special width classes that exist outside of the above syntaxes.

- `.content-width` and `var(--content-width)`. These match the [content width](https://automaticcss.com/docs/content-width/) of your website.
- `.content-width--safe` and `var(--content-width-safe)`. These “[safe content width](https://automaticcss.com/docs/content-width-safe/)” utilities establish content width along with a virtual gutter.
- `.width--full` is for setting an element to 100% width.

## Width Variables

All of the above utilities are available as variables using the syntax `var(--width-[value])`.
