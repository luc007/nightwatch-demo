var homePage = require('../page_objects/homePage1');

module.exports = {

   // '@tags': ['walmart'],    // This tags
   // '@disabled': false,      // This will prevent the test module from running.
    before: function(browser) {
        console.log('Before test suite');
        homePage(browser)
            .openBrowser()
            .url('http://walmart.ca');
    },

   'Search for TV': function( browser ) {
        homePage(brower)
            .setSearchValue()
            .submit();
   },

    //     const electronicPage = browser.page.electronicPage();
    //     electronicPage
    //         .assert.title('Smart TVs & 4K TVs | Walmart Canada')
    //         .clickBrand()
    //         .verify.elementPresent('@brandSamsung')
    //         .clickBrandSamsung()
    //         .clickSamsungCurved();

    //     const cartPage  = browser.page.addToCardPage();
    //     cartPage
    //         .clickAddToCart();
              
    //     const checkOutPage = browser.page.checkOutPage();
    //     checkOutPage    
    //          .clickCheckOut()
    //          .clickProceedCheckOut()
    //          .clickEditEmailAddress()
    //          .setEmailAddress('mung.thai@outlook.com')
    //          .clickNextButton()
    //          .clickPickupTab()
    //          .setFirstName("Mung")
    //          .setLastName("Thai")
    //          .setPostCode("K2J4p4")
    //          .clickSearchButton();
    //  },

    after: function(browser) {
        console.log('After test suite');
        browser.end();
    },
  };