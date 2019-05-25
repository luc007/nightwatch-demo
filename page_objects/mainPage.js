 
const searchCommands = {

  setSearch(value) {
    this.waitForElementVisible('@searchBar', 1000)
    .setValue('@searchBar', value)
    .click('@submitButton')
    return this;
  },

  submit() {
      this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      return this;   // Return page object for chaining
    }
};

module.exports = {
  url: 'http://walmart.ca',
  commands: [searchCommands],
  elements: {
    searchBar: {
      selector: 'input[id="global-search"]',
      locateStrategy: 'css selector'
    },
    submitButton: {
      selector: 'button[type="submit"]'
    }
  }
};