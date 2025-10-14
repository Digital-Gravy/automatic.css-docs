---
title: Transparencies
sidebar_position: 60
---

The use of transparent colors is common in web design.

Transparencies are easy to achieve in modern CSS using two recommended techniques that leverage existing ACSS color tokens.

## Method 1: Color Mix

You can mix any color with transparent using CSS' `color-mix()` function. 

```css
.foo {
    background: color-mix(in srgb, var(--primary) 27%, transparent);
}
```

**Here's a breakdown:**
- `in srgb` => the color space you want to mix in (for transparencies it's mostly irrelevant).
- `var(--primary)` => the color or shade you want to make transparent.
- `27%` => the amount of the color you want (the remainder will be transparent).
- `transparent` => the CSS color key for transparency.

Color Mix has greater browser support than Relative Color Syntax and is typically easier to write.

## Method 2: Relative Color Syntax

Relative Color Syntax allows you to access the color partials of any color natively with full support for transparency manipulation.

```css
.foo {
    background: oklch(from var(--primary) l c h / .27);
}
```

**Here's a breakdown:**
- `oklch()` => the color space you want to work in.
- `from var(--primary)` => the color or shade you want to make transparent.
- `l c h` => the color partials (can be referenced as shown, converted to a value, or manipulated with `calc()`).
- `.27` => the resulting opacity.

Relative Color Syntax gives you the added flexibility of manipulating the color partials if desired.

## Why No Transparency Tokens?

We had a big library of pre-made transparency tokens in previous versions of ACSS. There were pros and cons to this approach:

**Pros:**
- Handy and quick.

**Cons:**
- Lots of CSS declarations that were never used means a lot of bloat.
- Values were often close, but not perfect, since they were in fixed increments.
- Users often needed to create custom transparencies anyway to best match their design requirements, resulting in a [mostly unused] library of static values and a handful of custom transparencies.

As you can see, the cons greatly outweighed the pros. Transparencies tend to be customized to the context, so it's best to just stick with:

1. Generating transparencies on the fly with color-mix() or relative color syntax.
2. Creating custom transparency tokens based on project requirements.

Remember, you can still create easily referenceable transparency tokens yourself:

```css
:root {
    --primary-trans-77: color-mix(in srgb, var(--primary 77%, transparent);
}
```

The benefit of this approach is that you only create what you need and actually use with 100% accuracy. And they're still easily referenceable, but with no bloat!