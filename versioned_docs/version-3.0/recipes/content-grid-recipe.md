---
title: Content Grid Recipe
sidebar_position: 100
---

You can deploy a [content grid layout](../grids/content-grid.md) to any box with the `@content-grid;` recipe.

```CSS
@content-grid;
```

This recipe automatically outputs the `%root%` selector so you can deploy it directly in the CSS box without any preparation.

Once deployed, you can assign things to different zones using the `grid-column` property:

```SCSS
.my-awesome-grid > :is(figure, picture, img) {
    grid-column: feature;
}
```

The above example assigns all figure elements, picture elements, and images to the “feature” zone.

You can also still use all the content grid `.feature--` utility classes, assuming you have them turned on.
