---
title: Visibility Classes
sidebar_position: 100
---

Visibility classes allow you to quickly control the [visibility property](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) of an element.

There are only two options, `.visibility--hidden` and `.visibility--visible`, but these classes are also available at each breakpoint using the syntax `.visibility--[breakpoint]-[value]`.

Remember that “hidden” visibility and “display none” are not the same thing. Display none will remove the element from the flow of the document, where hiding visibility will keep the element in the document flow, but just make it invisible.

Lastly, you should be aware of the [hidden-accessible](https://automaticcss.com/docs/hidden-accessible-class/) class for hiding elements for accessibility purposes. This is a very handy class within the visibility category.
