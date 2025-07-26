---
title: Content Grid Mixin
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

You can deploy a [content grid layout](https://automaticcss.com/docs/content-grid/) to any box with the `content-grid()` mixin.

```PHP
.my-awesome-grid {   @include content-grid; }
```

This is an argument-less mixin that’s essentially plug and play. Once you’ve applied it to a box, you can assign children to content grid zones using the `grid-column` property.

```CSS
.my-awesome-grid > :is(figure, picture, img) {
    grid-column: feature;
}
```

The above example assigns all figure elements, picture elements, and images to the “feature” zone.

You can also still use all the content grid `.feature--` utility classes, assuming you have them turned on.
