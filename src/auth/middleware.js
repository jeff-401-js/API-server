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
  const utils = require('./utils.js');
  return (req, res, next) => {

    
    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);
      
      switch (authType.toLowerCase()) {
      case 'basic':
        return utils._authBasic(req, authString, capability, next);
      case 'bearer':
          console.log('authenticate');
        return utils._authBearer(req, authString, capability, next);
      default:
        return utils._authError(next);
      }
    } catch (e) {
      utils._authError(next);
    }
  };
};


