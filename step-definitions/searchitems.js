const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const mainPage = client.page.mainPage();
const samsungTVPage = client.page.electronicPage();
const addToCartPage = client.page.addToCartPage();
const checkoutPage = client.page.checkoutPage();

Given(/^I open Walmart`s search page$/, async () => {
  return mainPage
    .maximizeWindow()
    .navigate()
    .waitForElementVisible('body', 1000)
});

When(/^I entered for search "(.*?)"$/, async text => {
    await mainPage.setSearch(text);
});

When(/^I selected an item "(.*?)"$/, async text => {
    await samsungTVPage.clickSamsungCurved();
});

When(/^I clicked Add to cart$/, async () => {
    await addToCartPage.clickAddToCart();
});

When(/^I clicked Checkout$/, async () => {
    await checkoutPage.clickCheckout();
});
 
 Then(/^I should see the item in shopping cart "(.*?)"$/, async text => {
     await checkoutPage.getNumberItemsInCart(text);
 });

Then(/^the title is "(.*?)"$/, async text => {
    await mainPage.assert.title(text);
})

