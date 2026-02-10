---
title: Content Width (Safe)
sidebar_position: 30
---

You probably already know about the [Content Width](content-width.md) utilities in ACSS, but do you know about Content Width Safe? This utility references your website’s content width while simultaneously creating a gutter on smaller screens. It’s extremely handy!

## What’s a gutter?

A gutter is the inline padding that protects your content from touching the edge of the screen on smaller devices.

![Visualization of website gutter](img/visualization-website-gutter.webp)

On advanced websites (and ACSS websites), the gutter is responsive. The larger the screen, the larger the gutter is (up to desktop, where the gutter no longer matters because the screen is much wider than the website’s content width).

Even though it’s responsive, it should be a referenceable value. Every section of your site should reference the gutter value to ensure that your gutter is equal throughout the site. A gutter that changes from section to section or element to element is a clear sign of amateur web design.

ACSS exposes the website’s inline gutter as `var(--gutter)`. Sections use this for `padding-inline`, so the gutter is consistent across the site.

## What if there’s no gutter and I need a gutter?

There are two primary situations that you might find yourself in when it comes to needing a gutter and not having one:

1.  You’re working in a `section` where the inline padding is set to “0.”
2.  You’re not working in a `section` at all, thus there’s no gutter.

In the first case, since you’re working in a section, a container will define your website’s content width for you. The problem is, the content will touch the edges of the screen on smaller devices. This is probably not desirable.

In the second case, you’re without a section, so you’re without a content-width container by default, and without a gutter as well. The standard Content Width utilities won’t help you here. While you can set something to content width, it’s still not going to have a gutter.

What you need is a utility that references your website’s content width while simultaneously, somehow, creating a gutter.

That’s exactly what `.content-width--safe` and `var(--content-width-safe)` do.

1. Sets the element’s max inline size to content width.
2. Uses `min(var(--content-width), calc(100% - var(--gutter) * 2))` so that on small screens the effective width leaves room equal to your gutter on each side.
3. Automatically centers your content (when using the class, via `margin-inline: auto`).

The **class** `.content-width--safe` does all three: it sets `inline-size: 100%`, `max-inline-size: var(--content-width-safe)`, and `margin-inline: auto`. If you use the **variable** `var(--content-width-safe)` on your own element, you still need to center it:

```css
.my-element {
  width: 100%;
  max-width: var(--content-width-safe);
  margin-inline: auto;
}
```

Use the variable with `max-width` (or `max-inline-size`) and avoid setting explicit widths for maximum responsiveness.

## When should I use content-width vs content-width-safe?

Good question!

It’s certainly not either-or. It’s not preference. These are tools designed for specific situations, so it’s important to know the situation you’re in.

If you need to make an element equal to your website’s content width, and you’re working within a parent element that has a physical gutter, just use the Content Width utilities.

If you need to make an element equal to your website’s content width, and you’re working within a parent element without a physical gutter, use the Content Width Safe utilities.

## Caution: Double Gutter

Make sure you don’t use the Content Width Safe utilities in a parent element that already establishes a gutter. This will result in a double gutter.

## Changes From 3.x

In ACSS 4.0:

- The `.content-width--safe` class uses `max-inline-size` and `margin-inline: auto` (logical properties); behavior is unchanged.
- The gutter value used by `--content-width-safe` is `var(--gutter)` (sections use this for inline padding). Documentation previously referred to `--section-space-x`; the canonical gutter variable is now `--gutter`.
