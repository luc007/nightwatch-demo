
const puaseTime = 1000;

const brandCommands = {
    clickBrand() {
        this.waitForElementVisible('@brand', puaseTime)
        .click('@brand')
        .api.pause(puaseTime);
        return this;
    },

    clickBrandSamsung() {
        this.waitForElementVisible('@brandSamsung', puaseTime)
        .click('@brandSamsung')
        .api.pause(puaseTime);
        return this;
    },

    clickSamsungCurved() {
        this.waitForElementVisible('@samsungCurved', puaseTime)
        .click('@samsungCurved')
        .api.pause(4000);
        return this;
    }
};

module.exports = {
    commands: [brandCommands],
    elements: {
        brand: '#rm-Brand',
        brandSamsung: '#rmi-brand-id-0',
        samsungCurved: '#thumb-6000198322352'
    }
};