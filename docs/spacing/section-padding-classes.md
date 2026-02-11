---
title: Section Padding Classes
sidebar_position: 100
---

Section padding tends to be a very misunderstood thing in web design. There are multiple ways to accomplish the same thing, and nobody has really set a standard for how things should be done.

At Automatic.css, we've been advocating for a [standard for section structure and spacing practices](https://geary.co/section-structure/) based on the methods that have the most pros and the least cons.

Here's a video that discusses proper section fundamentals:

[PB101: L04 - How Sections & Containers Work - YouTube](https://www.youtube.com/watch?v=s5zmRePNN0A&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

Best practices suggest the following:

- Sections should consist of at least two elements: the `section` itself and and inner `div`.
- A "gutter" for the website (inline spacing between content and device edge) should be established with inline padding on the `section` element.
- The inner `div` should be the website's [content width](../dimension/content-width.md) and auto-centered. This `div` should not have any extra inline padding and typically shouldn't have any padding at all unless it's going to have its own background styling.
- If a `section` needs more white space, you should almost always use extra block padding (top and bottom padding) for this. `Min-height` should be avoided here except in rare cases.
- The same rules apply for the site's `header` and `footer`, though it's also common for these elements to appear full-width rather than content-width.

Automatic.css is designed with these best practices in mind.

## Default Section Padding

Make sure you read about [Section Spacing Setup](../spacing/section-spacing.md).

Also note that "M" section spacing is added to top level section elements by default. This can easily be overridden on a per-section basis using Section Padding Classes.

## Section Padding Classes

It's common to need to adjust the block padding in sections to create more or less white space. Knowing this, we've created utility classes specifically for doing this.

The naming convention for these classes is `.section--{size}`.

All of the typical t-shirt sizes are available (XS to XXL)

Section padding classes are unique in that they don't apply padding equally to all sides. They're designed to maintain a consistent inline gutter while only adjusting the section's block padding.

It should be noted that ACSS is one of the only frameworks to offer a utility like this. Other frameworks require you to use separate padding-top and padding-bottom classes that are not specifically related to sections. Not only does this require you to use extra classes on each section, but it also creates a disconnect, making it impossible for you to tighten or loosen your section spacing globally.

## "Tweener" Sizes

It can be common to want an in-between size on occasion. You don't necessarily need to create a new custom utility for this. Instead, you can calc an existing utility.

## Can I create custom section spacing classes?

Yes, you can quickly and easily create custom section spacing classes using the [fluid() function](../functions/fluid-function.md). Or you can simply [use a `calc()`](../functions/calc.md).
