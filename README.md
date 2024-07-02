# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Desktop design preview](#desktop-design-preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Read more of starting with Vite](#getting-started-with-vite)
  - [Available Scripts](#available-scripts)
  - [Deployment](#deployment)

## Overview
My challenge was to build out Sunnyside agency landing page and get it looking as close to the design as possible. Designs could be found inside the `/design` folder and Style Guide in file style-guide.md.

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page (some hover and focus states yet to come)
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Desktop design preview

![](./public/images/desktop-design-step-1.jpg)

### Links

- Github repo: [https://github.com:Mary2021/multiStepForm.git](https://github.com:Mary2021/multi-step-form.git)
- Live URL: [https://mary2021.github.io/multiStepForm/](https://mary2021.github.io/multi-step-form/)

## My process

### Built with
- [Vite](https://vitejs.dev/guide/). [Read more](#getting-started-with-Vite)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- CSS custom properties
- [Redux](https://redux.js.org/)

### Useful resources
- [HTML5 Semantic Tags](https://www.bitdegree.org/learn/https://www.bitdegree.org/learn/html5-semantic-tags#:~:text=HTML5%20semantic%20tags%20define%20the%20purpose%20of%20the%20element.,find%20the%20required%20information%20faster.) - This helped me better understand of the aim of HTML semantics.
- [the Folder Structure for React Project](https://www.xenonstack.com/insights/reactjs-project-structure#:~:text=Components%20are%20the%20building%20blocks,widely%20used%20in%20the%20project.) - This article explains the Folder Structure for React Project. 
- [Re-render a React Component on Window Resize](https://www.pluralsight.com/guides/re-render-react-component-on-window-resize) - This article explains how to add an event listener for the resize event.
- [Build A Responsive React JS Website](https://www.youtube.com/watch?v=1_Cu-yMQru8) - Clint Briley Code Commerce video channe has very good tutorials for begginers. 
- [The Markdown Guide](https://www.markdownguide.org/) - Get more help with writing markdown.

## Author

- Website - [Mary P](https://github.com/Mary2021)

## Getting Started with Vite

Run `npm create vite@latest my-react-app -- --template react` to start a React app template.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Vite requires Node.js version 18+ or 20+. 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.

### `npm run preview`

The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the --port flag as an argument.

```json
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```

Now the preview command will launch the server at http://localhost:8080.

## Deployment

- Set base in vite.config.js:

```js
export default defineConfig({
  ....
  base: '/reponame/'
})
```
- Add workflow. Read more [https://vitejs.dev/guide/static-deploy.html#github-pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

# Reactstrap
[Install Reactstrap](https://reactstrap.github.io/?path=/docs/home-installation--page)

- npm install reactstrap

# Redux
[Getting started with Redux](https://redux.js.org/introduction/getting-started)

npm install react-redux
npm install @reduxjs/toolkit


https://www.npmjs.com/package/web-vitals
npm i web-vitals

https://www.npmjs.com/package/react-router-dom
npm i react-router-dom
