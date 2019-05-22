 
const searchCommands = {
  setSearch(value) {
    this.waitForElementVisible('@searchBar', 1000)
    .setValue('@searchBar', value)
    .api.pause(1000);

    return this;
  },

  submit() {
      this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .api.pause(1000);

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