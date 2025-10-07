---
title: Fluid Text
sidebar_position: 100
---

Automatic.css’s typography system controls the font size of text across your site.

**All text sizes are automatically responsive,** and unlike with other frameworks, **text sizes in Automatic.css follow a perfect mathematical scale.**

## **Root Font Size**

The first setting in the Typography tab is for Root Font Size. It’s essential to set the root font size as a percentage for maximum accessibility.

![Typography Panel for Root Font Size](img/fluid-heading-setup.webp)

Typography Panel for Root Font Size

The most common root font sizes are **100%** and **62.5%**.

In Automatic.css, the default is 100% because that’s the typical standard. 62.5% makes it easier to calculate rem values (1rem = 10px), but ACSS has [Auto Rem Conversion](https://automaticcss.com/docs/prem/) to help with that, so setting root font size to 62.5% is not necessary.

## Fluid Text Setup

Next, you’re asked to set your base font size for fluid text.

The “base” font size serves two purposes:

1.  It sets the default size of paragraph text on desktop.
2.  It sets the starting point for the mathematical typography scale (for other sizes)

\_While these values are stated in pixel units, they’re converted to rem on the back end. Automatic.css uses rem, em, and dynamic units exclusively.\_The “S” and “XS” sizes are scaled \*down\* from the “M” size while all the other sizes are scaled up.

## Fluid Text Scale

The second most crucial thing to customize within Automatic.css is the typography scale. This scale controls the degree of variance between text sizes.

You can choose from popular typography scales or set your own scale manually.

It’s common to want to use a tighter scale on mobile devices than on desktop since mobile devices don’t have enough room to fit more extreme scales, so Automatic.css lets you set the desktop and mobile scales independently.

If you don’t want the scale to change between devices, make the Typography Scale and Mobile Typography Scale equal (double-check that the scale you’ve chosen works well on all devices).

Note: To generate a hierarchy, the scale values must be greater than 1.

## Text Size Overrides

You can manually override text sizes in Automatic.css. When you override a size, you’re effectively removing it from the mathematical scale. No sizes above or below the size you’ve overridden will be **affected.**

Font Size Override

To override a size, input a value into the min and max field. The min field controls the bottom end of the fluid range. The max field controls the top (desktop) end of the range. These values are plugged into the clamp() and calc() functions to ensure these custom sizes are automatically responsive.

## How do I dial in the proper font sizes?

The primary values controlling font sizes in Automatic are the base values and the scale values.

The Base sizes allow you to adjust ALL SIZES EVENLY.

The Scales allow you to adjust the VARIANCE between sizes (larger scales create a larger variance, and smaller scales create more minor variance).

## Can I create custom font sizes?

Yes, you can quickly and easily create additional custom font sizes using the [fluid() function](https://automaticcss.com/docs/fluid-function/).
