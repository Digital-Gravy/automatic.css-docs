---
title: Button Recipes
sidebar_position: 80
---

Button recipes allow you to add styling rules for buttons quickly. This is especially useful when creating [custom buttons](https://automaticcss.com/docs/buttons/).

## `@btn`;

The main button recipe is `@btn`. This recipe is designed for use in custom CSS and outputs the main variables needed for unique button styling (not global button styling).

To use the recipe, type `@btn;` in the CSS input of an element in the builder or in ACSS’ Custom SCSS area. As soon as you add the “;” on the end, the recipe will appear.

It’s best to attach this recipe to a button class (e.g. `.btn--custom`).

As noted in our button documentation, any button that uses the syntax `.btn--` will automatically have global button defaults applied automatically. When you add the recipe to what’s already happening automatically, you can easily finish styling your custom button.
