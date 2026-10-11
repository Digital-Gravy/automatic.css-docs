---
title: Color Recipes
sidebar_position: 100
---
import RecipeSetupTip from './_recipe-setup-tip.md';

<RecipeSetupTip />

Color recipes expand to a color value that you can adjust on the spot. Use them after a property or in a color input.

## `?color-mix`

Mixes a color with another one, or with transparency:

```CSS
color-mix(in oklch, black 50%, transparent)
```

Replace `black` with any color, for example `var(--primary)`, and change the percentage.

## `?transparency`

A transparent version of a color:

```CSS
color-mix(in oklch, black 10%, transparent)
```

Replace `black` with the color and set how much of it remains, here 10%.

## Changes From 3.x

In ACSS 4:

- The `?{color-name}-clr` and `?{color-name}-{shade}-clr` recipes are removed. They expanded to an HSL string built from `--primary-h`, `--primary-s` and `--primary-l`, which ACSS 4 no longer has. Use `?color-mix` or `?transparency` with the color variable instead, for example `color-mix(in oklch, var(--primary) 60%, transparent)`.
