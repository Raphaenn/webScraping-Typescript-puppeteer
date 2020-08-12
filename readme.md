<h1 align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/919/919825.svg" width="200px">
</h1>

<h3 align="center">
  Web Scraping with NodeJs
</h3>

<p align="center">Api created to get images of a website through the url.</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Raphaenn/webScraping-Typescript-puppeteer">

  <a href="https://www.linkedin.com/in/raphaelnneves/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-raphael%20neves-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Raphaenn/webScraping-Typescript-puppeteer">

  <a href="hhttps://github.com/Raphaenn/webScraping-Typescript-puppeteer/tree/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Raphaenn/webScraping-Typescript-puppeteer">
  </a>

  <a href="hhttps://github.com/Raphaenn/webScraping-Typescript-puppeteer/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EliasGcf/gobarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/gobarber-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=PontoLoc&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fpontoloc-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 👨🏻‍💻 About the project

This project aims to provide an api, which through any url will change the page informed by downloading your images in a local folder, and saving their links in a mongodb bank.


## ⚙️ Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [puppeteer](https://github.com/puppeteer/puppeteer)
- [mongodb](https://classic.yarnpkg.com/pt-BR/package/mongodb-memory-server-global-3.6)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [Mongodb](https://www.mongodb.com)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Raphaenn/webScraping-Typescript-puppeteer && cd webScraping-Typescript
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of mongoDB using docker
$ docker run --name myname-mongodb -p 27017:27017 -d -t mongo

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# To finish, run the api service
$ yarn dev:run

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork Raphaenn/webScraping-Typescript-puppeteer
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd webScraping-Typescript

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💙 &nbsp;by Raphael Neves 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/raphaelnneves)
