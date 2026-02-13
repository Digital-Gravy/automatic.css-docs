---
title: Hover Effects
sidebar_position: 5
sidebar_custom_props:
  badge: "New"
---

Hover effects add visual feedback when users interact with elements. ACSS provides several categories of hover effects, all using the `.on-hover--*` prefix.

## Transform Effects

Scale and translate elements on hover using modern individual transform properties.

| Class | Effect |
|-------|--------|
| `.on-hover--grow` | Scales the element up |
| `.on-hover--shrink` | Scales the element down |
| `.on-hover--float` | Translates the element up |
| `.on-hover--sink` | Translates the element down |
| `.on-hover--forward` | Translates the element right |
| `.on-hover--backward` | Translates the element left |

### Example

```html
<div class="card on-hover--grow on-hover--shadow">
  Hover me to grow and show shadow
</div>
```

### Customization

Configure transform amounts in the dashboard or override with local CSS variables:

```css
.my-element {
  --hover-grow-amount: 1.15;    /* Scale to 115% */
  --hover-float-amount: -12px;  /* Float 12px up */
}
```

## Shadow Effects

Add depth and visual feedback with shadow effects on hover.

| Class | Effect |
|-------|--------|
| `.on-hover--shadow` | Adds a drop shadow |
| `.on-hover--glow` | Adds a colored glow |

### Shadow

A subtle drop shadow that adds depth:

```html
<button class="btn on-hover--shadow">
  Hover for shadow
</button>
```

Customize the shadow value:

```css
.my-element {
  --hover-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}
```

### Glow

A colored glow effect, perfect for call-to-action elements:

```html
<button class="btn on-hover--glow">
  Hover for glow
</button>
```

Customize the glow:

```css
.my-element {
  --hover-glow-color: var(--accent);
  --hover-glow-spread: 30px;
  --hover-glow-opacity: 0.5;
}
```

## Filter Effects

| Class | Effect |
|-------|--------|
| `.on-hover--brighten` | Increases brightness |

Great for image galleries and thumbnails:

```html
<img src="photo.jpg" class="on-hover--brighten" alt="Photo">
```

## Opacity Effects

| Class | Effect |
|-------|--------|
| `.on-hover--fade` | Reduces opacity to 80% |

Useful for subtle hover feedback:

```html
<a href="#" class="on-hover--fade">Hover to fade</a>
```

## Border Effects

Animated border and underline effects for buttons, links, and interactive elements.

### Ripple Effects

| Class | Effect |
|-------|--------|
| `.on-hover--ripple-out` | Border ripples outward |
| `.on-hover--ripple-in` | Border ripples inward |

```html
<button class="btn on-hover--ripple-out">
  Ripple Out
</button>
```

### Outline Effects

| Class | Effect |
|-------|--------|
| `.on-hover--outline-out` | Outline moves outward |
| `.on-hover--outline-in` | Outline moves inward |

```html
<button class="btn on-hover--outline-out">
  Outline Out
</button>
```

### Underline Effects

| Class | Effect |
|-------|--------|
| `.on-hover--underline-left` | Underline animates from left |
| `.on-hover--underline-center` | Underline animates from center |
| `.on-hover--underline-right` | Underline animates from right |

```html
<a href="#" class="on-hover--underline-center">
  Hover for underline
</a>
```

### Border Effect Customization

Configure border effects in the dashboard or with CSS variables:

```css
.my-element {
  --border-effect-color: var(--primary);
  --border-effect-width: 2px;
  --border-effect-duration: 0.4s;
}
```

## Global Hover Settings

All hover effects share common timing settings:

| Variable | Default | Description |
|----------|---------|-------------|
| `--hover-duration` | `var(--transition-duration, 0.3s)` | Animation duration |
| `--hover-timing` | `var(--transition-timing, ease-in-out)` | Easing function |

Override globally or per-element:

```css
.quick-hover {
  --hover-duration: 0.15s;
  --hover-timing: var(--ease-snappy);
}
```

## Combining Effects

Hover effects can be combined for richer interactions:

```html
<div class="card on-hover--grow on-hover--shadow on-hover--glow">
  Multiple hover effects combined
</div>
```

Each effect's transition property is handled independently, ensuring smooth composite animations.
