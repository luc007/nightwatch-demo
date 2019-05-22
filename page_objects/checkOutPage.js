
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
        nextButton: 'button[id="step-1-next"]'

    }
}