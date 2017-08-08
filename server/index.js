const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Run server
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

const twilio = require('twilio');
const io = require('socket.io')(server);

// Configure parser for api
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// Receive SMS messages.
app.post('/sms/incoming', function(req, res) {
  const to = req.body.To;
  const from = req.body.From;
  const body = req.body.Body;
  const messageSid = req.body.MessageSid;

  io.emit('incoming sms event', { to, from, body, messageSid });
  console.log(to, from, body, messageSid);
  res.send('SMS received');
});

// Send SMS messages.
app.post('/sms/outgoing', (req, res) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID;
  let authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      to: req.body.to,
      from: req.body.from,
      body: req.body.body
    })

    .then((message) => res.send(message.sid));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});
