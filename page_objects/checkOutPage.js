
const checkOutCommands = {
    clickCheckOut() {
        this.waitForElementVisible('@checkOut', 1000)
        .click('@checkOut')
        .api.pause(1000);

        return this;
    },

    clickProceedCheckOut() {
        this.waitForElementVisible('@proceedToCheckOut', 1000)
        .click('@proceedToCheckOut')
        .api.pause(2000);

        return this;
    },

    clickEditEmailAddress() {
        this.waitForElementVisible('@editEmailAddressButton', 1000)
        .click('@editEmailAddressButton');

        return this;
    },

    setEmailAddress(email) {
        this.waitForElementVisible('@editEmailAddressButton', 1000)
        .setValue('@mailTextField', email)
        .api.pause(1000);

        return this;
    },

    clickNextButton() {
        this.waitForElementVisible('@nextButton', 1000)
        .click('@nextButton')
        .api.pause(1000);

        return this;
    },

    clickPickupTab() {
        this.waitForElementVisible('@pickupTab', 1000)
        .click('@pickupTab')
        .api.pause(1000);

        return this;
    },

    setFirstName(value) {
        this.waitForElementVisible('@firstNameTextField', 1000)
        .setValue('@firstNameTextField', value)
        .api.pause(1000);

        return this;
    },

    setLastName(value) {
        this.waitForElementVisible('@lastNameTextField', 1000)
        .setValue('@lastNameTextField', value)
        .api.pause(1000);

        return this;
    },

    setPostCode(value) {
        this.waitForElementVisible('@postcodeTextField', 1000)
        .clearValue('@postcodeTextField')
        .setValue('@postcodeTextField', value)
        .api.pause(1000);

        return this;
    },

    clickSearchButton() {
        this.waitForElementVisible('@searchButton', 1000)
        .click('@searchButton')
        .api.pause(3000);

        return this;
    }

};

module.exports = {
    commands: [checkOutCommands],
    elements: {
        checkOut: {
            selector: '//*[text()="Checkout"]',
            locateStrategy: 'xpath'
        },
        proceedToCheckOut: '#cart-aside-checkout-btn',
        editEmailAddressButton: {
            selector: '//*[@id="checkout-step1-form"]',
            locateStrategy: 'xpath'
        },
        mailTextField: 'input[id="email"]',
        nextButton: 'button[id="step-1-next"]',
        pickupTab: {
            selector: '//*[@id="shipping-pickup-label"]',
            locateStrategy: 'xpath'
        },
        firstNameTextField: 'input[id="pickup-first-name"]',
        lastNameTextField: 'input[id="pickup-last-name"]',
        postcodeTextField: 'input[id="pickup-postal-code-search"]',
        searchButton: 'button[id="pickup-postal-code-search-btn"]'
    }
}