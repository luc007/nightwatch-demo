const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const electronicsPage = client.page.electronicsPage();
const commonPage = client.page.commonPage();

Given(/^I open Walmart`s Electronics page$/, async () => {
  return electronicsPage
    .maximizeWindow()
    .navigate()
});

When(/^I clicked on "(.*?)"$/, async text => {
    var items = text.split(">");
    for(let i=0; i < items.length; i++) {
        await commonPage.clickOnTitle(items[i].trim());
    }
});

Then(/^I selected "(.*?)"$/, async text => {
    await electronicsPage.clickSamsungCurved();
})

