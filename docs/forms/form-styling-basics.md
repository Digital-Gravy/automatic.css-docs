---
title: Form Styling Basics
sidebar_position: 100
---

ACSS provides comprehensive form styling for WS Form. To get started, make sure Load Forms is turned on in the Forms screen of the ACSS dashboard:

![](img/load-forms.webp)

Load Forms Setting

Once activated, all form styling is automatically applied using a unified configuration system.

## The Premise of Form Styling

Most projects maintain consistent form styles throughout their site. In ACSS, all forms share the same structural and spacing values defined in a single configuration.

Beyond spacing, you have complete control over form colors and appearance. Forms automatically adapt to your site's color scheme—when you switch between light and dark modes, forms intelligently adjust their colors without requiring separate style definitions. This is achieved through CSS's native `light-dark()` function, which respects your site's `color-scheme` setting.

## Automatic Color Adaptation

Forms automatically adapt based on your site's configured `color-scheme` setting. When you switch between light and dark modes, forms intelligently adjust their colors through CSS's native `light-dark()` function, without requiring separate style definitions or manual configuration.

## Styling Forms (Optional Utility Classes)

While forms are styled automatically, ACSS provides optional utility classes for more explicit control if needed. Your options are `.form--light` and `.form--dark`.

These classes can be placed on the form element (or a parent container) in the builder to explicitly set a light or dark appearance, overriding the automatic color-scheme detection. In most cases, however, relying on automatic adaptation is recommended for a seamless experience.

Simply apply `.form--light` or `.form--dark` directly to your form element, and the styles will adapt accordingly. You can then fine-tune your styles further using live preview in the ACSS dashboard.

## Floating Label Background

:::info Version
This setting was introduced in ACSS 4.0.1.
:::

When a WS Form field uses the **Inside** label position, the label moves onto the field's top border as soon as the field is focused or filled. **Floating Label Background** sets the background behind that floated label, so the border does not show through it.

You find it in the ACSS dashboard under **Form Styling → Label → Label Colors**. The default is `--white`. Change it when your fields sit on a background other than white, for example a dark section or a translucent field background, so the floated label blends in with the surface behind the field.

The **Background Color** setting next to it only applies to the label in its resting position.

## Supported Forms

ACSS form styling is currently compatible with **WS Form**.

## Important Note about WS Form

**The Styler must be enabled** for ACSS form styling to function properly, as our framework relies on WS Form's CSS variables exposed by the Styler.

If you encounter styling issues, ensure you've saved your settings by clicking **Save** in the WS Form settings page to regenerate any necessary system files.
