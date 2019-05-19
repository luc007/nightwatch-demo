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

2) Download the `selenium-server-standalone-3.141.59' or newer from http://selenium-release.storage.googleapis.com/index.html and place it in your `lib` folder - remember to update `nightwatch.json` if you download a newer version.

3) Download the `chromedriver` from http://chromedriver.storage.googleapis.com/index.html and `geckodriver` from https://github.com/mozilla/geckodriver and place both drivers in your `lib\drivers` folder

4) To run the test with chrome and firefox peers
```sh
$ nightwatch.js --env chrome, firefox
```
