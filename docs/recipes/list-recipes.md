---
title: List Recipes
sidebar_position: 100
---

## `?list-none`

When you make something a list in CSS, it defaults to having a bullet-style layout with user-agent styling like margins and padding. This isn’t always desirable. To “reset” a list and remove all default styling, type `?list-none;` on its own line in the list element's CSS. It expands to a `%root% { … }` block. (The `.list--none` class from ACSS 3.x doesn’t exist in 4.x.)

```CSS
?list-none;
```

Apply the recipe on the list itself.
