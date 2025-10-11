---
title: Overlay Classes
sidebar_position: 100
---

Overlay colors and overlay gradients are quite important in web design. They provide a way to layer content or images on a web page, giving you the flexibility to create eye-catching designs and improve readability.

## Why use overlays?

A perfect example of why we would use overlays would be if we have a container or section that has a background image with some title text yet the text may be illegible. Overlays are perfect for resolving this issue.

In ACSS, overlay classes define the appearance of an overlay allowing us to use the brand colors and transparencies set in ACSS.

The video below shows these classes in use in the Oxygen Builder as Kevin explains some of the nuances of using Overlays in Oxygen.

[Background Overlays, Gradients, and Custom Overlay Colors with Automatic.css - YouTube](https://www.youtube.com/watch?v=Acz_fJG_i0M&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

## Overlay Classes

ACSS overlay classes follow the following structure:

`.overlay--[color]-[shade]-[trans]`\-\[%\]

**Example classes:**

```CSS
.overlay--primary-light-trans-20
.overlay--base-light-trans-40
```

## Example

![section with text](img/no-overlay.webp)

Example section with no overlay

Example section with overlay

Example section with overlay gradient

Overlay gradient settings

Overlay classes include all transparencies across all the following colors:

- primary, primary-light, primary-ultra-dark
- secondary, secondary-light, secondary-ultra-dark
- action, action-ultra-light, action-ultra-dark
- accent, accent-ultra-light, accent-ultra-dark
- base, base-light, base-ultra-dark
- black

You can find all ACSS Overlay classes in the [ACSS cheat sheet](https://automaticcss.com/cheat-sheet/?_utilities_category_filter=overlays).
