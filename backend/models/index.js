const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.house_renting = require("./house.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);

db.house_renting.hasMany(db.images, { foreignKey: 'houseId', onDelete: 'CASCADE', hooks: true });
db.images.belongsTo(db.house_renting)

module.exports = db