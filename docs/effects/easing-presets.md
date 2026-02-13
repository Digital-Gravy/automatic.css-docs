---
title: Easing Presets
sidebar_position: 25
sidebar_custom_props:
  badge: "New"
---

ACSS provides named easing curve CSS variables for consistent animation timing across your site. These presets are optimized for common UI animation patterns.

## Available Presets

| Variable | Value | Best For |
|----------|-------|----------|
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | General UI transitions |
| `--ease-snappy` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll animations, reveals |
| `--ease-gentle` | `cubic-bezier(0.65, 0, 0.35, 1)` | Position changes, sliders |
| `--ease-bouncy` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful micro-interactions |

## Preset Details

### --ease-smooth

The standard easing for most UI transitions. Starts slightly fast, decelerates smoothly.

**Use for:**
- Hover effects
- Menu opens/closes
- Modal transitions
- General state changes

```css
.button {
  transition: background-color 0.2s var(--ease-smooth);
}
```

### --ease-snappy

Fast start with a gentle stop. Creates a responsive, dynamic feel.

**Use for:**
- Scroll-triggered animations
- Dropdown reveals
- Content appearing on screen
- Toast notifications

```css
.dropdown {
  transition: opacity 0.3s var(--ease-snappy), 
              transform 0.3s var(--ease-snappy);
}
```

### --ease-gentle

Symmetrical acceleration and deceleration. Equal ease-in and ease-out.

**Use for:**
- Elements moving from A to B
- Carousels and sliders
- Tab content transitions
- Loading skeleton pulses

```css
.slider-item {
  transition: transform 0.5s var(--ease-gentle);
}
```

### --ease-bouncy

Overshoots the target slightly before settling. Use sparingly for playful interactions.

**Use for:**
- Notification badges
- Fun button interactions
- Celebratory animations
- Attention-grabbing elements

```css
.notification-badge {
  transition: transform 0.4s var(--ease-bouncy);
}

.notification-badge:hover {
  transform: scale(1.1);
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
  box-shadow: var(--shadow-lg);
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

ACSS effects use these presets by default. Override when needed:

```css
.custom-hover {
  --hover-timing: var(--ease-bouncy);
}

.custom-visible {
  --visible-timing: var(--ease-gentle);
}
```

## Customization

Override preset values in the dashboard or with CSS:

```css
:root {
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

## Visual Reference

Each easing curve has a distinct motion character:

- **Smooth**: Gradual slowdown → Professional, expected
- **Snappy**: Quick start, slow end → Dynamic, responsive  
- **Gentle**: Symmetric curve → Balanced, calm
- **Bouncy**: Overshoot effect → Playful, energetic

## Best Practices

1. **Be consistent**: Use the same easing for related animations
2. **Match the action**: Bouncy for fun, smooth for professional
3. **Consider duration**: Bouncy works better with longer durations (0.3s+)
4. **Test on slow-mo**: Use browser dev tools to slow down and refine
5. **Less is more**: Stick to 1-2 presets per interface area
