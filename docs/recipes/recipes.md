---
title: Introduction to Recipes
sidebar_position: 100
---

Recipes are a new feature in ACSS v3.0. They’re a very powerful new part of our variable expansion and validation system in the dashboard (Options > Workflow Enhancements).

## Where recipes work

Type `?`, the recipe's name and `;`. The recipe expands right away.

| Where | What you need |
| --- | --- |
| **Etch** | Nothing. Recipes are built into Etch's CSS editor. |
| **Bricks** and **Gutenberg** (CSS fields) | Turn on **Options → Workflow Enhancements → Variable Expansion & Validation** in the ACSS dashboard. It is off by default. |
| **ACSS dashboard** (Global SCSS) | Nothing. The editor suggests recipes as you type `?`. |

In Bricks and Gutenberg, the recipe arrives wrapped in `%root% { … }`, so it styles the element you type it on.

:::tip Prefer `@`?
Bricks and Gutenberg used `@` before. To keep using it, turn on the `USE_CLASSIC_EXPANSION_CHARACTER` flag with WP-CLI: `wp acss flags set USE_CLASSIC_EXPANSION_CHARACTER on`. See [`wp acss flags`](../cli/flags.md). Etch always uses `?`.
:::

:::note A few recipes exist in only one place
Etch and Bricks/Gutenberg share almost all recipes. Bricks and Gutenberg also offer `btn`, `overlap`, `overlap-alt`, `list-none`, `property`, `container`, `card-container`, `ipsum-short`, `query-children` and `script`. Etch also offers its editor helpers for braces and pseudo-selectors.
:::

## What’s a Recipe?

A Recipe is a block of CSS that you can use wherever needed. It works similar to how a [SCSS mixin](../mixins/what-are-mixins.md) works, but instead of just referencing the block of CSS, the Recipe functionality fully exposes the underlying code.

For example, let’s say you want to turn a big block of paragraphs into a multi-column layout. In ACSS, you could do this with our [Columns utilities](../columns/css-columns.md). The downside is that you need to use utility classes, which aren’t always appropriate.

Columns functionality is not something that can be mapped to a CSS variable, so there was no other option for creating columns without writing the CSS yourself, prior to Recipes.

With Recipes, you simply open the rich text element that houses your paragraphs, create a class if you want to assign the Recipe to a class, and then type “?” plus the name of the recipe:

![ACSS recipe](img/acss-recipe.webp)

Calling a Recipe in ACSS

Close the line with “;” just as you normally would and the Recipe will appear instantly:

Expanded version of a Recipe in ACSS

Some recipes are very simple and some are complex. It just depends on the utility that you happen to be expanding.

## Using Recipes in Input Fields

Some recipes expand to a single value, so you can use them in an input field or after a property. For example, `background: ?color-mix;` expands to `background: color-mix(in oklch, black 50%, transparent);`. See [Color Recipes](color-recipes.md) and the gradient recipes.

## Recipes & Stylesheet Efficiency

For users who want to turn off sets of utility classes, Recipes can be a great way to continue accessing the functionality of those utilities on a case-by-case basis.

Using our example above, you could turn off “Columns” classes in ACSS, which removes all the columns utilities from the stylesheet (making your stylesheet lighter). If you need columns on your project, you cans simply use `?columns` to get the functionality wherever its needed without having to load all the columns utilities.

## The future of Recipes

ACSS 3.0 ships with some initial Recipes for popular non-variable-driven utilities ([columns](../columns/css-columns.md), [masonry](../columns/masonry-layouts.md), [clickable parent](../accessibility/clickable-parent.md), [focus parent](../accessibility/focus-parent.md), [flex-grid](../flexbox/flex-grids-flexbox-grids.md), color expansion, and more). We’ll quickly expand Recipes functionality to all utilities that will provide great value to the user.

In addition to pre-configured Recipes provided by the framework, we have plans to allow for custom Recipes and Recipe-sharing. You’ll be able to write and save your own Recipes and import/export those recipes between sites. You can also share Recipes or groups of Recipes with other users (in the future).

Recipes introduce a big leap forward in workflow efficiency that we’re proud to bring to the ACSS ecosystem.
