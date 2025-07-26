---
title: Line Clamp Utilities
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

It’s often desirable to only show a few lines of text instead of a full paragraph. Sometimes this can be accomplished with a capable page builder via PHP, but sometimes it’s only possible with CSS (assuming you don’t want to introduce unnecessary JS).

In Automatic.css, clamping lines to a specific line count is as easy as adding the a `line-clamp--` utility class or calling a @line-clamp [recipe](https://automaticcss.com/docs/recipes/).

## Line Clamp Classes

The following classes are available:

- `line-clamp--1`
- `line-clamp--2`
- `line-clamp--3`
- `line-clamp--4`
- `line-clamp--5`
- `line-clamp--custom`

These are pretty self explanatory. They clamp the text to the desired number of lines.

If you need to clamp to more than five lines, you can use `.line-clamp--custom`. This needs to be paired with a locally scoped variable `var(--line-count)`. Set `var(--line-count)` to your desired number of lines.

Here’s what this looks like in Bricks:

![Custom Line Clamp in Bricks Builder](https://automaticcss.com/wp-content/uploads/custom-line-clamp-bricks-1024x733.jpg)

Custom Line Clamp in Bricks Builder

Note that the CSS for the line count is added at the ID level. You don’t want to add it to the class itself or the same count will apply every time you use the `.line-clamp--custom` class. Adding at the ID level makes the count unique to that instance of line clamp.

## Line Clamp Recipe

If you’re working on a BEM class and want your line clamp to apply to a specific class, you can use an @recipe. Just write `@line-clamp;` in the element CSS box or ACSS’ custom CSS area and the code you need will auto-expand.

## Line Clamp Mixin

If you’re working in SCSS, you can use the line clamp mixin like this:

```CSS
.my-clamped-text {
  @include line-clamp($line-count);
}
```

Replace `$line-count` with the desired number of lines.
