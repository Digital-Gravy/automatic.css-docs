---
title: Entrance Effects
sidebar_position: 10
sidebar_custom_props:
  badge: "New"
---

Entrance effects animate elements into view as users scroll down the page. These use CSS scroll-driven animations via `animation-timeline: view()`, providing smooth, performant animations without JavaScript.

## Available Effects

| Class | Effect |
|-------|--------|
| `.on-enter--fade` | Fades from transparent to opaque |
| `.on-enter--float` | Floats up from below |
| `.on-enter--sink` | Sinks down from above |
| `.on-enter--slide-left` | Slides in from the right |
| `.on-enter--slide-right` | Slides in from the left |
| `.on-enter--grow` | Grows from a smaller scale |
| `.on-enter--shrink` | Shrinks from a larger scale |
| `.on-enter--blur` | Starts blurred, then sharpens |
| `.on-enter--parallax` | Parallax depth effect |

## Basic Usage

```html
<section class="on-enter--fade">
  This section fades in as you scroll to it
</section>
```

## Composable Effects

Combine multiple effects for richer animations:

```html
<div class="on-enter--fade on-enter--float on-enter--grow">
  This element fades in, floats up, AND grows simultaneously
</div>
```

All animations play together, creating a unified entrance effect.

## Animating Children

Use the `-all` variant to animate direct children instead of the parent:

```html
<div class="on-enter-all--fade on-enter-all--float">
  <div>Child 1 animates in</div>
  <div>Child 2 animates in</div>
  <div>Child 3 animates in</div>
</div>
```

The parent container doesn't animate—only its direct children.

## Animation Timing

### Range Settings

Control when the animation starts and ends relative to the element's position in the viewport:

| Variable | Default | Description |
|----------|---------|-------------|
| `--animate-range-start` | `entry 20%` | When animation begins |
| `--animate-range-end` | `entry 100%` | When animation completes |

The `entry` keyword refers to when the element enters the viewport from the bottom.

```css
.slow-reveal {
  --animate-range-start: entry 0%;
  --animate-range-end: entry 80%;
}
```

### Staggered Children

Add `.on-enter--stagger` to a parent using `-all` classes to automatically stagger each child's animation based on its position:

```html
<div class="on-enter-all--fade on-enter-all--float on-enter--stagger">
  <div>Child 1 — animates first</div>
  <div>Child 2 — delayed by stagger interval</div>
  <div>Child 3 — delayed by 2× stagger interval</div>
</div>
```

Configure the stagger interval in the dashboard under the Timing section. The default interval is `5%` of the scroll range.

:::note
Stagger uses CSS `sibling-index()`, which has limited browser support. In unsupported browsers, all children animate simultaneously.
:::

## Customization

### Starting Opacity

For fade effect:

```css
.my-element {
  --enter-opacity-start: 0.2; /* Start at 20% opacity instead of fully transparent */
}
```

### Distance

Each movement effect has its own distance variable:

```css
.my-element {
  --enter-float-distance: 60px;  /* Float distance */
  --enter-sink-distance: 60px;   /* Sink distance */
  --enter-slide-distance: 60px;  /* Slide distance */
}
```

### Scale

For grow and shrink effects:

```css
.my-element {
  --enter-scale-start: 0.8;  /* Start at 80% for grow */
  --enter-scale-shrink: 1.2; /* Start at 120% for shrink */
}
```

### Blur

For blur effect:

```css
.my-element {
  --enter-blur-amount: 12px; /* More blur */
}
```

## Parallax Effect

The parallax effect creates a depth illusion where the element moves slower than the scroll:

```html
<div class="image-container">
  <img src="background.jpg" class="on-enter--parallax" alt="Parallax background">
</div>
```

**Important**: The parent container should have `overflow: hidden` to clip the parallax movement.

```css
.image-container {
  overflow: hidden;
}

.on-enter--parallax {
  --enter-parallax-distance: 200px; /* Total travel distance */
}
```

## Browser Support

Scroll-driven animations require browser support for `animation-timeline: view()`:

- **Supported**: Chrome 115+, Edge 115+
- **Graceful fallback**: In unsupported browsers, elements appear immediately without animation

```css
/* ACSS includes this fallback automatically */
@supports not (animation-timeline: view()) {
  [class*="on-enter--"] {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
```

## Best Practices

1. **Use sparingly**: Too many scroll animations can feel overwhelming
2. **Keep distances small**: Subtle movements (20-60px) feel more polished
3. **Test on scroll**: Verify animations feel smooth at different scroll speeds
4. **Consider mobile**: Test on touch devices where scroll behavior differs
5. **Combine thoughtfully**: 2-3 combined effects usually work better than more
