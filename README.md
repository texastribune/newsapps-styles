# News Apps Styles v1.0.1

Base styles for all your News Apps needs. Comes with versioning and is installable via [npm](https://www.npmjs.com/).

## Dependencies

- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)

## Installing

```sh
npm install --save-dev newsapps-styles
```

## Our Philosophy

The goal of this [style guide](http://apps.texastribune.org/styles/) is to create a front-end framework to maintain consistency across News Apps projects, while giving each designer and developer the flexibility to code in their own unique and creative way.

Our style files are written in SCSS — a Sass syntax that builds on the existing CSS syntax. With SCSS, we can use all the great features of Sass, such as @mixins, %placeholders and $variables, but can write in the more familiar (and more expressive) CSS syntax.

If you're unfamiliar with Sass or SCSS, read this [guide](http://sass-lang.com/guide) to catch up on the basics.

Currently, our partial style files are broken into three folders — helpers, theme, and components. You'll find a thorough description of the partials in the helpers folder below. If you're creating a feature with additional prose styles or making a graphic, you may also want to use those partials from the theme folder. And you'll find particular styles for components, like a masthead, and footer, in the components folder.

### The Helpers

Everything you need to jump start a project is contained in the helpers folder. Here's an explanation of each of the partials:

#### _BASE.SCSS

These are the only styles applied directly to HTML elements. If you really need a clean slate, don't use this partial. But it's helpful for normalizing styles and inheriting basic news apps prose styles without using additional classes.

#### _BUTTONS.SCSS:

Creates a button mixin, to include buttons in any color. Also allows for solid color buttons or ghost buttons, based on the arguments you insert.

#### _COLORS.SCSS:

All of our colors are assigned to $variables, most of which have a descriptive name to help you decide when to use it. For example, $rep-red and $dem-blue are used for typical political party designations.

#### _GRID.SCSS:

Everything you need to build a responsive layout is included in the grid partial. Jump to Grid Specs to learn more about the basic structure and default grid settings, and Grid Mixins to learn more about the @mixins we've created to help you implement a grid design.

#### _TABLES.SCSS:

This partial contains one mixin to rule them all — i.e. all the variations of mobile table styles. Skip to Tables to learn more.

#### _TYPOGRAPHY.SCSS:

Our style guide has a modular typography system. By changing the size $variables, you can change font-sizes across the entire project. The system also allows you to designate font-size with .classes in your HTML or @extend %font-sizes on new classes.
