'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const cwd = process.cwd();

const express = require('express');

const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);
const auth = require(`${cwd}/src/auth/middleware.js`);

const router = express.Router();

// Evaluate the model, dynamically
router.param('model', modelFinder);


/**
 * Get a list of records for model provided
 * @route GET /{model}
 * @param {string} model.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Creates a list of records for model provided
 * @route POST /{model}
 * @param {string} model.path.required - Resource model name
 * @consumes application/json application/xml
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Get a list of records for model id provided
 * @route GET /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Modifies of records for model provided
 * @route PUT /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @consumes application/json application/xml
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Deletes records for model provided
 * @route DELETE /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

// API Routes
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', auth('create'), handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id',auth('update'), handlePut);
router.patch('/api/v1/:model/:id',auth('update'), handlePut);
router.delete('/api/v1/:model/:id',auth('delete'), handleDelete);

// Route Handlers

/**
   * @function handleGetAll
   * @param {object} request - request object
   * @param {object} response - response object
   * @param {function} next - calls next middleware
   * @desc Middleware that handles get all route call
   */

function handleGetAll(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
   * @function handleGetOne
   * @param {object} request - request object
   * @param {object} response - response object
   * @param {function} next - calls next middleware
   * @desc Middleware that handles get one call
   */

function handleGetOne(request,response,next) {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
   * @function handlePost
   * @param {object} request - request object
   * @param {object} response - response object
   * @param {function} next - calls next middleware
   * @desc Middleware that handles post route
   */

function handlePost(request,response,next) {
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
   * @function handlePut
   * @param {object} request - request object
   * @param {object} response - response object
   * @param {function} next - calls next middleware
   * @desc Middleware that handles put route
   */

function handlePut(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
   * @function handleDelete
   * @param {object} request - request object
   * @param {object} response - response object
   * @param {function} next - calls next middleware
   * @desc Middleware that handles delete route
   */

function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * Export object
 * @type {Object}
 */

module.exports = router;
