'use strict';

const rootDir = process.cwd();
const categories = require(`${rootDir}/src/models/categories/categories-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let obj = {name: 'Bunnies'};
    return categories.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a category', () => {
    let obj = {name: 'Bunnies'};
    return categories.post(obj)
      .then(record => {
        return categories.get(record._id)
          .then(cat => {
            Object.keys(obj).forEach(key =>{
              expect(cat[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});