const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageDataSchema = new Schema({
  contact:      { type: String, required: true, },
  user:         { type: String, required: true, },
  body:         { type: String, required: true, },
  direction:    { type: String, required: true, },
  timestamp:    { type: Date,   required: true, },
  messageSid:   { type: String, required: true, },
});

const MessageData = mongoose.model('MessageData', messageDataSchema);

exports.loadAll = (req, res) => {
  MessageData.find()
    .then(messageData => res.status(201).send(messageData))
    .catch(error => res.status(400).send(error));
};

exports.sendSMSAndSave = (req, res) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      to: req.body.to,
      from: req.body.from,
      body: req.body.body
    })

    .then((message) => {
      const messageData = new MessageData({
        contact: req.body.to,
        user: req.body.from,
        direction: 'outgoing',
        body: req.body.body,
        messageSid: message.sid,
        timestamp: Date.now(),
      });
      messageData.save();
      res.status(200).send(messageData);
    })

    .catch(error => res.status(400).send(error));
};

exports.receiveSMSAndSave = (req, res, socket) => {
  socket.emit('action', { 
    type: 'RECEIVE_MESSAGE',
    contact: req.body.From, 
    body: req.body.Body, 
    messageSid: req.body.MessageSid });
  res.send('SMS received');

  const messageData = new MessageData({
    contact: req.body.From,
    user: req.body.To,
    direction: 'incoming',
    body: req.body.Body,
    messageSid: req.body.MessageSid,
    timestamp: Date.now(),
  });
  messageData.save();

};
