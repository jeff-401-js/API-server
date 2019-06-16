'use strict';

/**
 * authenticate Module
 * @module src/auth/authModule/authError
 */

/**
   * @param {object} user - user object containing user credentials
   * @desc Handles all auth errors
   */

function _authError() {
  return (req, res, next) => {
    next('Invalid User ID/Password');
  };
}

/**
 * autherror export
 * @type {Object}
 */

module.exports = _authError;