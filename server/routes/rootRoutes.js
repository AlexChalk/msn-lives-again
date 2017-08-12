const Message = require('../models/Message.js');

module.exports = (app, io) => {
  // Add a contact.
  app.post('/contacts', function(req, res) {
    res.send('Contact added');
  });

  // Receive SMS messages.
  app.post('/sms/incoming', function(req, res) {
    Message.processReceivedSMS(req, res, io);
  });

  // Send SMS messages.
  app.post('/sms/outgoing', (req, res) => {
    Message.sendSMS(req, res);
  });
};
