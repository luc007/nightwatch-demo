const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const electronicsPage = client.page.electronicsPage();
const searchPage = client.page.searchPage();

Given(/^I open Walmart`s Electronics page$/, async () => {
  return electronicsPage
    .maximizeWindow()
    .navigate()
    .waitForElementVisible('body', 5000);
});

When(/^I clicked on "(.*?)"$/, async text => {
    var items = text.split(">");
    for(let i=0; i < items.length; i++) {
        await electronicsPage.clickOnTitle(items[i].trim());
    }
});

Then(/^I selected "(.*?)"$/, async text => {
    await electronicsPage.clickSamsungCurved();
})

