---
title: Clickable Parent
sidebar_position: 1
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

One of the most common accessibility mistakes in web design involves clickable cards and content groups.

When you wrap a card or group of content with a link, you physically contain multiple pieces of content within the link. This is inadvisable for two reasons:

1.  Nesting block content (images, headings, etc.) within inline elements (a link) is bad practice.
2.  Grouping more than one piece of announced content within a link creates poor accessibility.

When users with [assistive technology](https://www.understood.org/en/articles/assistive-technology-what-it-is-and-how-it-works) focus on your link, the assistive technology will do one of two things: It'll try to announce all announceable items, or it'll simply read out the hyperlink with no additional context. Both outcomes are confusing and annoying to users. Additionally, your link will have no technical or semantic meaning because it contains too many different items.

Here's a video that covers this topic in detail:

[Stop Making This BIG Mistake With Clickable Cards (Use "Clickable Parent" & "Focus Parent" Instead) - YouTube](https://www.youtube.com/watch?v=nM78am-FC9Q&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

## The Approach

You can't wrap a group of content in a link, but you still need the entire group of content to be clickable, right? To accomplish this, we need to add a link to the heading of the content group and then extend its clickable area to fill the entire card.

This is done using an absolutely positioned [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

ACSS provides utilities for easily doing this:

1.  `?clickable-parent` recipe (recommended for most users)
2.  `@include clickable-parent` mixin (for SCSS users)

## The Clickable Parent Mixin

If you're using SCSS and want to apply clickable parent to custom BEM classes, the mixin gives you full control.

Here's an example of the Clickable Parent mixin in use:

```CSS
.clickable-card {
    position: relative;
}
.clickable-card__heading a {
    @include clickable-parent;
}
```

Note: The mixin should be used on the actual `a` or `button` element.

Since we're using an absolutely positioned pseudo-element, the parent container must be set to `position: relative`. If you don't change the parent to position relative, the clickable area of the link will extend beyond the bounds of the content group and affect other elements on your page.

**Note:** Sometimes builders set certain elements to position relative. Anything that is position-relative is automatically elevated above the clickable area. This will break the clickable nature of your content group. It's essential to ensure that all elements within your clickable content group are set to position static (this is the default position so it's typically not necessary to do this manually).

## Focus Parent

It's common to want to combine the clickable-parent technique with another technique called focus-parent.

Where clickable parent extends the clickable area of a link to cover an entire parent element, [focus-parent](./focus-parent.md) alters the focus behavior of that parent element and its children.

In other words, the focus-parent technique also allows your entire clickable element to be focusable. This extends the same click and hover effects that clickable-parent provides to keyboard users.

[Learn about focus-parent](./focus-parent.md)

## Wrap-Up

95% of web designers fail to implement clickable content groups correctly. The result is poor link structure, semantic structure, and accessibility.

With ACSS, you can structure things properly in seconds with minimal effort. This is yet another example of how ACSS promotes best practices, [helps enhance accessibility](https://automaticcss.com/accessibility-features/), and helps you build better websites with less effort.

## Changes From 3.x

In ACSS 4.0, the `.clickable-parent` utility class has been removed in favor of the `?clickable-parent` recipe. This change was made to reduce stylesheet bloat and encourage the use of recipes, which are more flexible and maintainable.

**What changed:**
- The `.clickable-parent` utility class is no longer available
- Use the `?clickable-parent` recipe instead (recommended)
- The `@include clickable-parent` mixin remains available for SCSS users
