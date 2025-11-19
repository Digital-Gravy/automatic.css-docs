---
title: What's New in ACSS 4.x
sidebar_position: 10
---

ACSS 4.x is essentially a maturation and solidification of a winning framework, not a brand new experience that users have to learn or figure out. We just took a powerful framework and made it faster, more agile, more intelligent, more efficient, and more aligned with Era 4 of page building as well as with our flagship development environment, [Etch](https://etchwp.com).

If you're well versed in ACSS 3.x and previous versions, you're going to feel right at home in 4.x. With that said, there are certainly some changes to be aware of. This page will serve as a one-shot overview of all the major changes from 3.x to 4.x.

:::warning Backward Compatibility Notice
It's important to note that ACSS 4.x is not backward compatible with 3.x. The brand new workflows introduced by advancements in vanilla CSS are impossible to make fully backward compatible. The good news is that it doesn't matter — we're fully supporting the stability of 3.x for all your existing websites for 5 years (and they'll still function just fine beyond that). Just leave your old projects on 3.x and start new projects with 4.x.
:::

## Major Changes

Users should be most aware of the following changes from 3.x to 4.x:

- **Removed All Previously Deprecated Features:**  
  ACSS 4.x is unprecedentedly lighter and more efficient since we no longer have to support any deprecated features.

- **Removed Most Utility Class Modules:**  
  ACSS is now officially a variable-first, BEM-first (or any kind of custom classes) framework. This dramatically reduces the framework size, makes workflows simpler and more consistent (less mixing utility classes and BEM), and makes the framework easier to learn and use. Some critical utility classes have been replaced with Recipes which can be expanded inside of any BEM class.

- **Removed Breakpoints:**  
  Since preset breakpoints are an Era 1/2/3 concept and don't make sense for Era 4, we've removed them. ACSS is now officially a breakpoint-free framework! None of the remaining utility classes or features require breakpoint presets. You can still use media queries and container queries in your development process, but they're no longer needed in the ACSS framework as fixed presets.

- **Implemented CSS Layers:**  
  Users now have a lot more control over framework specificity.

- **New Color System (OKLCH):**  
  The new color system is far more accurate in terms of human perceptibility, improving color rendering and accessibility.

- **New Dark Mode Approach:**  
  ACSS now makes full use of `color-scheme` and `light-dark()` for a much easier, more efficient, more flexible, and more accurate approach to light and dark mode. This includes the removal of "Alt" colors and a massive reduction in CSS output.

- **Removed Transparency Tokens:**  
  Loading an entire library of predefined transparency tokens is no longer necessary with the introduction of `color-mix()` and [Relative Color Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) workflows.

- **"XXL" to "2XL"**  
  We've made a change from XXL t-shirt size to 2XL for better clarity and to make it easier to add additional sizes like 2XS or 3XL, etc. **All other t-shirt sizes remain unchanged (based on a vote from the user base).**

- **Refactored Form Styling:**  
  Forms are completely refactored to perfectly match the options and structures available for each 3rd party form system we support. This results in more styling accuracy across third party form tools.

- **Refactored Header Height:**  
Header Height, Scroll Offsets, and Content Offset are now breakpoint-less and based on fluid heading height.

- **Refactored Width Classes:**  
  We no longer use t-shirt sizes for width classes. Width classes now use literal values in 10-point increments from 10 to 90 (e.g. `.width--60`).

- **Separated Custom Surfaces & Overlays:**  
  Surfaces and overlays are no longer combined. We separated them, which expands your custom options from five to ten and makes custom overlays and textures much clearer, cleaner, and easier to configure.