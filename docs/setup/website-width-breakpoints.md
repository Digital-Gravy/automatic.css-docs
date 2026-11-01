---
title: Website Width & Breakpoints
sidebar_position: 30
updated: 4.0.2
---

ACSS needs to know your website's width. It doesn't need breakpoints. ACSS 4 has no breakpoint settings, so there is nothing to set up or map in your page builder.

:::info Coming from ACSS 3?
ACSS 3 had a Viewport tab with XL, L, M and S breakpoints (plus optional XXL and XS), and you mapped them to your builder's breakpoints. ACSS 4 removed all of this. See [What changes in your workflow](./working-in-acss-4.md) for how to do the same things in 4.x. The 3.x instructions are still available in the [3.x docs](/3.0/setup/website-width-breakpoints).
:::

## Setting Website Width

Open the ACSS dashboard and go to **Layout → Website Dimensions**:

- **Content Width** is the width of your content on large screens. ACSS outputs it as `var(--content-width)`. Fluid typography, fluid spacing and auto grids are calculated from it.
- **Minimum Width** is the narrowest screen width ACSS uses for its fluid calculations. At this width and below, fluid values are at their minimum.

Content Width should match the container width in your page builder. The best way to do that is to set your builder's container width to `var(--content-width)` instead of a fixed number, so both always stay in sync. See [Content Width](../dimension/content-width.md) for details.

## Breakpoints in ACSS 4

ACSS 4 is a breakpoint-free framework. Its features adapt on their own:

- Typography and spacing are fluid between Minimum Width and Content Width.
- [Auto grids](../grids/auto-grids.md) and [variable grids](../grids/variable-grid.md) stack based on the space their items have, not on the screen width.

You can still use media queries and container queries wherever you need them. Use your page builder's breakpoints (in Bricks, for example, the breakpoints in the builder work as usual), or write your own queries in CSS:

```css
.service-grid {
  display: grid;
  grid-template-columns: var(--grid-3);
  gap: var(--grid-gap);

  @media (max-width: 768px) {
    grid-template-columns: var(--grid-1);
  }
}
```

Your builder's breakpoints don't have to match anything in ACSS.
