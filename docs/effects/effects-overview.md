---
title: Effects Overview
sidebar_position: 1
sidebar_custom_props:
  badge: "New"
---

ACSS provides a comprehensive effects system for adding motion and visual feedback to your website. All effects are opt-in, composable, and respect the user's `prefers-reduced-motion` setting.

## Effect Categories

### Hover Effects

Simple hover interactions using the `.on-hover--*` prefix:

- **Transform**: grow, shrink, float, sink, slide-right, slide-left
- **Shadow**: shadow, glow
- **Filter**: brighten
- **Opacity**: fade
- **Border**: ripple, outline, underline animations

### Scroll Animations

CSS scroll-driven animations that trigger based on scroll position:

- **Entrance Effects** (`.on-enter--*`): Elements animate into view as you scroll down
- **Exit Effects** (`.on-exit--*`): Elements animate out as you scroll past them

### On Visible

JavaScript-powered animations using Intersection Observer:

- **On Visible** (`.on-visible--*`): Elements animate once when they become visible and stay visible

## Key Features

### Composable

Combine multiple effect classes on a single element:

```html
<div class="on-enter--fade on-enter--float on-enter--grow">
  This element fades in, floats up, AND grows simultaneously
</div>
```

### Apply to Children

Use the `-all` variants to animate direct children:

```html
<div class="on-enter-all--fade">
  <div>Child 1 fades in</div>
  <div>Child 2 fades in</div>
  <div>Child 3 fades in</div>
</div>
```

### Staggered Animations

Add the `--stagger` class to automatically stagger children using CSS `sibling-index()`:

```html
<div class="on-enter-all--fade on-enter--stagger">
  <div>Child 1 — no delay</div>
  <div>Child 2 — delayed by stagger interval</div>
  <div>Child 3 — delayed by 2× stagger interval</div>
</div>
```

Each child receives an increasing delay based on its position. Configure the interval per category in the dashboard.

:::note
Stagger uses CSS `sibling-index()`, which has limited browser support. In unsupported browsers, all children animate simultaneously.
:::

### Accessibility

All effects automatically respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled, elements appear immediately */
}
```

## Dashboard Configuration

Configure effects in the dashboard under **Effects**. The panel is organized into two tabs:

- **Effects Tab**: Configure individual effect settings (timing, distance, etc.)
- **Options Tab**: Enable/disable effects from the library

Only enabled effects are included in your CSS output.

## Browser Support

- **Hover Effects**: All modern browsers
- **Scroll Animations**: Browsers supporting `animation-timeline: view()` (Chrome 115+, Edge 115+). Falls back gracefully in unsupported browsers.
- **On Visible**: All browsers supporting Intersection Observer (all modern browsers)
