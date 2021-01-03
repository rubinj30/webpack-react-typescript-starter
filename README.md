# React App with Typescript Boilerplate
This is a starter app for [React](reactjs.org) apps with [Typescript](typescriptlang.org), using [Webpack](webpackjs.org) as the bundler. I was setting it up for personal use, and figured I'd add some notes in case others wanted to use. 

This includes the newest version of React (17.0.1), which means it no longer is necessary to import React into each file with components. This starter app uses TypeScript to transform JSX to ES5 code, via the `"jsx": "react-jsx",` setting in the `tsconfig.json`. If your files with JSX are flagging this [make sure you are using the workspaces version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions), or upgrade TypeScript globally to be > 4.1.0. 

## Getting Started

Clone the repository:
```
git clone https://github.com/rubinj30/webpack-react-typescript-starter.git
```

Install the dependencies:
```
yarn install (or npm install)
```

Start the application and it will be running at http://localhost:8080:
```
yarn start (or npm start)
```
NOTE: if you end up using NPM, then you can remove the yarn.lock file and use the package-lock.json file

## Other base libraries included 
Styling - [styled-components](https://www.styled-components.com/) 

Routing - [react-router v5](reactrouter.com)

Testing React components - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 

Test runner - [Jest](https://jestjs.io)

Linting/Formatting - [ESLint](eslint.org)/[Prettier](prettier.io)
