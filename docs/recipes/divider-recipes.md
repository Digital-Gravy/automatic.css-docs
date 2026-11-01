---
title: Divider Recipes
sidebar_position: 100
---

## `?divider-all`

This recipe should be expanded on a parent element. It will place a physical divider between all direct child elements.

## `?divider-bottom`

This recipe can be expanded on any element that you'd like to place a divider _after_.

## `?divider-top`

This recipe can be expanded on any element that you'd like to place a divider _before_.

## Customizing dividers

The divider recipes read these variables: `--divider-gap`, `--divider-size`, `--divider-inline-size`, `--divider-style` and `--divider-color`. Each one falls back to a default when it isn't set. The recipe lists them at the top so you can change them right there.

## Changes in 4.0.2

- The recipes now include fallback values.
- `?divider-bottom` no longer adds spacing below the last element, and `?divider-top` no longer adds spacing above the first.

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` (e.g., `?divider-all` instead of `@divider-all`).
