module.exports = {
  'create contacts for filter test' : function (browser) {
    browser
      .url('http:/localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('input[id=number]', '+15145495327')
      .click('#contactForm button')
      .pause(1000)
      .setValue('input[id=number]', '+447763253463')
      .click('#contactForm button')
      .pause(1000)
      .url('http:/localhost:3000/conversations/+15145495327')
      .waitForElementVisible('#messages', 1000);
  },

  'display messages from selected contact' : function (browser) {
    const axios = require('axios');
    const data = {
      'To' : '+15146137491',
      'From' : '+15145495327',
      'Body' : 'Filter 1',
      'MessageSid' : 'uniquesid1'
    };
    axios.post('http://localhost:3000/sms/incoming', data);
    browser
      .pause(1000);
    browser.expect.element('#messages').text.to.contain('Filter 1');
  },

  'don\'t display messages if not from selected contact' : 
  function (browser) {
    browser
      .pause(1000)
      .url('http:/localhost:3000/conversations/+447763253463')
      .waitForElementVisible('#messages', 1000);
    browser.expect.element('#messages').text.not.to.contain('Incoming');

    browser.end();
  }
};
