---
title: Typography Variables
sidebar_position: 100
---

All the typography properties you define in the ACSS dashboard are available as variables. This is extremely handy for two types of scenarios:

1.  When you want to **reference them** on an element they wouldn’t apply to by default (i.e. you want to make sure a specific page element uses the same font family as your headings)
2.  When you want to **override one of those properties** in a specific context (i.e. you want a specific page section to use a different heading style, while still being attached to the framework in all other aspects)

The following typography variables can be accessed or changed at any time with custom styling:

The font size variables correspond to ACSS’s global typography system [heading sizes](fluid-headings.md) and [text sizes](fluid-text.md):

- `--h1`
- `--h2`
- `--h3`
- `--h4`
- `--h5`
- `--h6`
- `--text-xxl`
- `--text-xl`
- `--text-l`
- `--text-m`
- `--text-s`
- `--text-xs`

The following variables are declared globally for all heading levels:

- `--heading-font-family` _(if declared in the dashboard settings)_
- `--heading-color` _(if declared in the dashboard settings)_
- `--heading-line-height` (available by default)
- `--heading-font-weight` (available by default)
- `--heading-font-style` _(if declared in the dashboard settings)_
- `--heading-letter-spacing` _(if declared in the dashboard settings)_
- `--heading-text-transform` _(if declared in the dashboard settings)_
- `--heading-text-wrap` (available by default)

If you choose to override your global heading properties on specific heading levels in the ACSS dashboard, the corresponding variables will be available.

Here are those variables for `h1`, **but the same logic applies to other heading levels**.

- `--h1-font-family` _(if declared in the dashboard settings)_
- `--h1-color` _(if declared in the dashboard settings)_
- `--h1-line-height` _(if declared in the dashboard settings)_
- `--h1-font-weight` _(if declared in the dashboard settings)_
- `--h1-font-style` _(if declared in the dashboard settings)_
- `--h1-letter-spacing` _(if declared in the dashboard settings)_
- `--h1-text-transform` _(if declared in the dashboard settings)_
- `--h1-max-width` (available by default)

Note: specific heading levels have a variable for the max-width property, which isn’t available globally.

The following variables are declared globally for text across the site:

- `--text-font-family` _(if declared in the dashboard settings)_
- `--text-color` _(if declared in the dashboard settings)_
- `--text-line-height` (available by default)
- `--text-font-weight` (available by default)
- `--text-font-style` _(if declared in the dashboard settings)_
- `--text-letter-spacing` _(if declared in the dashboard settings)_
- `--text-text-transform` _(if declared in the dashboard settings)_
- `--text-max-width` _(if declared in the dashboard settings)_
- `--text-text-wrap` (available by default)

If you choose to override your global text properties on specific text sizes in the ACSS dashboard, the corresponding variables will be available.

Here are those variables for the “XL” text size, **but the same logic applies to other text sizes**.

- `--text-xl-line-height` _(if declared in the dashboard settings)_
- `--text-xl-font-weight` _(if declared in the dashboard settings)_
- `--text-xl-font-style` _(if declared in the dashboard settings)_
- `--text-xl-letter-spacing` _(if declared in the dashboard settings)_
- `--text-xl-text-transform` _(if declared in the dashboard settings)_
- `--text-xl-max-width` (available by default)

## Examples of using typography variables

### Referencing a heading size

Let’s say we want to use a level 2 heading (`h2`), but with a font size only as tall as our regular level 4 headings (`h4`) — this happens in situations where semantic HTML and accessibility dictate we need to use an `h2`, but the design calls for a smaller size.

We could create a custom class, and reference the `--h2` variable as the font-size value:

```CSS
.my-special-heading {
    font-size: var(--h4);
}
```

Now apply that class on your `h2` heading, and you have a heading element that is only as tall as an `h4` heading, but keeps its semantic meaning.

This technique is demonstrated in the video dedicated to Typography in the [ACSS 101 course](https://youtube.com/playlist?list=PL72Ci-T5YC93yut2z1NZBVY1pBYy2osB8&si=TCC4Q9mlNBaC4mHT), starting at [11:59](https://www.youtube.com/watch?v=AMxvR3TaJ8g&list=PL72Ci-T5YC93yut2z1NZBVY1pBYy2osB8&index=4&t=719s):

[ACSS 101.03: Fluid Responsive, Scale-Based Typography - YouTube](https://www.youtube.com/watch?list=PL72Ci-T5YC93yut2z1NZBVY1pBYy2osB8&v=AMxvR3TaJ8g&embeds_referring_euri=https%3A%2F%2Fautomaticcss.com%2F)

### Referencing the headings font family

Let’s say we want to create a custom component that needs to use our headings font family despite not being a heading (this doesn’t happen in every project, but could come in handy).

While we _could_ reference our font family statically, that’s not always handy, and it‘s not very maintainable: what happens if we were to change typefaces in the future?
We’re not interested in the component using _this specific font_, we just want it to use what the headings typeface happens to be. It would be much better to be able to keep it **in sync** with the headings, rather than statically reference the font family.

Easy peasy, create a custom class, and reference the `--heading-font-family` variable as the font-family value:

```CSS
.my-custom-component {
    font-family: var(--heading-font-family);
}
```

### Creating a very custom heading style (advanced usage)

Let’s say we want to create a special heading style that needs to look extra fancy.

It will seldom be used on the site, just for a few special headings related to a extremely high-end offer our client wants to run. Think handwritten, luxurious, ever-so-slightly over the top.

To achieve that, we could create a class, and use the variables in multiple ways:

- We’re going to redefine some of our heading variables in the context of our class (to define a handwritten font family and other properties that won’t be used for headings elsewhere on the site).
- We’re also going to reference our `--h1` variable as the font size, to make sure those headings are always extremely noticeable.

By proceeding this way, we can create a completely custom heading style, while still being tied into the framework.

```CSS
.fancy-heading {
    --heading-font-family: "Birthstone", cursive;
    --heading-color: var(--accent);  /* see color palette documentation */
    --heading-letter-spacing: 0.0125em;
    --heading-line-height: calc(6px + 2ex);
    font-size: var(--h1);
}
```
