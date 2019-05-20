

module.exports = {
   '@tags': ['walmart'],    // This tags
   '@disabled': false,      // This will prevent the test module from running.
   'Demo Walmart search test using page objects': function( browser ) {
        var walmartPage = browser.page.homePage();

        walmartPage.navigate()
            .assert.title('Online Shopping Canada: Everyday Low Prices at Walmart.ca!')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'TV')
            .submit();

        browser.end();
   }

   
  };