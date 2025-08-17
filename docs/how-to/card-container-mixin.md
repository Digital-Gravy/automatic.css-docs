---
title: Card Container Mixin
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The Card Container Mixin is used for applying container query styles to any card in the [Card Framework](https://automaticcss.com/docs/card-framework/).

## Example

```CSS
.your-card {
    @include card-container("inline-size > 767px") {
        // Your styles here
    }
}
```

Make sure the following are true in order for this mixin to work:

1.  The Card Framework is turned on.
2.  Auto Container Query support for Cards is turned on.
3.  The range syntax is expressed in quotes.
4.  The selector you’re targeting (`.your-card`) has enough specificity to override the non-container query styles.

If you run into specificity issues that are causing your container query styles to not work, you can use the double selector trick to increase the specificity:

```CSS
.your-card.your-card {
    @include card-container("inline-size > 767px") {
        // Your styles here
    }
}
```

In many page builder scenarios, it might be better to use the [Card Container Recipe](https://automaticcss.com/docs/card-container-recipe/) instead of this mixin, since you’ll be able to keep all your CSS attached to the actual card element.
