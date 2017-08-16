const axios = require('axios');

module.exports = {
  'add contact' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('input[id=number]', '+44123456789')
      .click('#contactForm button')
      .pause(1000)
      .waitForElementVisible('#contacts', 1000);
    browser.expect.element('#contacts').text.to.contain('+44123456789');
  },

  'auto-add new contact if they send a message' : function (browser) {
    const data = {
      'To' : '+15146137491',
      'From' : '+1111111111',
      'Body' : 'Incoming',
      'MessageSid' : 'uniquesid23'
    };
    axios.post('http://localhost:3000/sms/incoming', data);

    browser
      .pause(1000);
    browser.expect.element('#contacts').text.to.contain('+1111111111');

    browser.end();
  }
};
