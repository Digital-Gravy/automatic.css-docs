---
title: ACSS & Breakdance Setup
sidebar_position: 30
---

Using Automatic.css with [Breakdance](https://geni.us/zbsUtcp) is easy.

1.  Install Breakdance. It’s important that Breakdance is installed prior to installing Automatic.css.
2.  Install the Automatic.css.
3.  Configure your desired settings in Automatic.css.

Breakdance doesn’t load any intrusive global styles by default, so there’s nothing else to do. You are free to start using ACSS features inside of Breakdance. In fact, we recommend not setting any global styles in the global settings area in Breakdance — Automatic.css already sets all of the global styles you need.

## Builder Notes

Please be aware of the following idiosyncracies related to Breakdance:

### Sections & Section Padding

Breakdance uses a different [section structure than recommended](https://geary.co/section-structure/) and doesn’t provide users access to the inner wrapper. For this reason, you’ll need a slight shift in how you manage section padding.

The normal padding input fields won’t work for changing section padding because these inputs are linked to the inaccessible inner wrapper. ACSS puts padding in the actual section element where it’s supposed to be, so to change section padding in Breakdance you’ll need to use one of two methods:

1.  Use `.pad-section--` [utility classes](../spacing/section-padding-classes.md).
2.  Use the padding inputs attached to the section wrapper element in Breakdance.

Here’s a look at the wrapper inputs you’ll want to use:

![Editing section padding in Breakdance](img/breakdance-section-padding-1024x698.webp)
