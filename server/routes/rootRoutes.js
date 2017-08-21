const Message = require('../models/Message.js');
const Contact = require('../models/Contact.js');

module.exports = (app, io) => {
  // Receive SMS messages.
  app.post('/sms/incoming', function(req, res) {
    Message.receiveSMSAndSave(req, io).then(
      (successMessage) => res.status(201).send(successMessage),
      (err) => res.status(400).send(err));
  });

  // Send SMS messages.
  app.post('/sms/outgoing', (req, res) => {
    Message.sendSMSAndSave(req).then(
      (messageData) => res.status(200).send(messageData),
      (err) => res.status(400).send(err));
  });

  // Load messages.
  app.get('/sms', (req, res) => {
    Message.loadAll().then(
      (messageData) => res.status(200).send(messageData),
      (err) => res.status(400).send(err));
  });

  // Add a contact.
  app.post('/contacts', function(req, res) {
    Contact.saveNew(req).then(
      (contactData) => res.status(200).send(contactData),
      (err) => res.status(400).send(err));
  });

  // Load contacts.
  app.get('/contacts', (req, res) => {
    Contact.loadAll().then(
      (contactData) => res.status(201).send(contactData),
      (err) => res.status(400).send(err));
  });
};
