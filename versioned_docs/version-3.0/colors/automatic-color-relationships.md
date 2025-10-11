---
title: Automatic Color Relationships
sidebar_position: 50
---

The establishment of proper contrast between foreground and background elements is important in web design, and can be made automatic in ACSS with our unique Automatic Color Relationships feature.

Auto Color Relationships allow users to assign foreground styles to headings, text, links, and buttons in relationship with [contextual background classes](background-text-assignments.md) as well as [textures and overlays](../textures-overlays/). Once this feature is setup, the use of a utility class like `.bg--ultra-dark` will not only set the background to the ultra-dark color, but it will automatically flip the foreground elements to their preferred values as well.

This video will give you additional context and an example of how this feature works:

[ACSS 101.07.P2: Background & Text Color (Contextual Approach + Auto Color Relationships) - YouTube](https://www.youtube.com/watch?v=xhFOgOBV774&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

## Setting up Auto Color Relationships

First, you need to make sure the feature is turned on by navigating to Backgrounds & Text > Options. Flip the switch to turn on Automatic Color Relationships.

![Auto Color Relationships Option](img/auto-color-relationships-option.webp)

Auto Color Relationships Option

Once this feature is on, two new panels will appear: **Light Relationships** and **Dark Relationships**.

## Configuring Relationships

Ultra Dark Relationships Panel

Open one of the relationships panels and choose a relationship to configure. You’ll see inputs for Text Color, Heading Color, Link Color, and Button Style.

If the panel says “Ultra Dark,” it means you’re configuring the foreground elements for an ultra-dark background. In this case, you would use lighter colors or anything that creates sufficient contrast.

Use any ACSS color variables in these inputs to configure the relationships. If you want something to retain its default color, like links, you can simply leave the input blank.

For “Button Style,” simply use the name of the style, e.g. “primary,” “secondary,” etc. If you want to swap the style to the outline style, just attach `.btn--outline` to the name of the style, like this: `primary.btn--outline`.

## How to Use the Feature in Your Workflow

To see your color relationships in action, just add one of the contextual background classes (example: `.bg--ultra-dark`) to any group of elements. The foreground elements will change immediately.

Please note that auto relationships won’t work when using the variable version of these utilities. For example:

```CSS
.my-hero {
    background: var(--bg-ultra-dark);
}
```

The above example will not trigger the auto relationship because variables in CSS are simply a token that stores a value. They don’t have any power beyond that to influence other elements and elements can’t be targeted based on the existence of a specific variable.

For this reason, you must use the appropriate utility class to trigger the relationships. This is fine, since changing background color is a very popular and extremely appropriate use of a utility class.

## Frequently Asked Questions & Caveats

Can I override the heading or text style with a custom class?

Yes. Auto color relationships provide a new starting point for the styling. If you need to override a relationship within a single instance, you can do this with a custom class.

How can I have two different color buttons since auto relationship overrides button styling?

It’s uncommon to need two different button colors next to each other, so the first thing you should do is re-assess the design decision and make sure you’re following best practices. If you do, in fact, need two different button colors next to each other, the easiest way to do this is to add a custom BEM class to the button you want to override and then use the [btn() mixin](../mixins/button-mixins.md) within the custom SCSS area of ACSS, like this:

```CSS
.button-you-want-to-override {
    @include btn(secondary);
}
```

Assuming the auto relationship was set to display your primary button, this would allow you to switch one of them to secondary.

You could also do this programmatically by targeting, for example, any second button with an ACSS button class using the new `nth-of-class` syntax.

```CSS
.bg--ultra-dark :nth-child(2 of [class*="btn--"]) {
    @include btn(secondary);
}
```

The above example would target any second instance of a button that exists inside of .bg–ultra-dark and has a class containing `.btn--` (ACSS buttons), and change its style automatically.
