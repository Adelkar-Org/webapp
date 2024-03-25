const Sequelize = require("sequelize");
const config = require("./config");
const logger = require("../utils/logger");

// console.log("config.database.name: ", config.database);
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
  .then(() => {
    sequelize
      .sync({ alter: true, force: false })
      .then(() => logger.info("Database connection and sync successfully."))
      .catch((err) => {
        logger.error({ message: "Database sync error.", error: err });
      });
  })
  .catch((err) => {
    logger.error({ message: "Database connection error.", error: err });
  });

module.exports = sequelize;
