# `@modular-app/components`

## What are Components?
- Components are UI modules concerned with styles and structure
- Components are usually composed of low-level UI modules, like Primitives or DOM Elements
- In Atomic Design, Components would be referred to as Molecules

## Install
```sh
yarn add @modular-app/components
```

## Use
```js
import React from "react";
import { Hero } from "@modular-app/components";

() => {
  return (
    <Hero buttonText="Press me" headingText="Read me" />
  );
};
```
