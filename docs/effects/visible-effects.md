---
title: On Visible
sidebar_position: 20
sidebar_custom_props:
  badge: "New"
---

On Visible animates elements once when they become visible in the viewport. Unlike scroll animations that continuously respond to scroll position, the animation plays once and the element remains in its final state.

## How It Works

On Visible uses the Intersection Observer API via a small JavaScript file. When an element with a `.on-visible--*` class enters the viewport:

1. The `acss-visible` class is added to the element
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

Combine multiple On Visible effects:

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
| `--visible-timing` | `var(--ease-smooth)` | Easing function |
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

### Staggered Children

Add `.on-visible--stagger` to a parent using `-all` classes to automatically stagger each child's animation:

```html
<div class="on-visible-all--fade on-visible-all--float on-visible--stagger">
  <div>Child 1 — animates first</div>
  <div>Child 2 — delayed by stagger interval</div>
  <div>Child 3 — delayed by 2× stagger interval</div>
</div>
```

Configure the stagger interval in the dashboard under the Timing section. The default interval is `0.1s`.

:::note
Stagger uses CSS `sibling-index()`, which has limited browser support. In unsupported browsers, all children animate simultaneously.
:::

## Customization

### Starting Opacity

For fade effect:

```css
.my-element {
  --visible-opacity-start: 0.2; /* Start at 20% opacity instead of fully transparent */
}
```

### Distance

Each movement effect has its own distance variable:

```css
.my-element {
  --visible-float-distance: 60px;  /* Float distance */
  --visible-sink-distance: 60px;   /* Sink distance */
  --visible-slide-distance: 60px;  /* Slide distance */
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

## On Visible vs. Entrance Effects

Choose based on your needs:

| Feature | On Visible | Entrance Effects |
|---------|------------|------------------|
| **Trigger** | Once when visible | Continuously on scroll |
| **Reverses** | No | Yes (on scroll back) |
| **Technology** | Intersection Observer (JS) | Scroll-driven animations (CSS) |
| **Browser Support** | All modern browsers | Chrome/Edge 115+ |
| **Best For** | One-time reveals, content loading | Interactive scroll experiences |

### When to Use On Visible

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
<div class="grid on-visible-all--fade on-visible-all--float on-visible--stagger">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

Each card automatically receives an increasing delay based on its position — no manual delay classes needed.

## Manual Visibility Control

By default, the Intersection Observer automatically adds the `acss-visible` class when elements scroll into view. For elements where you control visibility yourself — such as menus, modals, or dropdowns — add `data-skip-acss-visible` to tell the observer to ignore the element entirely.

You then add and remove `acss-visible` via JavaScript when you're ready to trigger the animation. Removing `acss-visible` resets the element to its hidden state so the animation replays each time.

### Example: Animating Menu Items

Add the effect classes and `data-skip-acss-visible` to your menu list in the HTML:

```html
<ul class="nav__list on-visible-all--fade on-visible-all--blur on-visible--stagger" data-skip-acss-visible>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/services">Services</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

Then toggle `acss-visible` in your menu's open/close logic:

```js
const navList = document.querySelector('.nav__list');

function openMenu() {
  navList.classList.add('acss-visible');
}

function closeMenu() {
  navList.classList.remove('acss-visible');
}
```

When the menu opens, each list item fades in with a blur-to-sharp transition, staggered one after the other. When the menu closes and `acss-visible` is removed, the items return to their hidden state so the animation replays on the next open.

:::tip
`data-skip-acss-visible` is useful any time elements are already in the DOM but hidden by your own logic (menus, tabs, accordions, modals). The effect classes define the animation — you just control *when* it fires by toggling `acss-visible`.
:::

## Accessibility

On Visible respects `prefers-reduced-motion`:

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
