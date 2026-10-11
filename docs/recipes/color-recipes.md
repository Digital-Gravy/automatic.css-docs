---
title: Color Recipes
sidebar_position: 100
updated: 4.0.2
---

Color recipes are shortcuts for exposing the full string behind a given color. For example, `?primary-clr` expands to:

```CSS
oklch(from var(--primary) l c h / 1)
```

This is [relative color syntax](../colors/transparencies.md). `l`, `c` and `h` keep the lightness, chroma and hue of your primary color, so you can change any of them on the fly with custom values or `calc()`, for example `calc(l + .1)`. The expansion also includes the alpha channel, so you can set a custom transparency by changing the `1`.

:::note Before 4.0.2
Color recipes expanded to an HSL string built from `--primary-h`, `--primary-s` and `--primary-l`. ACSS 4 no longer outputs these variables, so that string did not work.
:::

All colors and shades are available using the syntax:

- Color: `?{color-name}-clr`
- Shade: `?{color-name}-{shade}-clr`
