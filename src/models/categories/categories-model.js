'use strict';

const Model = require('../memory-model.js');

/**
 * @module src/models/categories/categories-model
 */

/**
 * @typedef categories-model
 * @property {schema} - Model schema from child Class
 */

const schema = {
  _id: {required:true},
  name: {required:true},
};

/**
 * @Class Categories Model
 * @property {class} - class extends from model
 */

class Categories extends Model {}

/**
 * Export object
 * @type {Object}
 */

module.exports = new Categories(schema);
