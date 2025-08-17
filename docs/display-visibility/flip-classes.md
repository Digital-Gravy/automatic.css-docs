---
title: Flip Classes
sidebar_position: 100
---

Flip classes allow you to flip an element across one or more axes.

In the example below, the first image is the default image and the second image is using `.flip--x` which flips it across the X axis.

Your options are:

- `.flip--x`
- `.flip--y`
- `.flip--xy` and `.flip--both`

This works on containers with background images as well, but when flipping a container that has written content, make sure the written content is in a child `div`. ACSS will flip this child `div` back automatically to ensure content is readable.
