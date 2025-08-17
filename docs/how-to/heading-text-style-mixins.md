---
title: Heading & Text Style Mixins
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Note: Mixins only work within the custom SCSS area of the ACSS dashboard.

## Heading Styles

You can apply any heading level’s global styles to a custom selector using `@heading-style();`

```CSS
.custom-heading {
    @include heading-style(h2);
}
```

This will attach all global heading styles as well as any styles specific to the heading level you reference, but will not output any properties that have a null value.

### Text Styles

You can apply any text level’s global styles to a custom selector using `@text-style();`

```CSS
.custom-text {
    @include text-style(l);
}
```

This will attach all global text styles as well as any styles specific to the text level you reference, but will not output any properties that have a null value.
