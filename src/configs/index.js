const config = require("./config");
const sequelize = require("./database");
const cors = require("./cors");
const morgan = require("./morgan");
const swagger = require("./swagger");

module.exports = {
  config,
  sequelize,
  cors,
  morgan,
  swagger,
};
