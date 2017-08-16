const axios = require('axios');
const addContact = require('../testHelpers/testHelpers.js').addContact;

module.exports = {
  'set up message test' : function (browser) {
    addContact(browser, '+15145495327');
    addContact(browser, '+447763253463');
    browser
      .url('http:/localhost:3000/conversations/+15145495327')
      .useXpath()
      .click('//a[text()="+15145495327"]')
      .useCss() 
      .waitForElementVisible('#messages', 1000);
  },

  'send message' : function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('input[id=message]', 'nightwatch')
      .waitForElementVisible('#messageForm button', 1000)
      .click('#messageForm button')
      .pause(1000)
      .waitForElementVisible('#messages', 1000);

    browser.expect.element('#messages').text.to.contain('nightwatch');
  },
  'receive message' : function (browser) {
    const data = {
      'To' : '+15146137491',
      'From' : '+15145495327',
      'Body' : 'Incoming',
      'MessageSid' : 'uniquesid2'
    };
    axios.post('http://localhost:3000/sms/incoming', data);
    browser
      .pause(1000);
    browser.expect.element('#messages').text.to.contain('Incoming');

    browser.end();
  }
};
