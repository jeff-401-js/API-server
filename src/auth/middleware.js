'use strict';

/**
   * @module middleware module
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc contains all middleware
   */


const User = require('./users-model.js');

module.exports = (capability) => {
  
  return (req, res, next) => {
    const _authBasic = require('./authModule/authBasic.js'); 
    const _authBearer = require('./authModule/authBearer.js');
    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
      }
    } catch (e) {
      _authError();
    }


    function _authenticate(user) {
      if ( user && (!capability || (user.can(capability))) ) {
        req.user = user;
        req.token = user.generateToken();
        next();
      }
      else {
        _authError();
      }
    }

    function _authError() {
      next('Invalid User ID/Password');
    }

  };
  
};