const addToCartPageCommands = {
    clickAddToCart() {
        this.waitForElementVisible('@addToCart', 1000)
        .click('@addToCart')
        return this;
    }
};

module.exports = {
    commands: [addToCartPageCommands],
    elements: {
        addToCart: {
            selector: '//*[text()="Add to cart"]',
            locateStrategy: 'xpath'
        }
    }
};
