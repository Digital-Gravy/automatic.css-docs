---
title: “T-Shirt Sizes” for Enhanced Simplicity & Consistency
sidebar_position: 10
---

One of the “cons” of most CSS frameworks is that learning hundreds of utilities is time-consuming or impractical. Another “con” is having too many options for each utility. This is very true of frameworks that use abbreviated names, very granular utilities, and/or seemingly random values.

Automatic.css does not have this problem. While there are tons of utilities in the framework, users only have to learn one primary convention/syntax for sizing. Once you know the sizing syntax, you automatically know what your options are across all sizing utilities without having to refer to documentation or cheat sheets.

The syntax for sizing is what we call “t-shirt sizes.” Almost all non-contextual utilities that reference size values use the t-shirt sizing syntax with the options being: xs, s, m, l, xl, xxl. Here are some examples:

- `.margin--`
- `.gap--`
- `.pad--`
- `.width--`
- `.pad-section--`
- `.pad-header--`
- `.col-width--`
- `var(--space-)`
- `var(--width-)`

This doesn’t just make the framework easier to learn, it makes it easier to use and encourages greater consistency.

**Having _more_ options is positively correlated with more inconsistency across a site.** In other words, the more options you have to choose from, the more inconsistent your website will be. Or, users have to waste additional time referencing which values they used previously to do the next task correctly.

When you have fewer options, it’s easier and faster to use the same ones in the same situations. The use of contextual utilities like [contextual spacing](https://automaticcss.com/docs/contextual-spacing/) and [contextual colors](https://automaticcss.com/docs/semantic-colors/) makes this even easier and faster.

So, almost any time you’re using a utility that references a size, you’ll have the same t-shirt size options available to you. There’s nothing else to memorize or reference!
