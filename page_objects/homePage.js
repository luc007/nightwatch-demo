var submitCommands = {
    submit: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@submbitButton', 1000)
        .click('@submbitButton');
    }
}

module.exports = {
  url: 'http://walmart.ca',
  commands: [submitCommands],
  elements: {
    searchBar: 'input[id="global-search"]',
    submbitButton: {
        selector: 'button[type="submit"]'
    },
  }
};