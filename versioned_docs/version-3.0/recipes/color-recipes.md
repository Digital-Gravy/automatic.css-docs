---
title: Color Recipes
sidebar_position: 100
---

Color recipes are shortcuts for exposing the full string behind a given color. For example, @primary-clr will expand to:

```CSS
hsl(var(--primary-h) var(--primary-s) var(--primary-l) / 1)
```

This allows you to manipulate any part of the HSL string on the fly with custom values or calcs. Also notice that the expansion includes the alpha channel, making it super easy to create custom transparencies.

All colors and shades are available using the syntax:

- Color: `@{color-name}-clr`
- Shade: `@{color-name}-{shade}-clr`
