---
title: List Recipes
sidebar_position: 100
---

## `@list-none`

When you make something a list in CSS, it defaults to having a bullet-style layout with user-agent styling like margins and padding. This isn’t always desirable. A quick way to “reset” or remove all default styling from a list is to use the `.list--none` class. But a utility class isn’t always the best approach. If you need your “list–none” effect to be applied to a custom class, you can use the `@list-none` recipe instead.

```CSS
@list-none;
```

Apply the recipe on the list itself.
