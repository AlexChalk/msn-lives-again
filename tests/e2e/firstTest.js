module.exports = {
  'display homepage' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000);

    browser.expect.element('h2').text.to.contain('Messenger for Roof AI');
  },

  'set up message test' : function (browser) {
    browser
      .url('http:/localhost:3000/conversations/+15145495327')
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
    const axios = require('axios');
    const data = {
      'To' : '+15146137491',
      'From' : '+15145495327',
      'Body' : 'Incoming',
      'MessageSid' : 'uniquesid23'
    };
    axios.post('http://localhost:3000/sms/incoming', data);
    browser
      .pause(1000);
    browser.expect.element('#messages').text.to.contain('Incoming');
  },

  'add contact' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('input[id=number]', '+44123456789')
      .click('#contactForm button')
      .pause(1000)
      .waitForElementVisible('#contacts', 1000);
    browser.expect.element('#contacts').text.to.contain('+44123456789');
      
    browser.end();
  }
};
