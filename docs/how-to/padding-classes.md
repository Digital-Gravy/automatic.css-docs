---
title: Padding Classes
sidebar_position: 20
---

Padding is space that is added to the inside of a box in the [box-model](https://www.w3schools.com/css/css_boxmodel.asp#:~:text=In%20CSS%2C%20the%20term%20%22box,padding%2C%20and%20the%20actual%20content.) of web design. In ACSS, padding classes add symmetrical, responsive spacing to the inside of a container.

## Using Padding Classes

Sometimes boxes need padding and sometimes they don’t. Since there’s no way to predict which boxes need padding and which don’t, padding is not applied to divs and containers by default.

It’s up to you to decide where you need padding and when padding is required, you can easily add it with ACSS padding classes (but [BEM is often a better approach](https://youtu.be/FIctDYzsVbc?si=4GIKQHK7DUZAs2qm)).

The convention for adding padding classes is `.padding--{size}`, following the standard t-shirt sizing system (xs – xxl). You can also change a box’s padding at any breakpoint using the syntax, `.padding--{breakpoint}-{size}`.

## Why isn’t padding directional?

Some utility frameworks provide very granular padding classes so you can apply padding only to one side of an element/container. ACSS avoids this because these situations almost always call for [custom classes](https://youtu.be/tha_ynmZRaA) as a best practice.

Being a strict framework, ACSS doesn’t encourage using utility classes in situations where custom classes are far more appropriate. You should use Automatic’s [spacing variables](https://automaticcss.com/docs/spacing-variables/) in conjunction with custom classes in these situations instead.

## Can I create custom padding classes?

Yes, you can quickly and easily create custom padding classes using the [fluid() function](https://automaticcss.com/docs/fluid-function/). Or you can simply [use a `calc()`](https://automaticcss.com/docs/calc/).

Notice: Padding classes used to have an abbreviated syntax of `.pad--`. This was deprecated in favor of the non-abbreviated version. The old syntax is still available to be activated/deactivated from the “Deprecated” options panel in ACSS, but we recommend you stop using it. It should only be activated on old/existing websites that were already using it.
