# Nightwatch Demo

Demo test project for [Testing apps with Nightwatch].

***

### Running the test

1) Install [Node.js](http://nodejs.org) if not present and clone the repo:
```sh
$ git clode https://github.com/luc007/nightwatch-demo.git
$ cd nightwatch-demo
$ npm install
```

2) Download the `selenium-server-standalone-3.141.59' or newer from http://selenium-release.storage.googleapis.com/index.html and place it in your `./lib` folder - remember to update `nightwatch.json` if you download a newer version.

3) Install [chromedriver] and [geckodriver]:
```sh
$ npm install chromedriver
$ npm install geckodriver
```

4) To run the test with chrome or firefox or both browsers:
```sh
$ node ./bin/nightwatch.js -e chrome | firefox
$ node ./bin/nightwatch.js -e chrome,firefox
```

5) To run the test with chrome or firefox to generate report.
Note: The report will generated under `./reports` folder with [browser name][version]_Windows_*.html file
```sh
$ node ./bin/nightwatch.js -e chrome | firefox --reporter html-reporter.js
```
