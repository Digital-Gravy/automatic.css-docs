---
title: What are Mixins?
sidebar_position: 100
---

**Note:** Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Imagine you have a _magic_ recipe book. In this book, you can write down all the instructions for making your favorite meals. But, instead of reading the recipe and following the directions every time you want to make one of your meals, all you have to do is say the name of the recipe, and poof! All the instructions appear.

That’s kind of like what SCSS mixins do, but for styling websites.

## How Mixins Work

In SCSS (which is like a super-powered version of CSS), mixins are like those magic meal recipes. You write them once, give them a name, and then you can use them over and over in different places without writing all the code again.

We use mixins a lot in ACSS, internally, to output parts of the framework. The really cool part is that _you_ can use our mixins, too! The only caveat is that you have to use them in the “Custom SCSS” area of the ACSS dashboard. Since most page builders don’t include a SCSS pre-processor, you can’t use them in the builder inputs or normal CSS boxes.

## Using a Mixin

Mixins are used by referencing the name of the mixin using the `@include` syntax. For example, here’s how use our button mixin:

```CSS
.my-custom-button {
  @include btn;
}
```

It’s like saying “Hey ACSS, please put all those cool button styles here!”

But that’s not all. Mixins can have “arguments” as well, which can manipulate the code the mixin writes for you. For example, our button mixin accepts a `$style` argument, that asks for the style of button you want to output.

Here’s an example of outputting everything associated with the “secondary” button style:

```CSS
.my-custom-button {
  @include btn(secondary);
}
```

That’s actually not the only argument the button mixin accepts. There’s a second argument called `$props`, which decides whether the main button property keys are output in the code or not. This argument excepts a “yes” or “no” – do you want to output the full list of keys, or not?

```CSS
.my-custom-button {
  @include btn(secondary, no);
}
```

The above code would output ONLY the locally scoped variables that produce the secondary button style, but it wouldn’t actually output the property keys. You’d want to do this when you’ve named your custom button with a `.btn--` prefix, given that ACSS automatically outputs the property keys for any class that starts with `.btn--`. It’s a more efficient approach to changing a button’s style.

You don’t have to worry about how this all works right now as it’s specific to buttons. I just wanted to give an example of having multiple arguments in a mixin.

### Why did the earlier mixin examples work without answering the arguments?

The previous mixin examples work without answering the arguments, or only answering one argument, because both arguments have a default value. The default for `$style` is “primary” and the default value of `$props` is “yes.”

Arguments often have default values to avoid having to answer them every single time the mixin is used, but there are still two things you have to remember about mixin arguments:

1.  Arguments have to answered in order, so it’s important to [read and understand the documentation for a mixin](https://automaticcss.com/doc-cat/mixins/) before you use it.
2.  If you want to answer an argument that isn’t the first argument, you have to answer each argument that comes before it as well. So, again, it’s important to [read and understand the documentation for a mixin](https://automaticcss.com/doc-cat/mixins/) before you use it.

## Why Mixins are Awesome

- They save time: You write the code once and use it many times (or in this case, you get to access/use mixins without ever having to write them).
- They keep things tidy: Your code stays organized and easy to read.
- They’re flexible: You can change them in one place and it updates everywhere.
- They keep everything you’re doing 100% consistent with what ACSS was already doing elsewhere.

So, next time you’re styling a website, remember mixins are like your magical recipe book for making things look awesome!
