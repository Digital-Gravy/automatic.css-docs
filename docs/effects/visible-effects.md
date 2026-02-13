---
title: Visible Effects
sidebar_position: 20
sidebar_custom_props:
  badge: "New"
---

Visible effects animate elements once when they become visible in the viewport. Unlike scroll animations that continuously respond to scroll position, visible effects play once and the element remains in its final state.

## How It Works

Visible effects use the Intersection Observer API via a small JavaScript file. When an element with a `.on-visible--*` class enters the viewport:

1. The `is-visible` class is added to the element
2. CSS transitions animate from the initial state to the final state
3. The animation plays once and doesn't reverse when scrolling back

## Available Effects

| Class | Effect |
|-------|--------|
| `.on-visible--fade` | Fades from transparent to opaque |
| `.on-visible--float` | Floats up from below |
| `.on-visible--sink` | Sinks down from above |
| `.on-visible--slide-left` | Slides in from the right |
| `.on-visible--slide-right` | Slides in from the left |
| `.on-visible--grow` | Grows from a smaller scale |
| `.on-visible--shrink` | Shrinks from a larger scale |
| `.on-visible--blur` | Starts blurred, then sharpens |

## Basic Usage

```html
<div class="on-visible--fade">
  This element fades in when it becomes visible
</div>
```

## Composable Effects

Combine multiple visible effects:

```html
<div class="on-visible--fade on-visible--float on-visible--grow">
  Fades in, floats up, and grows simultaneously
</div>
```

## Animating Children

Use the `-all` variant to animate direct children:

```html
<div class="on-visible-all--fade on-visible-all--float">
  <div>Child 1 animates in</div>
  <div>Child 2 animates in</div>
  <div>Child 3 animates in</div>
</div>
```

The animation triggers when the parent becomes visible, and all children animate together.

## Timing Settings

### Duration and Easing

| Variable | Default | Description |
|----------|---------|-------------|
| `--visible-duration` | `0.6s` | Animation duration |
| `--visible-timing` | `var(--ease-snappy)` | Easing function |
| `--visible-delay` | `0s` | Default delay |

```css
.slow-reveal {
  --visible-duration: 1s;
  --visible-timing: var(--ease-gentle);
}
```

### Visibility Threshold

Control how much of the element must be visible before triggering:

| Variable | Default | Description |
|----------|---------|-------------|
| `--visible-threshold` | `0.2` | Percentage visible (0-1) |

```css
.late-trigger {
  --visible-threshold: 0.5; /* Must be 50% visible */
}
```

### Delay Utilities

Stagger animations with time-based delays:

| Class | Delay |
|-------|-------|
| `.on-visible--delay-100` | 100ms |
| `.on-visible--delay-200` | 200ms |
| `.on-visible--delay-300` | 300ms |
| `.on-visible--delay-400` | 400ms |
| `.on-visible--delay-500` | 500ms |

```html
<div class="on-visible--fade">First (no delay)</div>
<div class="on-visible--fade on-visible--delay-200">Second (200ms delay)</div>
<div class="on-visible--fade on-visible--delay-400">Third (400ms delay)</div>
```

## Customization

### Distance

For float, sink, and slide effects:

```css
.my-element {
  --visible-distance: 60px;
}
```

### Scale

For grow and shrink effects:

```css
.my-element {
  --visible-scale-start: 0.8;  /* Grow: start at 80% */
  --visible-scale-shrink: 1.2; /* Shrink: start at 120% */
}
```

### Blur

For blur effect:

```css
.my-element {
  --visible-blur-amount: 12px;
}
```

## Visible vs. Entrance Effects

Choose based on your needs:

| Feature | Visible Effects | Entrance Effects |
|---------|-----------------|------------------|
| **Trigger** | Once when visible | Continuously on scroll |
| **Reverses** | No | Yes (on scroll back) |
| **Technology** | Intersection Observer (JS) | Scroll-driven animations (CSS) |
| **Browser Support** | All modern browsers | Chrome/Edge 115+ |
| **Best For** | One-time reveals, content loading | Interactive scroll experiences |

### When to Use Visible Effects

- Content that should "pop in" once
- Below-the-fold content on load
- Elements that shouldn't re-animate on scroll back
- Maximum browser compatibility needed

### When to Use Entrance Effects

- Hero sections with scroll-linked animation
- Content that should animate both in and out
- Parallax-style effects
- Scrubbing/progress-based animations

## Staggered Content Example

Create a staggered reveal for a card grid:

```html
<div class="grid">
  <div class="card on-visible--fade on-visible--float">Card 1</div>
  <div class="card on-visible--fade on-visible--float on-visible--delay-100">Card 2</div>
  <div class="card on-visible--fade on-visible--float on-visible--delay-200">Card 3</div>
  <div class="card on-visible--fade on-visible--float on-visible--delay-300">Card 4</div>
</div>
```

## Accessibility

Visible effects respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="on-visible--"] {
    transition: none !important;
    opacity: 1;
    translate: none;
    scale: none;
    filter: none;
  }
}
```

Elements appear immediately without animation for users who prefer reduced motion.
