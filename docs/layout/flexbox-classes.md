---
title: Flexbox Classes
sidebar_position: 100
---

:::warning Removed in 4.x
Flexbox utility classes have been removed in ACSS 4.0. Use the [`?flex-row` and `?flex-column` recipes](../flexbox/flex-recipes.md) instead for establishing flex layouts, and apply alignment properties directly in your custom CSS.
:::

## Previous Flexbox Classes (3.x and Earlier)

In previous versions, ACSS provided utility classes for Flexbox properties:

- `.flex--col`, `.flex--row`, `.flex--col-reverse`, `.flex--row-reverse`
- `.flex--wrap`, `.flex--grow`
- `.justify-content--[value]`, `.align-content--[value]`
- `.justify-items--[value]`, `.align-items--[value]`
- `.self--[value]`
- `.stretch`

These classes have been removed in favor of using recipes and custom CSS for more flexible and maintainable layouts.

## Recommended Alternatives

### Establishing Flex Layouts

Use the [`?flex-row` and `?flex-column` recipes](../flexbox/flex-recipes.md) in your custom CSS:

```css
.my-container {
  ?flex-row;
  justify-content: space-between;
  align-items: center;
}
```

### Centering Content

Use the [centering classes](./centering-classes.md) which are still available and use Flexbox under the hood.

## Changes From 3.x

In ACSS 4.0:

- All flexbox utility classes (`.flex--col`, `.flex--row`, `.justify-content--`, `.align-content--`, `.justify-items--`, `.align-items--`, `.self--`, `.stretch`, etc.) have been **removed**.
- Use [`?flex-row` and `?flex-column` recipes](../flexbox/flex-recipes.md) to establish flex layouts.
- Apply alignment and justification properties directly in your custom CSS.
