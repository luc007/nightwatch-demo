
const homePageCommand = {
    clickMainstaysBathTowel() {
        this.waitForElementVisible('@mainstaysBathTowel', 3000)
        .click('@mainstaysBathTowel')
        .api.pause(3000);
        return this;
    }
};

module.exports = {
    url: 'https://www.walmart.ca/en/home/N-105',
    commands: [homePageCommand],
    elements: {
        mainstaysBathTowel: {
            selector: '#thumb-6000197000410 > a > div.product-details-container',
            locateStrategy: 'css selector'
        }
    }
};