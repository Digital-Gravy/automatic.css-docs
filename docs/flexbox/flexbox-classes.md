---
title: Flexbox Classes
sidebar_position: 100
---

ACSS users have a full range of utility classes for [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) properties, along with shortcut [centering classes](https://automaticcss.com/docs/centering-classes/) that also use Flexbox.

If you’re not familiar with Flexbox, it’s going to be tough to use these classes effectively. I’d recommend watching this Flexbox video as a pre-requisite:

[PB101: L10 - Content Justification & Alignment with Flexbox - YouTube](https://www.youtube.com/watch?v=k46Cft746IM&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

How Flexbox Works

## Setting Display to Flex

ACSS uses a shortcut approach to establishing a Flexbox layout. The classes that set the display property to flex also set the desired alignment, so only one utility class is required for the first step.

The syntax for these classes is `.flex--[direction]` and all breakpoint classes use the `.flex--[direction]-[breakpoint]` syntax.

`.flex--col`

`.flex--row`

`.flex--col-reverse`

`.flex--row-reverse`

## Available Alignment Options

Once `display` is set to `flex` and a direction is chosen, the rest of the classes manipulate alignment. They use the syntax `.[flex-property]--[value]`. If you already know the property names and values for Flexbox, you already know the names of the utilities in ACSS. There are no abbreviations to memorize (except for the “self” classes).

`.justify-content--`

Controls content justification using shorthand keywords: `start`, `end`, `center`, `between`, `around`, `stretch`.

`.align-content--`

Controls content alignment using shorthand keywords: `start`, `end`, `center`, `baseline`, `stretch`.

`.justify-items--`

Controls item justification using shorthand keywords: `start`, `end`, `center`, `stretch`.

`.align-items--`

Controls item alignment using shorthand keywords: `start`, `end`, `center`, `baseline`, `stretch`.

`.self--`

Controls the position of individual elements in a flex layout by assigning the class to the element itself using shorthand keywords: `start`, `end`, `center`, `stretch`.

All utilities are available at all breakpoints using the syntax `.[flex-property]--[value]-[breakpoint]`.
