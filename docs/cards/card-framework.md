---
title: Card Framework
sidebar_position: 10
---

The Automatic.css Card Framework is an innovative framework for managing card styling . It reduces the amount of work you have to do when building cards, ensures that card styling is extremely consistent, and improves the scalability and maintainability of your sites.

## Enabling the Card Framework

The Card Framework is turned off by default, though we _highly recommend_ you turn it on. To enable the framework, navigate to Cards from the main dashboard and then toggle the framework on.

[TODO! Updated Image Coming Soon]

## How the Framework Works

Once the framework is applied to a card (either manually or automatically), you’ll see default card styling and can start to manipulate that styling from the ACSS dashboard.

For example, you’ll see that the card has padding, border radius, a relative position, clipped overflow, and other similar default styles. These are all very helpful and consistent with the rest of the ACSS framework and are all controllable from the dashboard inputs.

ACSS uses tokens for all styling, which are all prefixed with the word “card.” You set your default styles from the dashboard and then are free to make any adjustments you need to make on a per-class basis.

For example, padding is applied with `var(--card-padding)`, gap is applied with `var(--card-gap)`, and radius is applied with `var(--card-radius)`. Remember, this is all done for you! You never have to do this manually.

The result is that all your cards (the ones you target, at least) share the same styling, even though they have completely different selector names. This is a massive advantage that removes a lot of style duplication and gives you far more global control than you'd normally have.

## Card Targeting

Cards won't automatically pick up the card framework styling. For cards to pick up the styling from the dashboard inputs, you need to use the Card Targeting area under "Card Options" to identify which cards should be controlled by the ACSS Card Framework.

[TODO! Updated Image Coming Soon]

Simply list the card selectors you want to target, separated by commas.

## Default Styling, Light Cards, and Dark Cards

Once you start building your first card, you’ll need to start adjusting the styling to suit the design you’re trying to achieve.

For most sites, your cards will either be primarily light or primarily dark and this usually coincides with your general site scheme. 

You can configure all your default styling in the Card Styling panel. The following options are available (make sure you read the details – some elements require specific class names to take effect):

- **Spacing**
  - **Card Padding** – Main padding value for card content. It’s applied automatically to the main card wrapper, but can be removed from there and used in any part of the card.
  - **Card Content Gap** – The gap between all content inside cards. Is applied automatically to the main card wrapper, but can be applied manually to internal wrappers as well.
- **Typography**
  - **Heading Size** – The size of the main heading of the card, which is identified by `**__heading**`.
  - **Text Size** – The default size of text inside your card.
- **Borders**
  - **Concentric Radius** – Optionally sets card radius using concentric math to improve the radius UI of cards with boxed icons, media, avatars, etc.
  - **Border Width** – The thickness of the card border (set to your global border width by default).
  - **Border Style** – The style of the card border (solid, dotted, etc.)
  - **Border Radius** – The radius of the card (set to your global radius by default).
- **Icons**
  Targeted with `__icon`
  - **Icon Size** – Size of the main icon in an icon card, as signified by.
  - **Icon Radius** – Radius of the main icon in an icon card.
- **Avatars** (Photo/Headshot, etc.)
  Targeted with `__avatar`
  - **Avatar Size** – Size of the main avatar in an avatar card.
  - **Border Width** – Border width for the main avatar.
  - **Border Style** – Style of the border on the main avatar.
  - **Radius** – Radius of the main avatar (use `50vw` for a perfect circle).
  - **Aspect Ratio** – Aspect ratio of the main avatar. Use `1` for circles.
- **Media** (Featured Image, Featured Video, etc.)
  Targeted with `__media`
  - **Radius** – Radius of the main media in a card
  - **Aspect Ratio** – Aspect ratio of the
  - **Object Fit**

## Light & Dark Cards & Color Scheme Support

[TODO! Updated Image Coming Soon]

The Card Framework uses the color-scheme property and your general color scheme settings for creating light/dark variants.

More to come...

## Creating Cards

The card workflow is simple – create cards as you normally do and simply follow the proper BEM conventions. Let the card framework apply its defaults and then override them where necessary.

If there’s a situation where you want to reference a card style in a place its not being applied automatically, use the Card Framework tokens.

For example, let’s say you want to remove the main padding and gap on your article cards and apply the card padding to the inner content wrapper instead. It would look like this:

```CSS
.article-card {
    padding: 0;
    gap: 0;
}

.article-card__content-wrapper {
    padding: var(--card-padding);
    gap: var(--card-gap);
}
```

This might seem like we’re undoing things the framework is doing, only to do them elsewhere. However, you’ll quickly realize that the styling decisions you have to make and properties you have to set are reduced by 80% to 90% when using the Card Framework. Not only that, but all your card styling is completely standardized and globally controllable.
