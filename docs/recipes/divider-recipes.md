---
title: Divider Recipes
sidebar_position: 100
updated: 4.0.2
---

## `?divider-all`

This recipe should be expanded on a parent element. It will place a physical divider between all direct child elements.

## `?divider-bottom`

This recipe can be expanded on any element that you'd like to place a divider _after_.

## `?divider-top`

This recipe can be expanded on any element that you'd like to place a divider _before_.

## Customizing dividers

To change the line, set `--divider` on the element, for example `--divider: 2px dashed var(--primary);`. `--divider-gap` and `--divider-inline-size` change the spacing and the width of the line.

`--divider-size`, `--divider-style` and `--divider-color` (with the fallbacks `1px`, `solid` and `#ddd`) are only used when the global divider variables in ACSS are turned off. Otherwise `--divider` comes from your dashboard settings.

## Changes in 4.0.2 <Since version="4.0.2" /> {#changes-in-402}

- The recipes now include fallback values.
- `?divider-bottom` no longer adds spacing below the last element, and `?divider-top` no longer adds spacing above the first.

## Changes From 3.x

In ACSS 4.0:

- Recipe syntax changed from `@` to `?` (e.g., `?divider-all` instead of `@divider-all`).
