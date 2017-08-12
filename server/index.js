// Define fundamentals
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure parser to work with twilio api
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database
const mongoose = require('mongoose');
const database = process.env.MONGODB_URI 
  || 'mongodb://localhost:27017/twilio-messenger-dev';

mongoose.connect(database, {
  useMongoClient: true,
});

// Create session hash
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore(
  { uri: database, collection: 'mySessions' });

app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  store: store,
  resave: true,
  saveUninitialized: true
}));

// Run server
const server = app.listen(PORT);
const io = require('socket.io')(server);

// Almost all routes 
require('./routes/rootRoutes.js')(app, io);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});
