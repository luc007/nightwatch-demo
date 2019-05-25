
const puaseTime = 1000;

const brandCommands = {
    clickBrand() {
        this.waitForElementVisible('@brand', puaseTime)
        .click('@brand')
        return this;
    },

    clickBrandSamsung() {
        this.waitForElementVisible('@brandSamsung', puaseTime)
        .click('@brandSamsung')
        return this;
    },

    clickSamsungCurved() {
        this.waitForElementVisible('@samsungCurved', puaseTime)
        .click('@samsungCurved')
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