module.exports = {
  'display homepage' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000);

    browser.expect.element('h2').text.to.contain('Messenger for Roof AI');

    browser.end();
  }
};
