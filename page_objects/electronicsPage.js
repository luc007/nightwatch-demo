
const pauseTime = 1000;

const brandCommands = {
    clickOnId(id) {
        this.useXpath()
        .waitForElementVisible('//*[@id="'+ id + '"]', pauseTime)
        .click('//*[@id="'+ id + '"]');
        return this;
    },

    clickOnTitle(title) {
        this.useXpath()
        .waitForElementVisible('//*[@title="'+ title + '"]', pauseTime)
        .click('//*[@title="'+ title + '"]')
        .api.pause(2000);
        return this;
    },

    clickHeaderElectronics() {
        this.click('@headerElectronics', pauseTime);
        return this;
    },

    clickTVAndVideo() {
        this.click('@tvAndVideo', pauseTime);
        return this;
    },

    clickTVs() {
        this.click('@tvs', pauseTime);
        return this;
    },

    clickSmartTV() {
        this.click('@smartTV', pauseTime);
        return this;
    },

    clickBrand() {
        this.waitForElementVisible('@brand', pauseTime)
        .click('@brand')
        return this;
    },

    clickBrandSamsung() {
        this.waitForElementVisible('@brandSamsung', pauseTime)
        .click('@brandSamsung')
        return this;
    },

    clickSamsungCurved() {
        this.waitForElementVisible('@samsungCurved', 2000)
        .click('@samsungCurved')
        return this;
    },
};


module.exports = {
    url: "https://www.walmart.ca/en/electronics/N-103",
    commands: [brandCommands],
    elements: {
        headerElectronics: '#header-electronics',
        tvAndVideo: {
           selector: '//div[@id="jalapeno-template"]//article[@title="TV & Video"]',
           locateStrategy: 'xpath'
        },
        tvs: {
            selector: '//div[@id="jalapeno-template"]//article[@title="TVs"]',
            locateStrategy: 'xpath'
         },
         smartTV: {
            selector: '//div[@id="jalapeno-template"]//a[@alt="Smart TVs"]',
            locateStrategy: 'xpath'
         },
         brand: '#rm-Brand',
        brandSamsung: '#rmi-brand-id-0',
        samsungCurved: '#thumb-6000198322352'
    }
};