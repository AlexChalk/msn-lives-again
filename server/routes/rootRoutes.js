const Message = require('../models/Message.js');
const Contact = require('../models/Contact.js');

module.exports = (app, io) => {
  // Add a contact.
  app.post('/contacts', function(req, res) {
    Contact.saveNew(req, res);
  });

  // Receive SMS messages.
  app.post('/sms/incoming', function(req, res) {
    Message.receiveSMSAndSave(req, res, io);
  });

  // Send SMS messages.
  app.post('/sms/outgoing', (req, res) => {
    Message.sendSMSAndSave(req, res);
  });

  // Load messages.
  app.get('/sms', (req, res) => {
    Message.loadAll(req, res);
  });

  // Load contacts.
  app.get('/contacts', (req, res) => {
    Contact.loadAll(req, res);
  });
};
