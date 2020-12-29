# React App with Typescript Boilerplate with Webpack bundler
This is a starter app for [React](reactjs.org) apps with [Typescript](typescriptlang.org), using [Webpack](webpackjs.org) as the bundler. I was setting it up for personal use, and figured I'd add some notes in case others needed. 

## Other libraries include: 
[styled-components] (https://www.styled-components.com/)[react-router] (reactrouter.com)

## Linting
I am not opinionated about linters, other than believing it is important to have one setup in a project. This way you (or even your team) do not have to worry about formatting. Also, in a team environment having linting rules inside of a project can prevent a lot of unnecessary code changes that will cause attention to be diverted from real changes in Pull Requests. 

This project is using [eslint](eslint.org) and [prettier](prettier.io) for linting/formatting. The [lint-staged](https://github.com/okonet/lint-staged) library is setup to lint/prettify the git staged files on each commit, to make sure all files being committed have been properly formatted.
