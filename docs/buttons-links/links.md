---
title: Link Styling
sidebar_position: 60
---

Aside from default button styling, setting default link styling for your site is important.

![ACSS Link Styling Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-13-at-13.27.43@2x-1024x768.jpg)

ACSS Link Styling Panel

This panel controls the default styling of all\* text links across your site.

**Note:** Link color and styling can still be changed granularly using `.link--{color}` classes.

## Link Decoration Color & Link Utilities

In some cases, you may want your global link decoration color to take precedence at all times. In other cases, you might want your link decoration color to match the color of the link.

If you want your link utility classes to color your link decoration the same as the link color, enable the “Sync Link & Decoration Color (Link Classes)” option.

Link Decoration Option

## Link Style Exclusions

Since default link styling is broad, you often want to exclude areas from receiving the default link styles. Headers and footers are common areas where you may not want default styles influencing your links.

If you need to exclude certain areas of your site from receiving default link styling, turn on the “Add Link Default Exclusions” feature in the dashboard.

ACSS Link Style Exclusions Panel

When this feature is on, a `textarea` will appear, allowing you to define rules for the exclusion.

An example would be `header a`, which will exclude all links in your header. You can also do `footer a` to exclude all links in your footer.

This input accepts multiple rules as long as you separate them by comma.

**Note:** Wrap the entire statement in quotes to ensure that everything is parsed properly and applied to the `:not` correctly.
