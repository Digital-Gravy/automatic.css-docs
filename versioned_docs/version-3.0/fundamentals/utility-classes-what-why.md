---
title: "Utility Classes: What & Why"
sidebar_position: 100
---

Utility classes are like “presets” that help you change the style or behavior of elements quickly without needing to write css or change styles manually in a builder.

## Example

Let’s say you want to create a 3-column grid. In a builder like Oxygen, you have to do a lot of different things (and know how Grids work). And in CSS, you’d have to write a lot of lines of code.

But with utility classes, you simply add the **.grid–3** class to a div and it transforms it into a 3-column grid.

What if you need to change your div to a 1-column grid at on mobile devices? That would require additional code or additional fiddling in the buidler.

But with a utility system like Automatic.css, you simply add **.grid–s-1** to your div and it automatically transforms your 3-column grid to 1-column at the “S” breakpoint.

## Benefits to Using Utility Classes

- **They create extreme consistency.** Padding, margin, headings, text sizes, colors, etc. always use the same values regardless of how many people are developing the site.
- **They speed up workflow.** Utility classes are much faster than writing css or fiddling in a builder.
- **They can help you accomplish certain things that you may not be comfortable attempting in a more manual fashion.** Take our grid example from above. With utility classes, you can easily create grids for your project even if you don’t know how grids work from a code perspective.
- **They help you quickly test structure and design before you create custom classes.** If you’re going to create a custom element, you might want to “mock it up” with utility classes so you know exactly what needs to happen. Then it’s easy to create the perfect custom class structure for your custom element.
- **They’re already setup with fallbacks.** If you want to use advanced techniques like clamp() and calc() on your own, you need to make sure there are fallbacks in place. With Automatic.css, you don’t have to worry about fallbacks because they’re already installed. And because of Automatic’s variable hooks, even if you create custom classes and elements you still have fallback protection.
