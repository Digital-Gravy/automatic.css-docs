---
title: Gradient Outline Buttons
sidebar_position: 50
---

Many users have asked how to approach gradient outline buttons using ACSS. While the ACSS button framework gets you 80% of the way there, we need to add some custom CSS to get the final effect. Here’s how it’s done:

## Pre-requisite

Get all your [global button defaults](./buttons.md) setup in the ACSS dashboard. We’ll be setting this custom gradient outline style as the “primary” button style, so make sure “Primary” color is active and the “Primary” button style is activated. These are both active by default in ACSS, so you should be good to go out of the box.

## Step #1: Custom Background

![primary button style panel](img/CleanShot-2024-12-02-at-17.45.35.webp)

Navigate to the Primary button styles panel in the ACSS dashboard. Set the background and background-hover fields to:

```CSS
linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
```

We’re going to use custom tokens here because we need to declare them as transitionable properties, assuming you want them to transition on hover.

## Step #2: Declare the Properties for Transition

If you want to transition colors in CSS, you need to declare them using the new `@property` syntax. In the Custom SCSS dashboard in ACSS, define them like this:

```CSS
@property --gradient-color-1 {
    initial-value: transparent;
}

@property --gradient-color-2 {
    initial-value: transparent;
}
```

We’re going to set the `initial-value` to transparent since we need the button to be transparent by default.

## Step #3: Primary Button Styles

To make this effect work, we need to:

1.  Get rid of the border that’s normally on our buttons
2.  Position the buttons relative so they can support a pseudo element
3.  Adjust the padding to account for the now-removed border
4.  Set the transition for our gradient colors

Here’s what the CSS looks like for this step:

```CSS
.btn--primary.btn--primary {
    --gradient-angle: 45deg;
    --gradient-transition: --gradient-color-1 var(--transition-duration) var(--transition-timing), --gradient-color-2 var(--transition-duration) var(--transition-timing);
    position: relative;
    border: none !important;
    padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
    padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
    transition: var(--gradient-transition); }
```

Here are some notes:

- We’re declaring the class twice to make sure we don’t encounter any specificity issues.
- We’re declaring the `--gradient-angle` here.
- We’re declaring the `--gradient-transition` here, as a new locally scoped variable, since we’ll need to use it in two different places.
- We’re using ACSS’ `transition-duration` and `transition-timing` to maintain sync between your custom code and ACSS for transitions. You can always redefine these for your buttons if you’d like.
- We’re using ACSS’ `btn-outline-border-width`, `btn-padding-block`, and `btn-padding-inline` to maintain perfect sync between your custom code and ACSS for button padding and border width.

## Step #4: Pseudo Element

The effect we’re using works by creating a gradient pseudo element and then using a mask to cut a rectangle out of it, giving the appearance of a gradient outline. There are other approaches you can take, but this one creates smoother gradients, maintains proper radius, and makes transitions easier.

Here’s the code, which you can nest inside of the previous code block when you’re using the SCSS dashboard in ACSS:

```CSS
&::before {
    --gradient-color-1: var(--secondary);
    --gradient-color-2: var(--primary);
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: var(--btn-outline-border-width);
    background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: var(--gradient-transition); }
```

Notes:

- Since `gradient-color-1` and `gradient-color-2` have their initial value set to transparent, we need to define actual color values here on the pseudo element.
- `position: absolute;` and `inset: 0;` work together to make the pseudo element the exact size of your button.
- `padding: var(--btn-outline-border-width);` creates an offset away from the mask, equal to your outline button border width, giving the proper appearance of a border.
- The mask is just a white rectangle set to exclude or “mask” the white area.
- We re-declare the transition here so the gradient “border” can be transitioned along with the background.

## Step #5: Hover Styles

Setting up the button styles the way we have makes adjusting hover styles super easy. You can nest this code in your original code block:

```CSS
&:hover {
	--gradient-color-1: var(--primary);
	--gradient-color-2: var(--secondary);

	&::before {
		--gradient-color-1: var(--primary);
		--gradient-color-2: var(--secondary);
	}
}
```

Notes:

- Remember, the gradient colors are transparent by default, so just give them values for the hover state.
- The `&::before` attaches itself to `&:hover` so you can also give the gradient border new values on hover. These are ideally opposite of the initial values you declared for the border (else nothing will change) and should match the hover color values for the button (so the button background and border seamlessly merge).

## Full Code

For SCSS:

```CSS
@property --gradient-color-1 {
	initial-value: transparent;
}

@property --gradient-color-2 {
	initial-value: transparent;
}

.btn--primary.btn--primary {
	--gradient-angle: 45deg;
	--gradient-transition: --gradient-color-1 .6s ease, --gradient-color-2 var(--transition-duration) var(--transition-timing);
	position: relative;
	border: none !important;
	padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
	padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
	transition: var(--gradient-transition);

	&::before {
		--gradient-color-1: var(--secondary);
		--gradient-color-2: var(--primary);
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		padding: var(--btn-outline-border-width);
		background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		transition: var(--gradient-transition);
	}

	&:hover {
		--gradient-color-1: var(--primary);
		--gradient-color-2: var(--secondary);

		&::before {
			--gradient-color-1: var(--primary);
			--gradient-color-2: var(--secondary);
		}
	}
}
```

Vanilla CSS:

```CSS
@property --gradient-color-1 {
	syntax: " <color>";
	inherits: false;
	initial-value: transparent;
}

@property --gradient-color-2 {
	syntax: " <color>";
	inherits: false;
	initial-value: transparent;
}

.btn--primary.btn--primary {
	--gradient-angle: 45deg;
	--gradient-transition: --gradient-color-1 .6s ease, --gradient-color-2 var(--transition-duration) var(--transition-timing);
	position: relative;
	border: none !important;
	padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
	padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
	transition: var(--gradient-transition);
}

.btn--primary.btn--primary::before {
	--gradient-color-1: var(--secondary);
	--gradient-color-2: var(--primary);
	content: '';
	position: absolute;
	inset: 0;
	border-radius: inherit;
	padding: var(--btn-outline-border-width);
	background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	transition: var(--gradient-transition);
}

.btn--primary.btn--primary:hover {
	--gradient-color-1: var(--primary);
	--gradient-color-2: var(--secondary);
}

.btn--primary.btn--primary:hover::before {
	--gradient-color-1: var(--primary);
	--gradient-color-2: var(--secondary);
}
```
