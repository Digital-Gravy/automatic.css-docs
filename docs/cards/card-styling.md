---
title: Card Styling
sidebar_position: 10
---

The Card Framework provides centralized control over card styling. Configure your defaults once, and they apply to all targeted cards automatically.

## Enabling the Card Framework

The Card Framework is turned off by default, though we _highly recommend_ you turn it on. Navigate to **Cards** from the main dashboard and toggle the framework on.

![Card Framework Panel](img/card-framework-panel.png)

Once enabled, you'll need to [specify which cards to target](card-targeting.md) and optionally configure the [default color scheme](card-color-scheme.md).

## How Styling Works

ACSS uses tokens for all card styling, prefixed with "card." You set defaults from the dashboard, then override on a per-class basis as needed.

For example:
- Padding is applied with `var(--card-padding)`
- Gap is applied with `var(--card-gap)`
- Radius is applied with `var(--card-radius)`

This is all done automatically—you never have to manually apply these to your cards.

## Styling Options

Configure your default styling in **Cards > Card Styling > Styling Options**:

### Background & Foreground

- **Background** – Card background color or value
- **Heading Color** – Color for card headings
- **Text Color** – Default text color inside cards

### Spacing

- **Card Padding** – Main padding value for card content
- **Card Content Gap** – The gap between content inside cards

### Typography

- **Heading Size** – Size of headings (h1-h6) inside cards
- **Text Size** – Default size of text inside cards

### Borders

- **Concentric Radius** – Use concentric math to improve radius UI of cards with boxed icons, media, avatars, etc.
- **Border Width** – Thickness of the card border
- **Border Style** – Style of the card border (solid, dashed, etc.)
- **Border Color** – Color of the card border
- **Border Radius** – Radius of the card corners (hidden when Concentric Radius is on)

### Buttons & Links

- **Link Color / Link Hover** – Link colors inside cards
- **Button Style** – Which button style to use for buttons inside cards
- **Button Text Size** – Size of button text inside cards

### Icons

Icons must use the `[data-icon]` data attribute to be styled by the card framework.

- **Icon Size** – Size of icons
- **Icon Color** – Color of icons
- **Use Boxed Icon Style** – Enable padding, border, and background for icons

When Boxed Icon Style is enabled:

- **Icon Padding** – Padding around the icon
- **Icon Border Width/Style/Color** – Border properties for the icon box
- **Icon Radius** – Corner radius of the icon box
- **Icon Background** – Background color of the icon box

### Avatars

Avatars are targeted with `__avatar` in the class name.

- **Avatar Size** – Size of the avatar
- **Border Width/Style/Color** – Border properties for avatars
- **Radius** – Corner radius (use `50vw` for a circle)
- **Aspect Ratio** – Aspect ratio of avatars (use `1` for circles)

### Media

Media elements are targeted with `__media` in the class name.

- **Radius** – Corner radius of media elements
- **Aspect Ratio** – Aspect ratio of media
- **Object Fit** – How media fills its container

### Shadows

- **Card Shadow** – Box shadow for cards (e.g., `var(--box-shadow-md)`)

## More Options

### Display Grid

By default, cards use `display: flex` with `flex-direction: column`. You can enable **Default Cards to Display Grid** in Card Options to use CSS Grid instead.

## Overriding Styles Per Card

Override framework defaults on specific cards by redefining the tokens:

```css
.pricing-card {
    --card-padding: var(--space-l);
    --card-heading-size: var(--h2);
    --card-radius: var(--radius-l);
}
```

You can also remove default styling and apply tokens elsewhere:

```css
.article-card {
    padding: 0;
    gap: 0;
}

.article-card__content-wrapper {
    padding: var(--card-padding);
    gap: var(--card-gap);
}
```

## Card Variables Reference

The following variables are available for use in your custom styles:

- `--card-padding`
- `--card-gap`
- `--card-radius`
- `--card-border-width`
- `--card-border-style`
- `--card-border-color`
- `--card-background`
- `--card-heading-size`
- `--card-heading-color`
- `--card-text-size`
- `--card-text-color`
- `--card-link-color`
- `--card-link-color-hover`
- `--card-button-font-size`
- `--card-icon-size`
- `--card-icon-color`
- `--card-avatar-size`
- `--card-avatar-radius`
- `--card-media-radius`
- `--card-media-aspect-ratio`
- `--card-shadow`

## Changes From 3.x

In ACSS 4.0:

- Icons must use the `[data-icon]` data attribute for card framework styling
- Added boxed icon styling options
- Added display grid option for cards
- Added shadow control for cards
