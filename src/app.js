'use strict';

/**
 * API Server Module
 * @module src/app
 */

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( `${cwd}/src/middleware/500.js`);
const notFound = require( `${cwd}/src/middleware/404.js` );
const v1Router = require( `${cwd}/src/api/v1.js` );
const authRouter = require(`${cwd}/src/auth/router.js`);


// Prepare the express app
const app = express();

const options = require('../docs/config/swagger');
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(options);

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('docs'));
app.use('/docs', express.static('docs'));

// Routes
app.use(authRouter);
app.use(v1Router);

// Catchalls
app.use(notFound);
app.use(errorHandler);



let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};
  
/**
 * Export object with app and start method attached
 * @type {Object}
 */

module.exports = {app,start};
