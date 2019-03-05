# Modular App

## What is a Modular App?
- A Modular App is a **monorepo**
- A Modular App has an **interface-centric** top-level architecture
- A Modular App has **packages** that can be used in any interface

### Interfaces
Interfaces are full user interfaces that could include the application's API, UI and CLI.

### Packages
Packages must fulfil this checklist:
- Can be rapidly built with a single command (eg. `yarn build`)
- Can be distributed to a package registry with a single command (eg. `yarn publish`)
- Can be installed to any project, making them globally shareable and locally reusable (eg. `yarn add package-name`)

## Architecture of a Modular App
- `/api` - example application programming interface
- `/cli` - example command line interface
- `packages` - universal modules, including design system tokens, utility functions and UI components
- `/ui` - example user interfaces, including a native `app`, static `blog` and `www` web server

## Modular App mantras
- The best interface is no interface
- Repetition is better than the wrong abstraction
- Make it easy to delete code
- Prefer local over centralised configuration

## Running example Modular App

### Install
```sh
yarn
```

### Build
```sh
yarn workspaces run build
```
