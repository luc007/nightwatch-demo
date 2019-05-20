module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'estert')
        .waitForElementVisible('button[name=btnK]', 3000)
        .click('button[name=btnK]')
        .pause(1000)
        .assert.containsText('ol#rso li:first-child',
          'Rembrandt - Wikipedia')
        .end();
    }
  };
  