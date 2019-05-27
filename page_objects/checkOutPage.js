const checkOutCommands = {
    clickCheckout() {
        this    
        .click('@checkOut')
        .api.pause(1000);
        return this;
    },

    clickProceedCheckOut() {
        this    
        .click('@proceedToCheckOut');
        return this;
    },

    clickEditEmailAddress() {
        this    
        .click('@editEmailAddressButton');
        return this;
    },

    setEmailAddress(email) {
        this    
        .setValue('@mailTextField', email);
        return this;
    },

    clickNextButton() {
        this    
        .click('@nextButton');
        return this;
    },

    clickPickupTab() {
        this    
        .click('@pickupTab');
        return this;
    },

    setFirstName(value) {
        this    
        .setValue('@firstNameTextField', value);
        return this;
    },

    setLastName(value) {
        this    
        .setValue('@lastNameTextField', value);
        return this;
    },

    setPostCode(value) {
        this    
        .clearValue('@postcodeTextField')
        .setValue('@postcodeTextField', value);
        return this;
    },

    clickSearchButton() {
        this    
        .click('@searchButton');
        return this;
    },

    clickStoreLocation() {
        this    
        .click('@storeLocation');
        return this;
    },

    clickContinueButton() {
        this.getLocationInView('@continueButton', 1000)
        .waitForElementVisible('@continueButton', 1000)
        .click('@continueButton');
        return this;
    },

    getNumberItemsInCart(text) {
        this    
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