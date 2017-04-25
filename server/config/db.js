'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.methods = require('../models/Method.js')(sequelize, Sequelize);
db.projects = require('../models/Project.js')(sequelize, Sequelize);
db.tests = require('../models/Test.js')(sequelize, Sequelize);
db.testmethods = require('../models/TestMethod.js')(sequelize, Sequelize);
db.users = require('../models/User.js')(sequelize, Sequelize);


//Relations
db.methods.belongsToMany(db.tests,{ through : db.testmethods });
db.tests.belongsToMany(db.methods,{ through : db.testmethods });
db.projects.hasMany(db.tests,{as : 'Tests'});
db.users.hasMany(db.methods,{as :'Methods'});
db.users.hasMany(db.tests,{as : 'Tests'});
module.exports = db;