'use strict';

/**
 * API Server Module
 * @module src/auth/authModule/authBearer
 */


const User = require('./users-model.js');
const _authenticate = require('./authenticate.js');
const _authError = require('./authError.js');

/**
   * @param {object} authString - user object containing user credentials
   * @desc Handles authenticating a user and moves onto next middleware or returns and error
   */


function _authBearer(authString) {
  return User.authenticateToken(authString)
    .then(user => _authenticate(user))
    .catch(_authError);
}

/**
 * authbearer export
 * @type {Object}
 */

module.exports = _authBearer;