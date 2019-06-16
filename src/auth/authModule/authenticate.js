'use strict';

/**
 * authenticate Module
 * @module src/auth/authModule/authenticate
 */
const _authError = require('./authError.js');
/**
   * @param {object} user - user object containing user credentials
   * @desc Handles authenticating a user and moves onto next middleware or returns and error
   */

function _authenticate(user, capability) {
  return (req, res, next) => {
    if ( user && (!capability || (user.can(capability))) ) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  };
}

module.exports = _authenticate;
