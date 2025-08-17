---
title: Deprecated Features
sidebar_position: 100
---

It’s sometimes necessary to deprecate features and utilities in a CSS Framework. This is usually due to the following factors:

- Advancements in CSS make a feature/utility irrelevant or redundant.
- Improved methodologies are developed and replace previous methodologies.
- The removal of inconsistencies that weren’t initially identified.

While deprecation can sometimes be inconvenient, it’s necessary and beneficial.

Please note that our deprecation policy is very straightforward:

1.  Deprecated features are retained in the framework and can activated or deactivated at any time. They’re never removed completely.
2.  Deprecated features are never turned off on existing installs. If a feature is turned on prior to upgrading to a version where that feature is deprecated, the feature will remain on after upgrade.
3.  Frames and ACSS defaults never use deprecated features or utilities. They are replaced as soon as possible with current standards. If you find a Frame or default value using a deprecated item, please report it as a bug.

If a deprecated feature is turned off on upgrade after previously being on, this is not by design and should be reported to the team as a bug.

Here is the full list of deprecated features since the inception of ACSS in 2021:

## **Text Larger**

`.text--larger` was a utility class originally created as a way to provide “tweener” sizes for text. You could combine it with a standard text size class to create a slightly larger version.

This utility was eventually made redundant by the widespread support of variables and `calc()` expressions in page builders, SCSS support, easy access to global CSS, etc. When you can calc a variable or manually make a new utility from an existing utility, a class like `.text--larger` not only becomes redundant, but inefficient and undesirable.

## **Owl Spacing**

Owl Spacing (`.owl--{size}`) was a spacing technique based on the “Lobotomized Owl” CSS selector (`* + *`) that adds top margin to all adjacent siblings. It’s essentially a poor man’s gap technique which was extremely useful prior to widespread support of the gap property.

This set of utilities was deprecated to give preference to the gap property when gap reached 92%+ support for flex layouts. Not only is gap easier and cleaner, it’s more performant as it doesn’t require the use of universal selectors.

## **Abbreviated Padding Classes**

ACSS’ padding classes were originally abbreviated:

- `.pad--{size}`
- `.pad-section--{size}`
- `.pad-header--{size}`

In 2022 we decided to establish an anti-abbreviation policy. Abbreviations introduce confusion, create extra memorization requirements, and make it harder to guess utility names. The abbreviated utilites were replaced with:

- `.padding--{size}`
- `.section--{size}`
- `.header--{size}`

## **Deprecated Colors**

- **Shade**: Shade was a poor name for a main color that created confusion with the shade options of each color. It was deprecated and replaced with “Neutral” for better clarity.
- **Action**: Action was designed to be the obvious choice for action items (buttons and links). Unfortunately, it’s not a widely used color in standard design systems. During the development of ACSS 3.0 we decided to standardize the ACSS color system and bring it in better alignment with industry norms. With Action deprecated, Primary is now the typical color choice for buttons and links.

## **Deprecated Shades**

- **Medium**: The “medium” shade was contextually problematic because it lacked a meaningful name and was seemingly redundant with the main color value itself. What’s between ultra-dark, dark, light, and ultra-light? The main color. And medium? This was deprecated for a more sensical approach of ultra-dark, dark, semi-dark, main color, semi-light, light, ultra-light.
- **Comp**: A “complimentary” shade of each color was introduced in the original framework. The plan was to potentially expand on the generation of complimentary colors, but it was determined that this expansion was going to be unnecessary for the vast majority of users. Comp was deprecated in v3.0 due to low use and user confusion.

## **Deprecated Buttons**

- **Shade**: Deprecated with the deprecation of the Shade color.
- **Action**: Deprecated with the deprecation of the Action color.
- **White & Black**: White and Black buttons seem very useful and straightforward, but on sites where a neutral button needs to not be black or white, it’s problematic. We introduced a Neutral button with light and dark options to replace Black and White. Neutral-light allows you to have a white button or a light neutral button. Neutral-dark allows you to have a black button or a dark neutral button. And you can do whatever you want with the standard Neutral button.
