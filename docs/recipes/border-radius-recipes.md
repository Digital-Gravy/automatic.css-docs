---
title: Border Radius Recipes
sidebar_position: 100
updated: 4.0.2
---

## `?concentric-radius`

This recipe applies a concentric radius to an element. A concentric radius is an outer radius that is equal to the inner radius plus the element's padding.

The recipe sets the element's padding with `--padding` and the inner radius with `--inner-radius`. By default, `--inner-radius` uses [your site's default border radius](../borders-dividers/global-border-system.md) via `var(--radius)`. The direct children get the inner radius.

## Changes in 4.0.2 <Since version="4.0.2" /> {#changes-in-402}

- The outer radius is now the inner radius plus the full padding (it used half the padding).
- New `--inner-radius` variable.

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` (e.g., `?concentric-radius` instead of `@concentric-radius`).
