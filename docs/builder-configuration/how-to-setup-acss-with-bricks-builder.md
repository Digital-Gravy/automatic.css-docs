---
title: ACSS & Bricks Builder Setup
sidebar_position: 10
---

If you’re using Bricks Builder and Automatic.css, please follow the setup steps below.

## Option #1: Automatic Setup

We provide two settings files to establish the default settings for your Bricks project automatically. One is a Bricks Settings file and the other is a Bricks Theme file.

**Warning:** These files should be used to start a new project. Uploading them to an existing project will overwrite your settings and defaults.

### Step #1: Import Bricks Settings File

Download this [Bricks Settings Blueprint file](https://automaticcss.com/wp-content/uploads/bricks-settings-2024-07-29.zip) (.zip), unzip it to expose the .json file, and upload the .json file to your Bricks Settings Panel:

![](https://automaticcss.com/wp-content/uploads/bricks-import-settings-1024x496.jpg)

### Step #2: Import Bricks Theme File

Bricks uses Global [Theme Styles](https://academy.bricksbuilder.io/article/theme-styles/) to control a lot of your website’s default styling. Most of this should be left undefined, but a few settings need to be set up.

Download this [Bricks Theme file (.zip)](https://automaticcss.com/wp-content/uploads/bricks1.10.x-theme-style-acss.zip), unzip it to expose the .json file, and then upload the .json file to the Bricks Global [Theme Styles](https://academy.bricksbuilder.io/article/theme-styles/) area.

Open Bricks Builder by editing any page or template. Once in the editor, click the settings wheel toward the top left: Bricks Global Styles

Create New Theme Style in Bricks

Upload Bricks Theme Style JSON File

Once you’ve uploaded both files, you’re good to go. You can now proceed with customizing any empty settings based on your preferences (such as setting your font family in Typography > Body/Headings).

## Option #2: Manual Setup

If you don’t want to use our settings files, you can configure the settings manually. Here are the steps:

### Step #1: Configure Bricks Settings

Navigate to Bricks > Settings in the WordPress Admin:

Bricks Builder Settings

Configure as follows:

#### General

| Post Types |                   |
| ---------- | ----------------- |
| Posts      | Off (recommended) |
| Pages      | On                |

Select post types to [edit with Bricks](https://academy.bricksbuilder.io/article/editing-with-bricks).

| **Gutenberg Data**                 |     |
| ---------------------------------- | --- |
| Load Gutenberg data into Bricks    | Off |
| Save Bricks data as Gutenberg data | Off |

[Convert Gutenberg data](https://academy.bricksbuilder.io/article/gutenberg) into Bricks data and vice versa.

| **SVG Uploads** |     |
| --------------- | --- |
| Administrator   | On  |
| Editor          | On  |
| Author          | Off |

[https://academy.bricksbuilder.io/article/svg-uploads](https://academy.bricksbuilder.io/article/svg-uploads)

| **Miscellaneous**                   |                                                                                                                                        |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Disable global class manager        | Off                                                                                                                                    |
| Disable CSS variables manager       | Off                                                                                                                                    |
| Disable Bricks Open Graph Meta Tags | On                                                                                                                                     |
| Disable Bricks SEO Meta Tags        | On                                                                                                                                     |
| Generate Custom Images Sizes        | Off                                                                                                                                    |
| Add element ID as needed            | On                                                                                                                                     |
| Disable “Skip Links”                | Off                                                                                                                                    |
| Smooth Scroll (CSS)                 | Off                                                                                                                                    |
| Enable “Delete Bricks data” button  | Off                                                                                                                                    |
| Query Bricks data in search results | On ([Read more](https://forum.bricksbuilder.io/t/can-someone-please-explain-query-bricks-data-in-search-results-what-does-it-do/4404)) |
| Save form submissions in database   | User Preference                                                                                                                        |

| **Query Filters**                        |     |
| ---------------------------------------- | --- |
| Enable query sort / filter / live search | On  |

| **Custom breakpoints** |     |
| ---------------------- | --- |
| Custom breakpoints     | On  |

[Custom breakpoints](https://academy.bricksbuilder.io/article/responsive-editing/#custom-breakpoints) are best configured before you start working on your site.

| **Convert**                                             |     |
| ------------------------------------------------------- | --- |
| Convert “Container” to new “Section” & “Block” elements | Off |
| Convert element IDs & classes                           | Off |
| Add “position: relative” as needed                      | Off |
| Entry animation to interaction                          | Off |

[https://academy.bricksbuilder.io/article/converter](https://academy.bricksbuilder.io/article/converter)

| **Custom authentication pages** |                 |
| ------------------------------- | --------------- |
| Login                           | User Preference |
| Registration                    | User Preference |
| Lost password                   | User Preference |
| Reset password                  | User Preference |

[https://academy.bricksbuilder.io/article/custom-authentication-pages](https://academy.bricksbuilder.io/article/custom-authentication-pages)

#### Builder Access

| **Builder access** |              |
| ------------------ | ------------ |
| Administrator      | Full access  |
| Editor             | Edit Content |
| Author             | No Access    |
| Contributor        | No Access    |
| Subscriber         | No Access    |

Set [builder access](https://academy.bricksbuilder.io/article/builder-access) per user role. To define access for a specific user edit the user profile directly.

#### Templates

| **My T**emplates                  |                 |
| --------------------------------- | --------------- |
| Template screenshots              | User Preference |
| Template manager thumbnail height | User Preference |
| Template thumbnail column         | User Preference |
| Disable default templates         | User Preference |
| Public templates                  | User Preference |
| My Templates Access               | User Preference |

| Remote templates |                                                             |
| ---------------- | ----------------------------------------------------------- |
| Name             | Frames                                                      |
| URL              | [https://bricks.getframes.io](https://bricks.getframes.io/) |
| Password         | \*\*\* Your Frames License \*\*\*                           |

only if you own Frames

| **Miscellaneous** |     |
| ----------------- | --- |
| Convert templates | Off |

Convert template on import/insert from Container to new layout elements structure ([Section > Container > Block / Div](https://academy.bricksbuilder.io/article/layout)).

#### Builder

| **Autosave**     |     |
| ---------------- | --- |
| Disable autosave | On  |

| **Builder Mode** |                        |
| ---------------- | ---------------------- |
| Builder Mode     | Dark (User Preference) |

| **Language**               |                 |
| -------------------------- | --------------- |
| Builder language           | User Preference |
| builder language direction | Auto            |

| **Toolbar logo link** |                  |
| --------------------- | ---------------- |
| builder toolbar logo  | View on frontend |
| Open in new tab       | On               |

| **Control panel**                       |                 |
| --------------------------------------- | --------------- |
| Disable auto-expand (Text editor, Code) | On              |
| Disable global classes (Interface)      | Off             |
| Variable dropdown: Hide value           | Off             |
| Code control: Vim (Toggle)              | User Preference |
| Element Breadcrumbs                     | Off             |

| **Canvas**                     |     |
| ------------------------------ | --- |
| Disable element spacing        | On  |
| Auto scroll element into view: | 0   |

| **Structure panel**                      |     |
| ---------------------------------------- | --- |
| Duplicate                                | On  |
| Delete                                   | On  |
| Collapse on page load                    | On  |
| Expand active element & scroll into view | On  |

| **Element actions** |       |
| ------------------- | ----- |
| Wrap element        | Block |
| Insert element      | Block |
| Insert layout       | Block |

| **Disable WP REST API render** |     |
| ------------------------------ | --- |
| Disable WP REST API render     | Off |

| **WP polyfill** |     |
| --------------- | --- |
| WP polyfill     | Off |

| **Dynamic data**                                |     |
| ----------------------------------------------- | --- |
| Render dynamic data text on canvas              | On  |
| Disable WordPress custom fields in dropdown     | On  |
| Dropdown: Show dynamic data key in dropdown     | On  |
| Dropdown:Hide dynamic data label in dropdown    | On  |
| Dropdown: Expand panel when dropdown is visible | On  |

| **Global data sync** |     |
| -------------------- | --- |
| Sync global classes  | On  |

#### Performance

| **Performance**                                                              |                                                 |
| ---------------------------------------------------------------------------- | ----------------------------------------------- |
| Disable emojis                                                               | On                                              |
| Disable embed                                                                | Off                                             |
| Disable Google Fonts                                                         | On                                              |
| Disable lazy loading                                                         | On (Turn off when Using Perfmatters or similar) |
| Disable jQuery migrate                                                       | On                                              |
| Cache query loops                                                            | Off                                             |
| Disable class chaining                                                       | **On (REQUIRED)**                               |
| [CSS loading method](https://academy.bricksbuilder.io/article/asset-loading) | Inline Styles                                   |

Once you’ve configured the settings, it’s time to setup your Global Theme Styles.

### Step #2: Global Theme Styles

Open Bricks Builder by editing any page. Once in the editor, click the settings wheel toward the top left:

Bricks Global Styles

Next, click on Theme Styles. Once the panel opens, click the plus sign to add a new theme:

Create New Theme Style in Bricks

Give your Theme Style a name and click “Create.”

The first thing you need to do is assign your new theme style to your entire website. You can do that in the Conditions tab:

Bricks Theme Style Conditions

**Warning:** If you don’t assign your theme styles, you won’t see them at all and ACSS won’t work properly. Make sure you assign the styles to your entire website.

**Warning:** These settings **should only be used to start a new project.** Changing them on an existing project will overwrite your current settings, all your headings that aren’t individually set will become h2. Importing templates that don’t have explicit settings will also use your defaults.

Here are the rest of the settings (panels & settings that aren’t mentioned require no changes):

- **Typography**: Set your Font Family for both body and headings.
- **Typography (Required)**: Set HTML Font Size to `var(--root-font-size)`
- **Element – Container (Required)**: Set width to `var(--content-width)`
- **Element – Code (Recommended)**: Set theme to Tomorrow Night
- **Element – Heading (Recommended to ease workflow)**: Set default Tag to H2
- **Element – Image**: Set caption to no caption

Using these settings means headings will be h2. When the defaults are not what you need, change the individual element after adding it.

**Caution:** Setting other global styles in Bricks can cause conflicts with ACSS. Make sure you know exactly what you’re doing if you want to set any other global style defaults in Bricks.

That’s it! Bricks is now setup and ready to work properly with ACSS!
