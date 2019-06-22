'use strict';

/**
 * @module src/middleware/500
 */

/**
   * @param {object} req - request object
   * @param {object} res - response object
   * @desc server error handler
   * Export object
   * @type {Object}
   */

module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
