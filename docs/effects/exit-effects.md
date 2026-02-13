---
title: Exit Effects
sidebar_position: 15
sidebar_custom_props:
  badge: "New"
---

Exit effects animate elements out as users scroll past them. These are perfect for hero sections and above-the-fold content that should animate away as users scroll down.

## Available Effects

| Class | Effect |
|-------|--------|
| `.on-exit--fade` | Fades to transparent |
| `.on-exit--float` | Floats upward |
| `.on-exit--sink` | Sinks downward |
| `.on-exit--grow` | Grows larger |
| `.on-exit--shrink` | Shrinks smaller |

## Basic Usage

```html
<section class="hero on-exit--fade on-exit--float">
  This hero section fades and floats away as you scroll past
</section>
```

## Composable Effects

Combine multiple exit effects:

```html
<div class="on-exit--fade on-exit--shrink">
  Fades out and shrinks as you scroll past
</div>
```

## Animating Children

Use the `-all` variant to animate direct children:

```html
<section class="hero on-exit-all--fade">
  <h1>Hero Title</h1>
  <p>Hero description</p>
  <button>CTA Button</button>
  <!-- All children fade out independently -->
</section>
```

## Exit Range

Control when the exit animation starts and ends:

| Variable | Default | Description |
|----------|---------|-------------|
| `--exit-range-start` | `cover 50%` | When animation begins |
| `--exit-range-end` | `cover 100%` | When animation completes |

- `cover 50%`: Animation starts when element is 50% scrolled through
- `cover 100%`: Animation completes when element is fully scrolled past

For earlier exit animations:

```css
.early-exit {
  --exit-range-start: cover 20%;
  --exit-range-end: cover 60%;
}
```

You can also use the `exit` keyword for viewport-relative positioning:

```css
.viewport-exit {
  --exit-range-start: exit 0%;  /* Start when element begins leaving viewport */
  --exit-range-end: exit 80%;   /* Complete at 80% exit */
}
```

## Customization

### Fade Target

Control the final opacity:

```css
.partial-fade {
  --exit-opacity-target: 0.3; /* Fade to 30% instead of fully transparent */
}
```

### Distance

For float and sink effects:

```css
.my-element {
  --exit-distance: 60px; /* Move 60px instead of default 40px */
}
```

### Scale

For grow and shrink effects:

```css
.my-element {
  --exit-scale-grow: 1.2;   /* Grow to 120% */
  --exit-scale-amount: 0.8; /* Shrink to 80% */
}
```

## Delay Utilities

Stagger exit animations:

| Class | Delay |
|-------|-------|
| `.on-exit--delay-5` | 5% |
| `.on-exit--delay-10` | 10% |
| `.on-exit--delay-15` | 15% |
| `.on-exit--delay-20` | 20% |
| `.on-exit--delay-25` | 25% |

## Combining with Entrance Effects

Elements can have both entrance and exit effects:

```html
<section class="on-enter--fade on-enter--float on-exit--fade on-exit--sink">
  Fades and floats in on entrance, fades and sinks on exit
</section>
```

## Use Cases

### Hero Sections

```html
<section class="hero on-exit--fade on-exit--float">
  <h1 class="on-exit--fade" style="--exit-range-end: cover 80%;">
    Welcome
  </h1>
  <p class="on-exit--fade" style="--exit-range-end: cover 90%;">
    Scroll to explore
  </p>
</section>
```

### Sticky Headers Reveal

Combine with sticky positioning for reveal effects:

```html
<header class="header--sticky">
  <div class="on-exit--fade on-exit--shrink">
    Content that fades as header becomes sticky
  </div>
</header>
```

## Browser Support

Like entrance effects, exit effects require `animation-timeline: view()` support. In unsupported browsers, elements remain visible without animation.
