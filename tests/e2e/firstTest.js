module.exports = {
  'display homepage' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000);

    browser.expect.element('h2').text.to.contain('Messenger for Roof AI');
  },
  'send message' : function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000);

    browser.expect.element('.message-bubble').text.to.contain('nightwatch')
    browser.end();
  }
};
