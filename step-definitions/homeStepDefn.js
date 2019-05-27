const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const commonPage = client.page.commonPage();
const homePage = client.page.homePage();
const searchPage = client.page.searchPage();

Given(/^I open Walmart`s Home page$/, async () => {
      return homePage
      .maximizeWindow()
      .navigate();
  });
  
  When(/^I clicked on Home "(.*?)"$/, async text => {
      var items = text.split(">");
      for(let i=0; i < items.length; i++) {
          await commonPage.clickOnTitle(items[i].trim());
      }
  });
  
  When(/^I selected on Towel "(.*?)"$/, async text => {
      await homePage.clickMainstaysBathTowel();
  });

  Then(/^I see the title "(.*?)"$/, async text => {
      await homePage.verify.title(text);
  });
  
  