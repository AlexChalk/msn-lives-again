const axios = require('axios');
const addContact = require('../testHelpers/testHelpers.js').addContact;

module.exports = {
  'create contacts for filter test' : function (browser) {
    addContact(browser, '+15145495327');
    addContact(browser, '+447763253463');
    browser
      .url('http:/localhost:3000/conversations/+15145495327')
      .waitForElementVisible('#messages', 1000);
  },

  'display messages from selected contact' : function (browser) {
    const data = {
      'To' : '+15146137491',
      'From' : '+15145495327',
      'Body' : 'Testing Message',
      'MessageSid' : 'uniquesid1'
    };
    axios.post('http://localhost:3000/sms/incoming', data);
    browser
      .pause(1000)
      .useXpath()
      .click('//a[text()="+15145495327"]')
      .useCss() 
      .pause(1000)
      .waitForElementVisible('#messages', 1000);
    browser.expect.element('#messages').text.to.contain('Test');
  },

  'don\'t display messages if not from selected contact' : 
  function (browser) {
    browser
      .pause(1000)
      .useXpath()
      .click('//a[text()="+447763253463"]')
      .useCss() 
      .pause(1000)
      .waitForElementVisible('#messages', 1000);
    browser.expect.element('#messages').text.not.to.contain('Test');

    browser.end();
  }
};
