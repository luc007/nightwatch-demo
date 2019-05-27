const commonPageCommand = {

    clickOnTitle(titleName) {
        this.useXpath()
        .click('//*[@title="'+ titleName + '"]')
        .api.pause(5000);
        return this;
    },

    clickOnText(textName) {
        this.useXpath
        .click('//*[text()="' + textName + '"]');
        return this;
    },

};

module.exports = {
    commands: [commonPageCommand]
};
