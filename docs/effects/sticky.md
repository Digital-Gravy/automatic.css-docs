---
title: Sticky
sidebar_position: 225
---

Sticky elements stick to the top of the browser window (with or without an offset) as the user scrolls down the page.

Sticky elements differ from "fixed" position elements in that they're statically positioned until they interact with the top of the browser window. They also lose their stickiness when they reach the end of their parent container.

## Making an Element Sticky

Add the `.sticky` class to any element:

```html
<aside class="sticky">
  <!-- This sidebar will stick when scrolling -->
</aside>
```

## Controlling Sticky Offset

The offset is the gap between the top of the browser window and the sticky element. Control it with the `--sticky-offset` variable:

```css
.my-sticky-element {
  --sticky-offset: 80px;
}
```

The default offset is `0`, meaning the element touches the top of the browser window.

### Global Sticky Offset

Set a global offset for all sticky elements in the ACSS dashboard under **Additional Styling > Sticky Settings**.

You can also configure offset values at each breakpoint for responsive behavior.

### Manual Offset Classes

ACSS provides modifier classes for common offset values:

- `.sticky-top--s` - Small offset
- `.sticky-top--m` - Medium offset  
- `.sticky-top--l` - Large offset

These values are customizable in the dashboard under **Additional Styling > Sticky Settings**.

```html
<nav class="sticky sticky-top--m">
  <!-- Sticky nav with medium offset -->
</nav>
```

### Custom Offset

For one-off offsets, use the `--sticky-offset` variable or set the `top` property directly:

```css
.my-sidebar {
  --sticky-offset: 100px;
}

/* Or directly */
#my-element {
  top: 3em;
}
```

## How It Works

The `.sticky` class applies:

```css
.sticky {
  position: -webkit-sticky;
  position: sticky;
  inset-block-start: var(--sticky-offset, 0);
}
```

## Changes From 3.x

In ACSS 4.0:

- Position utility classes (`.relative`, etc.) have been **removed**.
- Z-index utility classes (`.z--10`, `.z--20`, etc.) have been **removed**.
- Sticky class now uses `--sticky-offset` CSS variable for easier customization.
- Uses `inset-block-start` instead of `top` for better logical property support.
