module.exports = {

    // executes before test run
    before: function(browser) {
        console.log('Before test suite');
        browser
        .maximizeWindow();
    },

//   '@tags': ['walmart'],    // This tags
//   '@disabled': false,      // This will prevent the test module from running.
   'Search for TV': function( browser ) {
        const homePage = browser.page.homePage();
        homePage
            .navigate()
            .assert.title('Online Shopping Canada: Everyday Low Prices at Walmart.ca!')
            .setSearch('TV')
            .submit();

        const electronicPage = browser.page.electronicPage();
        electronicPage
            .assert.title('Smart TVs & 4K TVs | Walmart Canada')
            .clickBrand()
            .verify.elementPresent('@brandSamsung')
            .clickBrandSamsung()
            .clickSamsungCurved();

        const cartPage  = browser.page.addToCardPage();
        cartPage
            .clickAddToCart();
              
        const checkOutPage = browser.page.checkOutPage();
        checkOutPage    
             .clickCheckOut()
             .clickProceedCheckOut()
             .clickEditEmailAddress()
             .setEmailAddress('mung.thai@outlook.com')
             .clickNextButton()
             .clickPickupTab()
             .setFirstName("Mung")
             .setLastName("Thai")
             .setPostCode("K2J4p4")
             .clickSearchButton();
     },

    after: function(browser) {
        console.log('After test suite');
        browser.end();
    },
  };