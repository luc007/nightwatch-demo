const pauseTime = 1000;

const checkOutCommands = {
    clickCheckout() {
        this.waitForElementVisible('@checkOut', pauseTime)
        .click('@checkOut')
        .api.pause(pauseTime);
        return this;
    },

    clickProceedCheckOut() {
        this.waitForElementVisible('@proceedToCheckOut', pauseTime)
        .click('@proceedToCheckOut');
        return this;
    },

    clickEditEmailAddress() {
        this.waitForElementVisible('@editEmailAddressButton', pauseTime)
        .click('@editEmailAddressButton');
        return this;
    },

    setEmailAddress(email) {
        this.waitForElementVisible('@editEmailAddressButton', pauseTime)
        .setValue('@mailTextField', email);
        return this;
    },

    clickNextButton() {
        this.waitForElementVisible('@nextButton', pauseTime)
        .click('@nextButton');
        return this;
    },

    clickPickupTab() {
        this.waitForElementVisible('@pickupTab', pauseTime)
        .click('@pickupTab');
        return this;
    },

    setFirstName(value) {
        this.waitForElementVisible('@firstNameTextField', pauseTime)
        .setValue('@firstNameTextField', value);
        return this;
    },

    setLastName(value) {
        this.waitForElementVisible('@lastNameTextField', pauseTime)
        .setValue('@lastNameTextField', value);
        return this;
    },

    setPostCode(value) {
        this.waitForElementVisible('@postcodeTextField', pauseTime)
        .clearValue('@postcodeTextField')
        .setValue('@postcodeTextField', value);
        return this;
    },

    clickSearchButton() {
        this.waitForElementVisible('@searchButton', pauseTime)
        .click('@searchButton');
        return this;
    },

    clickStoreLocation() {
        this.waitForElementVisible('@storeLocation', pauseTime)
        .click('@storeLocation');
        return this;
    },

    clickContinueButton() {
        this.getLocationInView('@continueButton', pauseTime)
        .waitForElementVisible('@continueButton', pauseTime)
        .click('@continueButton');
        return this;
    },

    getNumberItemsInCart(text) {
        this.waitForElementVisible('body', 1000)
        .getText('@itemsInShoppingCart', function(result) {
            if(result.status !== -1) {
                this.assert.equal(result.text, text);
            }
        });
        return this;
    }
};

module.exports = {
    commands: [checkOutCommands],
    elements: {
        checkOut: {
            selector: '//*[@id="atc-root"]//button[text()="Checkout"]',
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
        searchButton: 'button[id="pickup-postal-code-search-btn"]',
        storeLocation: {
            selector: '//*[@id="store-locations"]/li[1]/label/input#store-locations > li:nth-child(1) > label > input',
            locateStrategy: 'css selector'
        },
        continueButton: {
            selector: '/html//div[@id="step-2a"]//button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        itemsInShoppingCart: {
            selector: 'nav-cart'
        }
    }
};