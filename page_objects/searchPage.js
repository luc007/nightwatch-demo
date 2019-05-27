 
const searchCommands = {

  setSearch(value) {
    this  
    .setValue('@searchBar', value)
    .click('@submitButton')
    return this;
  },

  submit() {
      this 
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