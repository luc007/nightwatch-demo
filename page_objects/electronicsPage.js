const brandCommands = {
    clickHeaderElectronics() {
        this.click('@headerElectronics', 1000);
        return this;
    },

    clickTVAndVideo() {
        this.click('@tvAndVideo', 1000);
        return this;
    },

    clickTVs() {
        this.click('@tvs', 1000);
        return this;
    },

    clickSmartTV() {
        this.click('@smartTV', 1000);
        return this;
    },

    clickBrand() {
        this    
        .click('@brand')
        return this;
    },

    clickBrandSamsung() {
        this    
        .click('@brandSamsung')
        return this;
    },

    clickSamsungCurved() {
        this    
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