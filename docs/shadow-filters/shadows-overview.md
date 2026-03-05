---
title: Shadows Overview
sidebar_position: 0
slug: shadows-overview
---

The **Shadows** panel in the ACSS dashboard provides a centralized place to manage all shadow presets for your project. Each shadow type offers **5 customizable slots** with custom naming support.

## Shadow Types

### Box Shadows

Standard CSS `box-shadow` values for adding depth to rectangular elements like cards, containers, and modals.

```css
.card {
  box-shadow: var(--box-shadow-1);
}
```

[Full documentation →](box-shadows)

### Text Shadows

CSS `text-shadow` values for adding depth or improving legibility of text, especially over images and busy backgrounds.

```css
.hero-heading {
  text-shadow: var(--text-shadow-1);
}
```

[Full documentation →](text-shadows)

### Drop Shadows

CSS `filter: drop-shadow()` values that follow the alpha channel of an element, making them ideal for SVGs, transparent images, and non-rectangular shapes.

```css
.icon {
  filter: var(--drop-shadow-1);
}
```

[Full documentation →](drop-shadows)

## Naming Convention

All shadow types use the same naming pattern as Surfaces and Overlays:

- Default names are **1, 2, 3, 4, 5**
- You can rename any slot (e.g., "subtle", "elevated", "floating")
- The CSS variable updates to match: `var(--box-shadow-subtle)`

## Disabling

Each shadow type can be independently disabled under **Options**:

- Box Shadow Variables
- Text Shadow Variables
- Drop Shadow Variables
