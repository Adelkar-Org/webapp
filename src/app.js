const express = require("express");
const routes = require("./routes");
const helmet = require("helmet");
const { cors, morgan, swagger, config } = require("./configs");
const sequelize = require("./configs/database");

const initialize = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  console.log("config.app.port: ", config.app.port);
  sequelize.authenticate();
  cors(app);
  app.use(helmet());
  swagger(app);
  morgan(app);
  routes(app);
  return app;
};

module.exports = initialize;
