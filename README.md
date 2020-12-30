# React App with Typescript Boilerplate
This is a starter app for [React](reactjs.org) apps with [Typescript](typescriptlang.org), using [Webpack](webpackjs.org) as the bundler. I was setting it up for personal use, and figured I'd add some notes in case others wanted to use. 

This includes the newest version of React (17.0.1), which means it no longer is necessary to import React into each file with components. This starter app uses TypeScript to transform JSX to ES5 code, via the `"jsx": "react-jsx",` setting in the `tsconfig.json`. If your files with JSX are flagging this [make sure you are using the workspaces version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions), or upgrade TypeScript globally to be > 4.1.0. 

## Other base libraries included 
[styled-components](https://www.styled-components.com/) for styling

[react-router v5](reactrouter.com) for routing

[ESLint](eslint.org) and [Prettier](prettier.io) for formatting/linting

### Formatting/Linting
I'm not opinionated about most linter rules, other than believing it is important to have them setup in a project. This way you (or even your team) do not have to worry about formatting. Also, in a team environment having linting rules inside of a project can prevent a lot of unnecessary code changes that will cause attention to be diverted from real changes in Pull Requests. 

This project is using ESLint and for linting/formatting. The [lint-staged](https://github.com/okonet/lint-staged) library is setup to lint/prettify the git staged files on each commit, to make sure all files being committed have been properly formatted.


## Getting Started

Clone the repository. Then install the dependencies:
```
yarn install
```

Start the application and it will be running at http://localhost:8080:
```
yarn start
```