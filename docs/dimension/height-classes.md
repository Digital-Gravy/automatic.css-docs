---
title: Height Classes
sidebar_position: 60
---

Height classes in Automatic.css set a minimum height on any element they’re applied to. We use a minimum height instead of a fixed height as best practice to prevent overflow issues.

Heights are available from 20 to 100 and are represented in vh units (e.g. `.height--50` applies a minimum height of 50vh).

- `.height--20`
- `.height--30`
- `.height--40`
- `.height--50`
- `.height--60`
- `.height--70`
- `.height--80`
- `.height--90`
- `.height--100`

## Changing height at breakpoints

You can adjust the min-height at each breakpoint using our [breakpoint](../setup/website-width-breakpoints.md) height utilities. The convention is: `.height--[breakpoint]-[value]`.
