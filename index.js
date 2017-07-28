/*  =================================

   import Node Modules

   ===============================*/

const express = require('express'); // fast, unopinionated, minimalist web framework for node.
const app = express(); // initiate Express application
const mongoose = require('mongoose');  // Node tool for mongoDB
const config = require('./config/database') // mongoose config
const path = require('path');


//   Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could not connect to the database: ', err);
  } else {
    // console.log('Your secrete is "' + config.secrete + '"');
    console.log('Connected to the database: ' + config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on Port 8080');
});
