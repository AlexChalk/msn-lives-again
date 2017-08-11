module.exports = {
  'display homepage' : function (browser) {
    browser
      .url('http://localhost:3000/conversations/demo')
      .waitForElementVisible('body', 1000);

    browser.expect.element('h2').text.to.contain('Messenger for Roof AI');
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
      'To' : '5145495327',
      'From' : '5146137491',
      'Body' : 'Incoming',
      'MessageSid' : 'asdlkajshgldkasjhlkjhag'
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
      .setValue('input[id=number]', '+15145495327')
      .click('#contactForm button')
      .pause(1000)
      .waitForElementVisible('#contacts', 1000);
    browser.expect.element('#contacts').text.to.contain('+15145495327');
      
    browser.end();
  }
};
