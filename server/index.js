// Define fundamentals
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure parser to work with twilio api
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Run server
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
const io = require('socket.io')(server);

// Almost all routes 
require('./routes/rootRoutes.js')(app, io);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});
