---
title: Easing Presets
sidebar_position: 25
sidebar_custom_props:
  badge: "New"
---

ACSS provides **5 customizable easing preset slots** for consistent animation timing across your site. Configure them in the dashboard under **Effects > Options > Easing Presets**.

Each slot has a customizable **Name** and **Value**, following the same pattern as Surfaces, Overlays, and Shadows.

## Available Presets

By default, the first four slots are populated and the fifth is empty:

| Variable | Default Value | Best For |
|----------|---------------|----------|
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | General UI transitions |
| `--ease-snappy` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll animations, reveals |
| `--ease-gentle` | `cubic-bezier(0.65, 0, 0.35, 1)` | Position changes, sliders |
| `--ease-bouncy` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful micro-interactions |
| `--ease-elastic` | `linear(0, 0.029 1.6%, ...)` | Spring-like entrances |

## Custom Names

Each preset can be renamed. If you name slot 1 "default", the variable becomes `var(--ease-default)`.

The default names (smooth, snappy, gentle, bouncy) produce the familiar `--ease-smooth`, `--ease-snappy`, etc. variables.

## Preset Details

### --ease-smooth

The standard easing for most UI transitions. Starts slightly fast, decelerates smoothly.

**Use for:** hover effects, menu opens/closes, modal transitions, general state changes.

```css
.button {
  transition: background-color 0.2s var(--ease-smooth);
}
```

### --ease-snappy

Fast start with a gentle stop. Creates a responsive, dynamic feel.

**Use for:** scroll-triggered animations, dropdown reveals, content appearing on screen, toast notifications.

```css
.dropdown {
  transition: opacity 0.3s var(--ease-snappy),
              transform 0.3s var(--ease-snappy);
}
```

### --ease-gentle

Symmetrical acceleration and deceleration. Equal ease-in and ease-out.

**Use for:** elements moving from A to B, carousels and sliders, tab content transitions.

```css
.slider-item {
  transition: transform 0.5s var(--ease-gentle);
}
```

### --ease-bouncy

Overshoots the target slightly before settling. Use sparingly for playful interactions.

**Use for:** notification badges, fun button interactions, celebratory animations.

```css
.notification-badge {
  transition: transform 0.4s var(--ease-bouncy);
}
```

### --ease-elastic

A spring-like effect using CSS `linear()` easing. Overshoots with a natural bounce-back settle, mimicking a physical spring.

**Use for:** attention-grabbing entrances, modal pop-ins, playful element reveals.

```css
.modal {
  transition: transform 0.5s var(--ease-elastic);
}
```

## Usage Examples

### With Transitions

```css
.card {
  transition: box-shadow 0.3s var(--ease-smooth),
              transform 0.3s var(--ease-smooth);
}

.card:hover {
  box-shadow: var(--box-shadow-2);
  transform: translateY(-4px);
}
```

### With Animations

```css
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in {
  animation: slide-in 0.5s var(--ease-snappy) forwards;
}
```

### Combining with ACSS Effects

ACSS effects use these presets by default. Override per element when needed:

```css
.custom-hover {
  --hover-timing: var(--ease-bouncy);
}

.custom-visible {
  --visible-timing: var(--ease-gentle);
}
```

## Customizing Values

Enter any valid CSS easing function:

- `cubic-bezier(x1, y1, x2, y2)`
- `linear`
- `ease`, `ease-in`, `ease-out`, `ease-in-out`
- `steps(n, start|end)`
- `linear(...)` (CSS linear easing)

Use a [cubic bezier visualizer](https://cubic-bezier.com) to design custom curves.

## Disabling

Easing preset variables can be disabled under **Effects > Options > Easing Preset Variables**.

## Best Practices

1. **Be consistent** — use the same easing for related animations
2. **Match the action** — bouncy for fun, smooth for professional
3. **Consider duration** — bouncy works better with longer durations (0.3s+)
4. **Test on slow-mo** — use browser dev tools to slow down and refine
5. **Less is more** — stick to 1-2 presets per interface area

## Changes From 3.x

In ACSS 4.0:

- Easing presets now use the **nameable slot pattern** (like Shadows and Surfaces).
- There are **5 available slots** (up from 4 hardcoded presets), with a new `--ease-elastic` preset using CSS `linear()` easing.
- Default names remain `smooth`, `snappy`, `gentle`, `bouncy` — so `var(--ease-smooth)` etc. continue to work.
- Existing custom values are migrated automatically to the new slot format.
