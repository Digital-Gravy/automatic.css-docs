---
title: Breakpoint Mixins
sidebar_position: 100
updated: 4.0.2
---

ACSS 4 has no breakpoint mixins. `@include breakpoint(l)` and `@include breakpoint-up(m)` were removed with the breakpoints. If your Global SCSS still uses them, compiling fails.

Write the media query directly instead:

```scss
// ACSS 3.x
.hero {
  @include breakpoint(m) {
    text-align: center;
  }
}

// ACSS 4.x
.hero {
  @media (max-width: 768px) {
    text-align: center;
  }
}
```

The 3.x page is still available in the [3.x docs](/3.0/mixins/breakpoint-mixins). See [Website Width & Breakpoints](../setup/website-width-breakpoints.md) for how ACSS 4 handles responsiveness.
