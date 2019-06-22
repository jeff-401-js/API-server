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

#### Modules
* `index.js`
* `src folder`
*   * `api folder`
*   * * `v1.js`
*   * `auth folder`
*   * * `oauth folder`
*   * * * `google.js`
*   * * `middleware.js`
*   * * `roles-model.js`
*   * * `router.js`
*   * * `users-model.js`
*   * * `utils.js`
*   * `middleware folder`
*   * * `404.js`
*   * * `500.js`
*   * * `model-finder.js`
*   * `models folder`
*   * * `categories folder`
*   * * * `categories-model.js`
*   * * `players folder`
*   * * * `players-model.js`
*   * * * `players-schema.js`
*   * * `teams folder`
*   * * * `teams-model.js`
*   * * * `teams-schema.js`
*   * * `memory-model.js`
*   * * `monngo-model.js`
*   * `app.js`


### Setup
*  `npm i`

#### `.env` requirements - see sample-env or look below
* `PORT` - 3000
* `SECRET` - somestring
* `MONGODB_URI` - mongodb://localhost:27017/dbname 
* `TOKEN_TIME` - 15m
* `SINGLE_USE_TOKENS` - false or true (much easier to test with false)
* `API_URL` - http://localhost:3000
* `GOOGLE_CLIENT_ID` - kljljlkjl
* `GOOGLE_CLIENT_SECRET` - lkjlkjlkjl


* Add Roles with capabilities to db by going to --> localhost:3000/role in postman then adding

{
	"role": "user",
	"capabilities": ["read"]
}

{
	"role": "editor",
	"capabilities": ["create", "read", "update"]
}

{
	"role": "admin",
	"capabilities": ["create", "read", "update", "delete", "superuser"]
}

#### Running the app
* `npm run`
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
