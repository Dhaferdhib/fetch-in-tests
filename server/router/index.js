'use strict'

const routes = [
  require('./routes/methods')/*,
  require('./routes/projects'),
  require('./routes/tests'),
  require('./routes/users')*/
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};