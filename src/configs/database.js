const Sequelize = require("sequelize");
const config = require("./config.js");

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

sequelize
  .authenticate()
  .then(function () {
    console.log("database connected");
  })
  .catch(function (err) {
    console.error("Sequelize connection error.");
    console.log(err);
  });

module.exports = sequelize;
