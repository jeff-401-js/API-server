'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
// Start up DB Server

const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/app.js').start(process.env.PORT);
