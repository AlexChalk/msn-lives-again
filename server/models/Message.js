exports.sendSMS = (req, res) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      to: req.body.to,
      from: req.body.from,
      body: req.body.body
    })

    .then((message) => res.status(200).send(message.sid));
};

exports.processReceivedSMS = (req, res, socket) => {
  socket.emit('action', { 
    type: 'RECEIVE_MESSAGE',
    contact: req.body.From, 
    body: req.body.Body, 
    messageSid: req.body.MessageSid });
  res.send('SMS received');
};
