# API-server
API server


### Author: Student/Group Name
Jeff


### Links and Resources
* [submission PR](https://github.com/jeff-401-js/API-server/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/API-server)
* [heroku-master](https://pure-refuge-90526.herokuapp.com/)

#### Documentation
* [UML-Data-Flow](https://photos.app.goo.gl/zHoXJjUcaz3367Uk7)

### Setup
#### `.env` requirements
* `PORT` - 3000
* `SECRET` - somestring
* `MONGODB_URI` - mongodb://localhost:27017/class-13
* `EXPIRE_TIME` - 15m

#### Running the app
* `nodemon index.js`
* Endpoint: `/role`
  * sets up new role addition
* Endpoint: `/signup`
  * starter code endpoint not used in this project.
* Endpoint: `/signin`
  * starter code endpoint not used in this project.
* Endpoint: `/oauth`
  * authorization route
* Endpoint: `/roles`
  * initialize roles
* Endpoint `//api/v1/:model`
  * handlegetall route
* Endpoint `/api/v1/:model`
  * auth(create) handlepost
* Endpoint `//api/v1/:model/:id`
  * handlegetone
* Endpoint `/api/v1/:model/:id`
  * auth(update) handleput
* Endpoint `/api/v1/:model/:id`
  * auth(update) handleput
* Endpoint `/api/v1/:model/:id`
  * auth(delete) delete


#### Tests
* How do you run tests?
npm test `filename.test.js`
