---
title: Centering Classes
sidebar_position: 100
---

Centering classes are shortcut classes that allow you to center content quickly and easily and control the alignment of that content across all device sizes. It works by using Flex centering properties in combination with text-alignment properties.

Options are:

- `.center--all`
  Centers everything across both the block and inline axis.
- `.center--left`
  Centers content on the block axis while maintaining left alignment. If the box isn’t big enough for the content to move vertically, you won’t notice any change.
- `.center--right`
  Centers content on the block axis while maintaining right alignment. If the box isn’t big enough for the content to move vertically, you won’t notice any change.
- `.center--top`
  Centers content on the inline axis while maintaining top alignment.
- `.center--bottom`
  Centers content on the inline axis while maintaining bottom alignment.

Breakpoint classes use a `.center--[direction]-[breakpoint]` syntax and are available for all active breakpoints.

The most common combination of centering classes is `.center--all` and `.center--left-[breakpoint]`. This would center everything on desktop and align everything back to the left at the desired breakpoint.
