---
title: Border Radius Recipes
sidebar_position: 100
---

## `?concentric-radius`

This recipe applies a concentric radius to an element. A concentric radius is an outer radius that is equal to the inner radius plus half the element's padding.

Note: This recipe sets the padding of the parent element via a `var(--padding)` variable so it can calculate the concentric radius. By default, the inner radius will use [your site's default border radius](../borders-dividers/global-border-system.md) via `var(--radius)`.

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` (e.g., `?concentric-radius` instead of `@concentric-radius`).
