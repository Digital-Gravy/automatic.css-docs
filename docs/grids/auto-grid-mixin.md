---
title: Auto Grid Mixin
sidebar_position: 100
updated: 4.0.2
---

**Note:** Functions and mixins are designed for use in the Global SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The `auto-grid()` mixin is useful for assigning auto grid (automatically responsive grid) structures to custom classes or containers.

Here’s the full mixin with all available arguments:

`auto-grid($column-count, $min, $flow);`

The only required argument is $column-count, so it’s super easy to use. To get started, use the mixin with any selector like this:

```CSS
.my-grid {
    @include auto-grid(4);
}
```

The number in parenthesis is the number of desired columns.

## Additional Arguments

The auto grid mixin has additional options, passed as arguments in the parenthesis. Here’s an explanation of each argument:

- `$column-count` – The number of initial grid columns
- `$min` – The minimum inline dimension of each item before stacking occurs (if you change this value, it could change the number of initial columns)
- `$flow` – The column flow (`auto-fit` or `auto-fill`). Defaults to the Flow Option set in **Layout → Auto Grid**.

The mixin uses the Aggressiveness set in **Layout → Auto Grid**.

## Passing Arguments

You can pass arguments in any order as long as you call them by name. Here’s a sample use:

```CSS
.my-grid {
    @include auto-grid(4, $flow: auto-fill);
}
```

Since `$column-count` is the first argument, you can put the value without naming the argument. The others should be named explicitly.
