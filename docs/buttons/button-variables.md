---
title: Button Variables
sidebar_position: 30
---

There may be times when you want to design your own custom button, but you still want to use specific values from ACSS's global button settings. If this is the case, you can use button variables.

The following button variables can be changed at any time with custom styling:

- `--btn-background`
- `--btn-background-hover`
- `--btn-text-color`
- `--btn-text-color-hover`
- `--btn-text-transform`
- `--btn-text-decoration`
- `--btn-text-decoration-hover`
- `--btn-letter-spacing`
- `--btn-line-height`
- `--btn-font-size`
- `--btn-font-weight`
- `--btn-font-family`
- `--btn-font-style`
- `--btn-padding-block` (top and bottom padding)
- `--btn-padding-inline` (left and right padding)
- `--btn-min-width`
- `--btn-align-items`
- `--btn-transition-duration`
- `--btn-border-color`
- `--btn-border-color-hover`
- `--btn-border-style`
- `--btn-radius`
- `--btn-border-width`
- `--btn-outline-background-color`
- `--btn-outline-border-hover`
- `--btn-outline-text-color`
- `--btn-outline-text-color-hover`
- `--focus-color`

## Creating Custom Buttons

For creating custom buttons, **using the [button mixin](../mixins/button-mixins.md) is the recommended approach**. The mixin applies all default button styles in one line, making your code cleaner and easier to maintain.

If you're working in vanilla CSS or need more granular control, you can manually reference button variables as a fallback. Here's an example of a custom gradient button using manual variable references:

```css
.gradient-button {
    background: linear-gradient(var(--primary-medium), var(--primary));
    padding: var(--btn-padding-block) var(--btn-padding-inline);
    font-size: var(--btn-font-size);
    line-height: var(--btn-line-height);
    letter-spacing: var(--btn-letter-spacing);
    border-width: var(--btn-border-width);
    border-style: var(--btn-border-style);
    border-radius: var(--btn-border-radius);
    border-color: transparent;
    font-weight: var(--btn-font-weight);
    text-decoration: var(--btn-text-decoration);
    font-style: var(--btn-font-style);
    text-transform: var(--btn-text-transform);
    min-inline-size: var(--btn-min-width);
    transition: background var(--btn-transition-duration) ease-in-out;
}
```

This approach ensures your custom button inherits any changes you make to global button styles in the ACSS dashboard, but requires more code than using the mixin.

## Changes From 3.x

In ACSS 4.0:

- Added `--btn-font-family` for controlling button font family.
- Added `--btn-align-items` for controlling button alignment.
- Removed `--btn-outline-border-width` in favor of unified `--btn-border-width` for both solid and outline buttons.
