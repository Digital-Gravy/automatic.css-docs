---
title: Breakpoint Mixins
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Note: Mixins only work within the custom SCSS area of the ACSS dashboard.

ACSS has mixins for both max-width and min-width media queries. These allow you to write dynamic media queries easily:

**Standard media query:**

```CSS
@include breakpoint(extension) {
  // Your CSS goes here.
}
```

**Mobile first media query:**

```CSS
@include breakpoint-up(extension) {
  // Your CSS goes here.
}
```

“Extension” is the name of the breakpoint extension, e.g., xl, l, m, s.
