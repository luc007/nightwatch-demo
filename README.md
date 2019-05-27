# Nightwatch Demo

Demo test project for [Testing apps with Nightwatch].

***

### Running the test

1) Install [Node.js](http://nodejs.org) if not present and clone the repo:
```sh
$ git clone https://github.com/luc007/nightwatch-demo.git
$ cd nightwatch-demo
```

2) Install:
```sh
$ npm install --save-dev nightwatch nightwatch-api cucumber cucumber-html-reporter cucumber-pretty selenium-server dirp chromedriver geckodriver
```

3) To run the test:
```sh
$ npm run test:chrome
```

4) To run the test with chrome or firefox to generate report.
Note: The report will generated under `./reports` folder, it will launch cucumber_report.html 
