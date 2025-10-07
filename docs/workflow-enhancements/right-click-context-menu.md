---
title: Right Click Context Menu
sidebar_position: 100
---

By far, the most powerful workflow enhancement in Automatic.css is the Context Menu. This is right-click menu that gives you quick access to classes and variables with live preview.

Using the context menu in your workflow will speed up your development exponentially.

## Enabling the Context Menu

![](img/enabling-context-menu.webp)

The context menu is enabled by default, but you can check its status by going to **Options > Workflow Enhancements**.

## Supported Builders

The context menu is a feature that our team must integrate with each supported builder separately. Make sure you’re using an officially supported builder before attempting to use the context menu.

## Adding Classes With the Context Menu

The context menu is great for adding utility classes. Simple right click on the class input field in the builder to access the menu.

The fastest way to add a utility class from the context menu is to search for it by part of its name. For example, you can search for “grid” and the context menu will instantly show you all grid classes.

If you hover over the classes in the context menu, the canvas will live preview the effect that class will have if you were to add it.

If you click the class, ACSS will attach the class to the element. If you click the class again without closing the context menu, ACSS will remove it. You can add/remove as many utility classes as you want without having to close and re-open the context menu.

## Adding Variables with the Context Menu

You can use the context menu to add variables by right clicking a CSS input field in the builder.

In these situations, the context menu intelligently recommends the most appropriate variables for the specific type of input you clicked on.

Hovering over a variable will live preview its effect on the canvas. Clicking a variable will place it as the value of the input. Clicking it again will remove it from the input. Click a different variable will replace the value.

## Choosing Colors in the Context Menu

When you’re interacting with color-based utilities, whether classes or variables, you will see a swatch layout.

The context menu knows which colors are enabled or disabled on your install and will only show you available options. If you don’t see a color option, it’s because the color is disabled. You’ll need to enable the color in your ACSS palette settings and then reload the builder in order to see it.

The important thing to note here is that you also have access to all transparencies. Colors that support transparencies will have a small arrow below their swatch. You can access transparencies for any color/shade by holding CMD or CNTRL while hovering over the swatch.

## Positioning in the Context Menu

The context menu appears immediately below the input by default, but you’re free to grab it by its header and drag it to a new position. In a future version of the context menu, it’ll remember its last position (much like the ACSS dashboard does).
