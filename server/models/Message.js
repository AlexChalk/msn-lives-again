const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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

exports.loadAll = () => {
  return new Promise((resolve, reject) => {
    MessageData.find()
      .then(messageData => resolve(messageData))
      .catch(() => reject('Contact load failed.'));
  });
};

exports.sendSMSAndSave = (req) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  let userNumber = process.env.TWILIO_PHONE_NUMBER;

  return new Promise((resolve, reject) => {
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
        to: req.body.to,
        from: userNumber,
        body: req.body.body
      })

      .then((message) => {
        const messageData = new MessageData({
          contact: req.body.to,
          user: userNumber,
          direction: 'outgoing',
          body: req.body.body,
          messageSid: message.sid,
          timestamp: Date.now(),
        });
        messageData.save();
        resolve(messageData);
      })
      .catch(() => reject('Missing message parameters.'));
  });
};


exports.receiveSMSAndSave = (req, socket) => {
  let userNumber = process.env.TWILIO_PHONE_NUMBER;
  return new Promise((resolve, reject) => {

    try { 
      socket.emit('action', { 
        type: 'RECEIVE_MESSAGE',
        contact: req.body.From, 
        body: req.body.Body, 
        messageSid: req.body.MessageSid });

      const messageData = new MessageData({
        contact: req.body.From,
        user: userNumber,
        direction: 'incoming',
        body: req.body.Body,
        messageSid: req.body.MessageSid,
        timestamp: Date.now(),
      });

      messageData.save();
      resolve('SMS received');
    } 
    catch(error) {
      console.log(error);
      reject('Problem processing incoming message');
    }
  });
};
