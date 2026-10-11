---
title: Ribbon Recipes
sidebar_position: 100
---

Ribbon recipes add decorative corner ribbons to cards, images, and other containers. Ribbons are commonly used to mark specific items with extra information. For example, an "On sale" ribbon can mark e-commerce products that are currently discounted.

## `?corner-ribbon`

Expands the code for a corner ribbon that can be positioned at the top-left or top-right of its parent container.

### Adding a Ribbon

1. Add a text element (span, div, etc.) inside the container you want to add the ribbon to. This will be the text of your ribbon.
2. Give the text element a class and expand `?corner-ribbon` in its custom CSS.
3. Add the `data-ribbon-position` attribute to the text element with a value of `top-left` or `top-right`.

The recipe sets `position: relative` and `overflow: hidden` on the parent automatically using `:has()`, so you don't need to style the container yourself.

### Position Attributes

- `data-ribbon-position="top-right"`: Positions the ribbon at the top-right corner.
- `data-ribbon-position="top-left"`: Positions the ribbon at the top-left corner.

### Native Properties for Customization

The following variables / custom properties are available for immediate customization when using the recipe:

| Variable | Default | Description |
| --- | --- | --- |
| `--ribbon-width` | `300px` | Width of the ribbon |
| `--ribbon-offset` | `to-rem(20px)` | Offset from the corner |
| `--ribbon-background-color` | `var(--black, #000)` | Background color |
| `--ribbon-text-color` | `var(--white, #fff)` | Text color |
| `--ribbon-text-size` | `1em` | Font size |
| `--ribbon-shadow` | `0 5px 10px #ccc` | Box shadow |
| `--ribbon-padding` | `.5em 1em` | Padding |

Because the recipe expands into your class, you can edit these values directly in the expanded code.

## Ribbon Variations

To create different ribbon styles, add a modifier class alongside your ribbon class and override only the variables you want to change:

```CSS
.card__ribbon--sale {
    --ribbon-background-color: var(--primary);
    --ribbon-text-color: var(--primary-ultra-light);
    --ribbon-shadow: 0 0 30px -3px color-mix(in oklch, var(--primary-ultra-dark) 20%, transparent);
}
```

## Dynamic Ribbons

Sometimes a ribbon needs to be added, styled, and positioned based on dynamic data. Insert dynamic data from a custom field as the ribbon text, and pass the position dynamically through the `data-ribbon-position` attribute.

You can also use your own data attribute to style the ribbon based on custom field values:

```CSS
[data-ribbon-style="sale"] {
    --ribbon-background-color: var(--primary);
    --ribbon-text-color: var(--primary-ultra-light);
}
```

Create as many ribbon styles as you need, then choose which one is used by passing the style name to the data attribute value.

## Changes From 3.x

In ACSS 4.0:

- Ribbons moved from Elements to a recipe. The `.ribbon`, `.ribbon--top-right`, and `.ribbon--top-left` utility classes are no longer loaded by default. Use `?corner-ribbon` on your own class instead.
- Position ribbons with the `data-ribbon-position` attribute. The position modifier classes are not part of the recipe.
- The parent container no longer needs `position: relative` and `overflow: hidden` set manually. The recipe handles it with `:has()`.
- Default values changed: `--ribbon-offset` is now `to-rem(20px)` (applied as a negative offset), `--ribbon-width` is `300px`, `--ribbon-background-color` is `var(--black)`, and `--ribbon-text-size` is `1em`.
