---
title: External Link Indication
sidebar_position: 90
---

There’s a big debate on whether it’s acceptable to open external links in a new tab. Accessibility advocates tend to argue that they shouldn’t be used, while UX advocates and most users feel that opening external links in a new tab is preferred.

For the record, we side with UX advocates and users who prefer that external links open in a new tab as long as the process is executed properly.

How do you execute it properly?

- There should be a visual cue that the link will open in a new tab.
- There should be an auditory cue for screen readers that the link will open in a new tab.
- Only links to other domains should be opened in a new tab (never used for internal links).

ACSS lets you apply the visual and auditory cues automatically to any link that will open in a new tab or window with full control over each cue.

## Turning on External Link Indication

![Indicate External Links Setting in ACSS](img/indicate-external-links-930x1024.webp)

Indicate External Links Setting in ACSS

To activate this feature, navigate to Buttons and Links and then click on the links tab. Find the “External Links” accordion and then enable “Indicate External Links.”

## Customizing the Indicators

Both the visual and auditory indicators are customizable via the following controls:

Panel for customizing external link indicators

- **External Link Indicator:** Accepts any [HTML entity code](https://www.toptal.com/designers/htmlarrows/).
- **Indicator Position:** Should the indicator come before or after the link?
- **Indicator Gap:** Space between the link and indicator text.
- **Indicator Size:** Size of the indicator.
- **Indicator Alignment:** Vertical alignment of the indicator.
- **Indicator Color/Hover:** Color of the indicator on non-hover and hover.
- **Indicator Weight:** Thickness of the indicator.
- **Indicator Offset:** Y/X translation values for the indicator.

### Indicator Exclusions (Removing Indication Programmatically)

In some cases, you might want to exclude certain links, certain link contexts, links in certain areas, and so on. You can use the Indicator Exclusions feature for this.

By default, links that wrap images, figures, pictures, and SVGs are excluded via the :has() statement as long as those items are direct children of the link:

```CSS
:has(> img, > figure, > picture, > svg)
```

If there are other objects that you’re wrapping in a link where the indicator should not show up, you can simply add to the comma separated list within the `:has()` parenthesis.

If you want to exclude links by ID, Class, or some other selector context, you can add additional selectors after the has statement, as long as they’re comma separated:

```CSS
:has(> img, > figure, > picture, > svg), .exclude-this-link, #exclude-this-link
```

Any valid selector will work.

### Accessibility Text

The last thing you can customize is the auditory cue. By default, ACSS uses “Link to external site.” When a screen reader reads your link text, it’ll read this auditory cue immediately after so the user knows the link will open a new tab.

For example, if your link text is , “this article about Hummingbirds,” a screen reader will announce, “this article about Hummingbirds, link to external site.”

You are free to customize this default announcement cue. Also, don’t forget that you’re in full control of the aria-label for any individual link should you need a more precise announcement. Just use HTML or the builder to add your own aria-label whenever you’re creating the link.
