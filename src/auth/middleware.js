'use strict';

/**
 * middleware Module
 * @module src/auth/middleware
 */

/**
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc contains all middleware
   */


module.exports = (capability) => {
  
  return (req, res, next) => {
    const utils = require('./utils.js');
    // const _authBasic = require('./authModule/authBasic.js'); 
    // const _authBearer = require('./authModule/authBearer.js');
    // const _authError = require('./authModule/authError.js');
    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
      case 'basic':
        return utils._authBasic(req, authString, capability);
      case 'bearer':
        return utils._authBearer(req, authString, capability);
      default:
        return utils._authError();
      }
    } catch (e) {
      utils._authError();
    }
  };
};