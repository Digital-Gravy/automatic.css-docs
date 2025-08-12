---
title: Buttons & Links
sidebar_position: 20
---

Buttons and links are used on nearly every page of a website, so it’s important to set default styles for them. This is easy to do in the ACSS dashboard. Just navigate to the “Buttons & Links” tab.

## Default Button Styling

![ACSS Global Button Styling Options](https://automaticcss.com/wp-content/uploads/CleanShot-2024-05-29-at-15.42.41@2x-scaled.jpg)

ACSS Global Button Styling

Default button styles apply to ALL buttons, regardless of color.

Sharing styles across button types ensures that all your buttons will be visually consistent concerning these default characteristics.

### Main Button Styling

- **Button Padding:** Set the top/bottom padding (Y) and left/right padding (X) for buttons. “Em” is the preferred unit here as it will cause the padding to scale up or down according to your button text size.
- **Minimum Button Width:** Sets a minimum width for all buttons. While buttons can still get wider according to their text, they’ll never be narrower than this value. Do not set this value too high; it can cause horizontal scroll/overflow issues on mobile devices.

### Button Text Styling

- **Line Height:** Changes the line height of text on buttons. “1” is the widely accepted standard.
- **Letter Spacing:** Changes the letter spacing of button text.
- **Font Weight:** Changes the font-weight of all button text.
- **Font Style:** Changes the font style of all button text.
- **Text Transform:** Changes the transform value of all button text.
- **Text Decoration:** Changes the text decoration of all button text.
- **Text Decoration on Hover**: Changes the text decoration of all button text on hover.
- **Custom Button Text Size:** Turn this on and then set a min/max value if you want the default button text to be something other than the “M” text size.

### Button Border Styling

- **Button Border Width:** Set the border width of your buttons. You won’t see the border if your border color is the same color as your button.
- **Button Border Style:**
- **Outline Button Border Width:** Set the border width of your outline buttons (.btn–outline). Ideally, this value will match your other button border size value. This ensures that all buttons are the same height when placed side by side.
- **Button Radius**:  Set the border radius for all buttons. By default, buttons use your [website’s global border-radius](https://automaticcss.com/docs/global-border-system/).

### Button Transition Styling

- **Use Global Transition (Default)**: Use your website’s [global transition style](https://automaticcss.com/docs/transition/) for buttons.
- **Transition**: If you opt out of using the website’s global transition style you can set a manual transition style.

**Radius Note:** Using `.rounded` classes or radius variables on your buttons are not advisable because this reduces global control. It’s best to set your button radius here in the ACSS dashboard so that all your buttons inherit this default radius and no additional classes or variables are necessary.

## Available Buttons

Button styles in both solid and outline variants are available for all _active_ colors in ACSS. Thus, there are 36 total button styles (18 solid and 18 outline buttons) if all colors are enabled.

1.  Primary
    - Primary Light
    - Primary Dark
2.  Secondary
    - Secondary Light
    - Secondary Dark
3.  Tertiary
    - Tertiary Light
    - Tertiary Dark
4.  Accent
    - Accent Light
    - Accent Dark
5.  Base
    - Base Light
    - Base Dark
6.  Neutral
    - Neutral Light
    - Neutral Dark

It should be noted that button styling will not load for colors that are turned off in the Palette area, nor will you see options for them in the dashboard.

You can also deactivate any button group you don’t intend to use, even if you use that color group for other things. This will reduce the size of the framework.

To deactivate button styles, navigate to “Options” in the buttons panel and then choose the style you want to modify:

ACSS Button Style Toggles

You can choose whether or not to load solid, outline, and light/dark variants.

## Overriding the Style of Certain Buttons

Each button group has its own customization area in the ACSS dashboard. Here’s an example of the Primary button overrides panel:

Primary Button Styling in ACSS

This panel allows you to adjust the following for each button style:

- Background color
- Background color on hover
- Text color
- Text color on hover
- Border color
- Border color on hover
- Focus color

We recommend always using color variables to maintain consistency within the system and to maintain compatibility with color scheme features.

## Overriding Buttons in Specific Contexts

ACSS buttons use locally scoped variables (tokens), making them easy to override. You can override an individual button on a page, buttons in a specific section, or buttons across an entire page without affecting other buttons of the same type.

To override a button or group of buttons, use a selector to identify them and then redefine the value of its tokens.

For example, let’s say you wanted to override the padding, font weight, background color, and hover background color of a single action button on a single page of your site. Just override the variables you want to override at the ID level:

`#btn123 {   --btn-padding-block: 2em;  --btn-padding-inline: 4em;  --btn-font-weight: 900;  --btn-background: var(--action-dark);  --btn-background-hover: var(--action-ultra-dark); }`
Code language: CSS (css)

Want to make this change across an entire page? You can add a body class (a class on the body element) to the page to affect all action buttons:

`body.custom .btn--action {   --btn-padding-block: 2em;  --btn-padding-inline: 4em;  --btn-font-weight: 900;  --btn-background: var(--action-dark);  --btn-background-hover: var(--action-ultra-dark); }`
Code language: CSS (css)

Now you’ve changed the style of all buttons on a page without affecting any other page of the site.

### Available Button Variables

Please reference our [button variables documentation](https://automaticcss.com/docs/button-variables/) for a full list of available button variables.

## Creating Custom Buttons

ACSS is designed to cover the basics regarding buttons, which will work for most websites. Create a custom button class if your design requires a super fancy button.

By using ACSS button class syntax (`.btn--`) all global styles will automatically apply to your new custom button.

All you have to do at that point is define values for each styling variable for that new button. You should do this on your new button class with custom CSS. It’s easiest to use a button recipe for this.
