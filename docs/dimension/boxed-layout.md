---
title: Boxed Layout
sidebar_position: 90
---

Boxed layouts are an interesting alternative to the edge-to-edge layouts of many websites. While you don’t see them as often anymore, they’re bound to make a comeback in the future and they’re certainly not looked down upon when executed correctly.

You can see an example of a boxed layout in the photo below.

![Boxed Layout Example](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-20-at-09.02.44@2x-1024x617.jpg)

Boxed Layout Example

There are three ingredients to making a boxed layout:

1.  The `html` element of the website extends edge to edge and defines a “canvas” color or texture. In the example above, this is the black area.
2.  The `body` element of the website is set to a fixed width and is the true “background” and visual “container” of the website. This is where you see the 1px orange border in the example above.
3.  A content width is still defined at the container level to maintain proper content alignment within the overall structure and there’s still a gutter, the same as with any other website.

Automatic.css makes establishing a boxed layout, and styling your boxed layout, very easy.

## Boxed Layout Settings

Boxed Layout Settings

Navigate to Layout > Boxed Layout and enable the Boxed Layout toggle.

The following settings control your boxed layout. Read carefully because the accepted values aren’t completely obvious unless you’re a pro at CSS.

- **Device Background:** The canvas style behind your boxed layout, which extends edge-to-edge. This is a background shorthand property and accepts any valid background value including colors, gradients, and images.
- **Body Width:** The visual width of the contained boxed layout. Keep in mind that visitors will only see a boxed layout effect on devices _larger_ than this width.
- **Top Margin:** The space between your boxed layout and the top of the screen. This will effectively bump your site’s positioning in the canvas down from the top of the screen by the amount specified. Note: Due to the way web design works, a bottom margin is not possible on boxed layouts without completely changing the website’s structure.
- **Border Style:** You can optionally add a border to your boxed layout. This field accepts multiple values, allowing you to style each side independently. It uses the normal top, right, bottom, left value syntax.
- **Border Width:** Control the thickness of your border. Again, multiple values are possible. It uses the normal top, right, bottom, left value syntax.
- **Border Color:** Control the color of your border. Again, multiple values are possible. It uses the normal top, right, bottom, left value syntax.
- **Border Radius:** Control the radius of your boxed layout.
- **Body Shadow:** This is a box shadow added to the `body` element that creates a drop shadow effect behind your boxed layout. Accepts any valid `box-shadow` value including layered shadows.

When done well, boxed layouts can add visual interest and a sense of simplicity to your website. They also prevent many visual issues and alignment/layout issues that happen on very large screens since your content is effectively contained.
