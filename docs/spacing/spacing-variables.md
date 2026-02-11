---
title: Spacing Variables
sidebar_position: 45
---

Spacing variables allow you to hook into the ACSS spacing system for establishing consistent, responsive spacing for things like margins, padding, and gaps.

The most important thing to wrap your head around is that **spacing is spacing**. Unlike with classes, which have to declare what they're applying spacing to (e.g. margin-top), spacing variables are just pure spacing values. They can be used anywhere, so they don't require specific names.

## Standard Spacing Variables

Standard spacing variables follow the syntax `var(--space-{size})` where size is a t-shirt size (xs, s, m, l, xl, xxl).

For example, let's say you want to apply padding to a testimonial card you're creating. Since this is a re-usable element, you're creating a BEM class for it called `.testimonial-card` and assigning all styles to the custom class instead of using utility classes.

Here's what that would look like:

```CSS
.testimonial-card {
    padding: var(--space-m);
}
```

Notice there is no `var(--pad-m)` variable. Once again, **spacing is just spacing** and variables are just values. You could use the same value to gap the card's content out:

```CSS
.testimonial-card {
    display: flex;
    flex-direction: column;
    padding: var(--space-m);
    gap: var(--space-m);
}
```

The only exception here would be [contextual variables](contextual-spacing.md).

This makes life super easy when styling custom classes. There are very few variables to know and they're super easy to use without a lot of decision-making.

## Section Spacing Variables

Section Spacing Variables are variables you can use to change the block padding of section elements or to assign your website's gutter value to a top level container.

ACSS generates section spacing variables across all t-shirt sizes following the syntax `var(--section-space-{size})` along with a `var(--gutter)` variable.

Remember, "M" (medium) section spacing is added by default to top level section elements. And, generally, section padding classes are the best way to adjust the spacing values of a section, but if you want to create a custom section class and assign custom values to it, this is a good use case for Section Spacing Variables.

In the below example, we're going to create a .hero class that's going to set all our "Hero" sections to XL block padding.

```CSS
.hero {
    padding-block: var(--section-space-xl);
}
```

If you ever need "tweener" sizes or micro-adjustments, you can use a `calc()` function. In the example below, we're choosing "L" for our section spacing value, but making it 10% bigger.

```CSS
.hero {
    padding-block: calc(var(--section-space-l) * 1.1);
}
```

As a final example, the code below demonstrates how we can use a `<div>` as a section without having to semantically make it a section:

```HTML
<section>...</section>
<section>...</section>
<div class="ad-container">...</div>
<section>...</section>
```

```CSS
.ad-container {
    padding-block: var(--section-space-m);
    padding-inline: var(--gutter);
}
```

Since the Ad Container isn't a `<section>` element, it doesn't get section spacing by default. But, we can easily assign it to have default section spacing using the Section Spacing variables.

## Fine Tuning Spacing with `Calc()`

When using variables, you're not limited to the available t-shirt sizes by default. You can achieve any value in between each size by using a spacing variable within a `calc()` function.

Let's say that `--space-l` was *almost* perfect, but you want just a little less spacing. It's easy!

```CSS
.testimonial-card {
    padding: calc(var(--space-l) / 1.1);
}
```

This calculation reduces the padding value by 10%.

Dividing will reduce the value and multiplying will amplify it. Using decimals will give you fine-tuning control.

The only thing to potentially keep in mind here is your website's spacing scale. The value for your scale will help you decide whether you should multiply or divide.

If my scale is 1.5, then the halfway point between sizes is 1.25. This means that my logical adjustment range for each size is up to 1.25 down or up from the size I chose. Any adjustment beyond that means I should probably base my sizing off the next size up or down (from "m," that would mean switching to "s" or "l.").

While this isn't a requirement (nothing will break if you ignore this suggestion), it keeps things logically consistent. The below styling makes objectively zero sense:

```CSS
.testimonial-card {
    padding: calc(var(--space-m) * 1.5);
}
```

The value of this calc exactly matches the value of `var(--space-l)`, so `var(--space-l)` should be used instead. Even 1.4 wouldn't make much sense because you're getting too far away from the initial value. It would be more logical to do `calc(var(--space-l) / 1.1)` than to do `calc(var(--space-m) * 1.4)`.

The principle is to keep the adjustments as small as possible.

## Using Spacing Variables to Move Elements

Spacing variables also come in handy when you need to shift an element's position, either with absolute positioning, relative positioning, fixed positioning, or negative margin.

Let's say I want to make an image overlap with the section above it. For that to happen, it needs to travel a distance equal to the top padding of the section it's in, plus the amount of whatever overlap you want. Not only that, but we probably want to add some bottom padding to the section being overlapped to ensure the white space stays consistent.

Using variables for all of this makes this super easy, consistent, and maintainable.

### Creating the overlap

To make the image overlap the section above it, we need to use negative margin. The value is the sum of the section padding plus overlap:

```CSS
.overlapping-image {
    margin-block-start: calc((var(--section-space-m) + var(--space-l)) * -1);
}
```

`--section-space-m` is the known value for the section's block padding, so we take that and then add `--space-l` to it (that's the amount of overlap we want). Lastly, we multiply that by "-1" to make these values negative.

With the overlap achieved, we then want to adjust the bottom padding of the section being overlapped. How much do we adjust it by? The exact opposite of the overlap we just created:

```CSS
.overlapped-section {
    padding-block-end: calc(var(--section-space-m) + var(--space-l));
}
```

See, there are no random "magic numbers" to manage. It's all done with variables, removing a lot of thinking and keeping things super clean.

## Variables Are King

Variables are much more powerful than utility classes because they can be fine-tuned and they can be attached to custom classes for maximum scalability and maintainability. We recommend an approach to development where utility classes are used sparingly and most of the work is done with custom classes and variables.
