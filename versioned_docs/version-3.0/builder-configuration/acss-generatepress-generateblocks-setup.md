---
title: ACSS & GeneratePress & GenerateBlocks Setup
sidebar_position: 50
---

## Generate Setup (GP & GB)

Welcome to the setup guide for GeneratePress (Premium) and GenerateBlocks (Pro). For a seamless experience, please make sure you’re using the Premium/Pro versions of both products.

Caution: While ACSS is compatible with Generate and its workflow, it’s not the best possible development experience. Among all the possible ACSS-compatible platforms, Generate is the clunkiest. We only recommend Generate if page building in the block editor is mandatory. Otherwise, your best option is [Etch](http://etchwp.com/) or [Bricks](http://bricksbuilder.io/). Etch writes all of your content to the block editor using native blocks so your data is still liberated, “close to core,” and easily editable in the block editor.

## Installation

1.  Install GeneratePress theme (free)
2.  Install GeneratePress Premium Plugin
3.  Install GenerateBlocks plugin (free)
4.  Install GenerateBlocks Pro plugin
5.  Install ACSS

## Customizer

Most of the GeneratePress setup happens in the WP Customizer. You can get to the Customizer by visiting the front end and choosing Customize from the wp-admin menu.

![](img/CleanShot-2025-01-15-at-09.25.35@2x-1024x576.webp)

Once the Customizer is open, follow these steps:

1.  Colors
    - Delete all global color swatches
    - Remove all default global styles by deleting the value of each swatch in each category.
2.  Layout > Container
    - Set the container width to your site’s content width. Unfortunately, this has to be a static value as Generate doesn’t allow a token value. Please tell their development team to improve this.
3.  General
    - Underline links > Never

## Full-Width Page Building

To use GeneratePress and GenerateBlocks for page building, you’ll want to choose some specific settings in both ACSS and the block editor.

### ACSS Settings

Make sure the following options are set in ACSS under **Options > Gutenberg**:

- Load Styles in Block Editor = On
- Use Block Editor for Page Building = On
- Generate Color Palette = On
- Replace Color Palette = On
- Class-First Workflow = On

### Block Editor Settings

When you open a page to start page building, you need to remove all the clutter that Generate adds. You can do this by selecting the following options:

- Sidebar Layout > No Sidebars
- Content Container > Full Width
- Disable Elements > Content Title

## Section Element in Generate

Generate does not have a `section` element. They unfortunately use a generic container element for everything. This means that sections have to be created by flipping a switch manually and adding and inner container manually.

Start by adding a container element to the page and click the icon to add an inner container:

Next, you can turn the outer container into a section element by choosing `section` from the Advanced > Tag Name in the sidebar:

Once you change the tag to `section`, you’ll see that ACSS automatically applies your default section padding.

## Adding Classes in Generate

There are two places to add classes in Generate: Gutenberg’s class input and Generate’s selector system.

The **Gutenberg “CSS Classes” input** is where you should place utility classes. If you right-click this input, you’ll see ACSS’ utility class context menu for easily finding, previewing, and adding utility classes.

The **Generate selector system** is where you should add your custom [BEM](https://youtu.be/tha_ynmZRaA?si=No2WYC7ZLtWC4n56) classes. You can then use ACSS tokens in the styling inputs attached to these classes. Right clicking a styling input will open ACSS’s token context menu for quickly adding tokens to inputs.

You can now build completely custom pages from scratch in Generate, powered by ACSS. Please review the [Gutenberg setup instructions](./acss-gutenberg-setup.md) for additional insights, since Generate is a Gutenberg-based builder.
