const Sequelize = require("sequelize");
const config = require("./config");

console.log("config.database.name: ", config.database);
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
      .then(() => console.log("Database connection and sync successfully."))
      .catch((err) => {
        console.error("Database sync error.");
        console.log(err);
      });
  })
  .catch((err) => {
    console.error("Database connection error.");
    console.log(err);
  });

module.exports = sequelize;
