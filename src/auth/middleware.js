'use strict';

/**
 * middleware Module
 * @module src/auth/middleware
 */

/**
 * auth export
 * @type {Object}
 */


module.exports = (capability) => {
  
  /**
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next function
   * @desc contains all middleware
   */

  return (req, res, next) => {
    const utils = require('./utils.js');

    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
      case 'basic':
        return utils._authBasic(req, authString, capability);
      case 'bearer':
        return utils._authBearer(req, authString, capability);
      default:
        return utils._authError(next);
      }
    } catch (e) {
      utils._authError(next);
    }
  };
};


