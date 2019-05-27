const commonPageCommand = {

    clickOnTitle(titleName) {
        this.useXpath()
        .waitForElementVisible('//*[@title="'+ titleName + '"]', 4000)
        .click('//*[@title="'+ titleName + '"]')
        .api.pause(5000);
        return this;
    },

    clickOnText(textName) {
        this.useXpath
        .waitForElementVisible('//*[text()="' + textName + '"]', 1000)
        .click('//*[text()="' + textName + '"]');
        return this;
    },

};

module.exports = {
    commands: [commonPageCommand]
};
