'use strict';

let utils = module.exports = {};

const User = require('./users-model.js');

utils._authBearer = function(req, authString, capability) {
  return User.authenticateToken(authString)
    .then(user => _authenticate(req, user, capability))
    .catch(_authError);
};

utils._authBasic = function(req, str, capability) {
  // str: am9objpqb2hubnk=
  let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
  let bufferString = base64Buffer.toString();    // john:mysecret
  let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
  let auth = {username, password}; // { username:'john', password:'mysecret' }

  return User.authenticateBasic(auth)
    .then(user => _authenticate(req, user, capability))
    .catch(_authError);
};


utils._authenticate = function(req, user, capability) {

  if ( user && (!capability || (user.can(capability))) ) {
    req.user = user;
    req.token = user.generateToken();
  }
  else {
    _authError();
  }
};

utils._authError = function(next) {
  next('Invalid User ID/Password');
};
