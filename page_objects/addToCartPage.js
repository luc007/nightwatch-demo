const addToCartPageCommands = {
    clickAddToCart() {
        this.waitForElementVisible('@addToCart', 2000)
        .click('@addToCart')
        .api.pause(1000)
        return this;
    }
};

module.exports = {
    commands: [addToCartPageCommands],
    elements: {
        addToCart: {
            selector: '[class="css-1i45fk4 edzik9p0"]',
            locateStrategy: 'css selector'
        }
    }
};
