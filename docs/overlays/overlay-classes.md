---
title: Overlay Classes
sidebar_position: 100
---

Overlays in ACSS allow you to add visual layers on top of elements, commonly used for darkening background images, adding gradient effects, or creating visual depth.

## Basic Overlays

Basic overlays provide a simple way to add a dark overlay to any element. Enable them in the ACSS dashboard under **Surfaces & Overlays**.

### Usage

Add the `.overlay` class or any class containing `overlay--` to an element:

```html
<div class="overlay">
  <!-- Content appears above the overlay -->
</div>
```

### Customizing the Overlay Color

The overlay color is controlled via the `--overlay-color` CSS variable:

```css
.my-hero {
  --overlay-color: rgba(0, 0, 0, 0.5);
}
```

The default overlay color is `rgba(0, 0, 0, 0.7)`.

### How It Works

Basic overlays use a pseudo-element (configurable to `::before` or `::after`) positioned behind the content:

- The parent element receives `position: relative` and `z-index: 0`
- The pseudo-element is absolutely positioned with `inset: 0` and `z-index: -1`

## Custom Overlays

Custom overlays provide more advanced options including gradients, images, blur effects, blend modes, and animations. Configure up to 5 custom overlays in the dashboard.

### Available Classes

Each custom overlay generates classes based on its number and optional name:

- `.overlay-1`, `.overlay-2`, `.overlay-3`, `.overlay-4`, `.overlay-5`
- `.overlay-[name]` (if you provide a custom name in the dashboard)

### Locally Scoped Variables

Custom overlays support locally scoped variables for runtime customization:

| Variable | Description |
|----------|-------------|
| `--overlay-bg-color` | Background color of the overlay |
| `--overlay-background` | Background gradient/image |
| `--overlay-background-size` | Background size |
| `--overlay-background-position` | Background position |
| `--overlay-background-repeat` | Background repeat behavior |
| `--overlay-background-attachment` | Background attachment |
| `--overlay-background-blur` | Backdrop blur amount |
| `--overlay-opacity` | Overlay opacity |
| `--overlay-blend-mode` | Mix blend mode |
| `--overlay-border-radius` | Border radius |
| `--overlay-animation` | Animation |
| `--overlay-inset` | Inset positioning |
| `--overlay-z-index` | Z-index of the overlay |

### Example: Customizing at Runtime

```css
.my-section {
  --overlay-opacity: 0.5;
  --overlay-background-blur: 10px;
}
```

## Overlay Mixin

For custom SCSS, use the `overlay()` mixin:

```scss
.my-element {
  @include overlay(rgba(0, 0, 0, 0.6));
}
```

This creates a complete overlay setup with the specified background.

## Changes From 3.x

In ACSS 4.0:

- Custom overlays now support more properties including **backdrop blur**, **animations**, **nested overlays**, and **custom inset**.
- Overlay classes use CSS custom properties for easier runtime customization.
- Basic overlays and custom overlays are now separate features with independent toggles.
