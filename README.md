<h1 align="center">
    <b>Create React App Template for SOHO</b>
</h1>
<h2 align="center">Legacy Template</h2>
<p align="center">React template in javascript/Typesciprt base using Create-Reract-APP</p>
<p align="center">
  <a href="https://www.npmjs.com/package/cra-template-awesome-soho" target="_blank" rel="noopener noreferrer">
    <img alt="npm" src="https://img.shields.io/npm/v/cra-template-awesome-soho?style=for-the-badge&logo=npm">
    <img alt="npm" src="https://img.shields.io/npm/dt/cra-template-awesome-soho?style=for-the-badge&logo=npm">
    <img alt="NPM" src="https://img.shields.io/npm/l/cra-template-awesome-soho?style=for-the-badge">
  </a>
</p>

This template only considers Client Side Rendering (CSR) and is a form of the most basic React technology considered by the creator rather than the latest trends.

Since Create React App (CRA) is no longer supported, modern React templates composed of Vite, Typescript, etc. are being worked on.

[DEMO Page](https://comnori.github.io/cra-template-awesome-soho/)

## Recommendation

1. This template is recommended to be used in [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) to ensure the same operation on Linux / Windows / Mac.

   - On Windows, the script is not guaranteed to work if you are not using [WSL](https://learn.microsoft.com/en-US/windows/wsl/install).

2. This template has vulnerabilities in create-react-app, so if possible, use [vite-template](https://github.com/comnori/vite-template-awesome-soho) instead.

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                          | Latest ✔                                                                                             | Latest ✔                                                                                          | Latest ✔                                                                                       | Latest ✔                                                                                    |

## Installation

### Install CRA template

```bash
> npx create-react-app my-app --template awesome-soho
```

### Project initialization

After the devcontainer runs normally, perform init.

```bash
> npm run init
```

This script is used to remove unnecessary extensions from the devcontainer and is removed from scripts after execution.

## Features

1. Freedom of choice of language
   - ECMAScript (javascript)
   - [ECMAScript with JsDoc typecheck](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)
   - Typescript
2. Collaboration between library and vscode extension
3. Well-defined folder structure
4. Document Automation
5. [Light, Dark] theme changer
6. Multilingual support
7. IDE environment integration

## Libraries

### Language

<img height="32" width="32" src="https://cdn.simpleicons.org/javascript" alt="javascript" /> <img height="32" width="32" src="https://cdn.simpleicons.org/typescript" alt="typesciprt"/>

### Created by

<img height="32" width="32" src="https://cdn.simpleicons.org/createreactapp" alt="create-react-app" />

### Library

<img height="32" width="32" src="https://cdn.simpleicons.org/react" alt="react"/> <img height="32" width="32" src="https://cdn.simpleicons.org/reactrouter" alt="react-router"/> <img height="32" width="32" src="https://cdn.simpleicons.org/antdesign" alt="ant design"/>
<img height="32" width="32" src="https://cdn.simpleicons.org/redux" alt="redux"/> <img height="32" width="32" src="https://cdn.simpleicons.org/axios" alt="axios"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sass" alt="sass"/> <img height="32" width="32" src="https://cdn.simpleicons.org/i18next" alt="i18next" />

- pino
- dayJs

### Dev tools

<img height="32" width="32" src="https://cdn.simpleicons.org/eslint" alt="eslint"/> <img height="32" width="32" src="https://cdn.simpleicons.org/prettier" alt="prettier"/> <img height="32" width="32" src="https://cdn.simpleicons.org/dotenv" alt=".env"/> <img height="32" width="32" src="https://cdn.simpleicons.org/editorconfig/aaaaaa" alt="EditorConfig"/> <img height="32" width="32" src="https://cdn.simpleicons.org/containerd/aaaaaa" alt="devcontainer"/> <img height="32" width="32" src="https://cdn.simpleicons.org/sonarlint" alt="Sonar Lint"/> <img height="32" width="32" src="https://cdn.simpleicons.org/jest" alt="jest"/><img height="32" width="32" src="https://cdn.simpleicons.org/storybook" alt="storybook"/> <img height="32" width="32" src="https://cdn.simpleicons.org/cypress/000000/ffffff" alt="Cypress"/>

## Source Folder structure

```ascii
src
├── assets                                    // like svg
├── components                                // atomic design
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
├── config                                    // project configuration
│   ├── i18n                                  // i18next resource
│   │   ├── {lang}                            // ISO 639-1 Language Code [en,...,ko]
│   │   │   └── translation.json
│   ├── MenuItems.js
│   └── Router.js
├── context                                   // React Context
│   └── {context name}                        // Context domain name
│       ├── components                        // Context related components
│       └── hooks                             // Context related hooks
├── features                                  // Redux
│   └── {reducer name}
├── hooks                                     // common hooks
├── lib                                       // Library configuration
│   ├── components
│   └── {library name}Config.js
├── pages                                     // Pages
│   ├── {domain}
│   │   ├── {page}
│   ├── {page}
│   │   ├── components                        // children for page
│   │   ├── {page}.jsx
│   │   ├── {page}.module.scss                // module scss
└── utils                                     // common utils

```

## Project configuration

### Type check enable or disable

1. Enable(true) / Disable(false)

   `tsconfig.json`

   ```json
   {
     ...
     "checkJs": true,
     ...
   }
   ```

2. Optionnal

   If you want to apply or not apply type check to only some parts, check the guide below.

   [JS Projects Utilizing TypeScript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check)

3. Using typescript

### Router

`src/config/Router.js`

### MenuItems

`src/config/Menu.js`

### JsDoc generation

```bash
yarn doc
```

`doc` folder created

### declaration export

```bash
yarn type
```

`type` folder created

## Library configuration

### Theme Config

1. Ant Design Default theme

    The initial theme acts as the system's theme setting.

2. Ant Design Customize theme

    To modify the Antd Theme, set the designToken according to the [Ant Design Customize Theme guide](https://ant.design/docs/react/customize-theme).

    `src/lib/themeConfig.js`

    ```js
    const themeConfig = {
      themeName: getSystemCurrentTheme,
      designToken: {
        components: {
          Layout: {
            headerHeight: 64,
          },
        },
      },
      componentSize: "middle",
    };
    ```

## Troubleshooting

1. error `TS2307``: Cannot find module 'moduleA'

   `src/react-app-env.d.ts` Add the extension corresponding to the file.

   ```typescript
   declare module "*.png";
   declare module "*.svg";
   declare module "*.jpeg";
   declare module "*.jpg";
   declare module "*.scss";
   declare module "*.sass";
   ```

## Known Issue

- NPM high severity vulnerabilities : See [issue](https://github.com/comnori)
  - nth-check
  - pug
  - taffydb
    - better-doc : Solved when deploying better-docs that supports jsdoc 4.0
- Warn display issue when npm install on x86_64 mac : See [issue](https://github.com/comnori)

## Working

Scheduled to be available in 1.1.0

- [ ] Jest
- [ ] Storybook
- [ ] Cypress
