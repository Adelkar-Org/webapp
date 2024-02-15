const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes/index.js");
const swaggerDocument = require("../documentation/swagger/openapi.json");
const sequelize = require("./configs/database.js");

const initialize = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // sync database
  sequelize
    .sync({ alter: true })
    .then(() => console.log("Database sync successfully."))
    .catch((error) => console.error("Database sync error:", error));

  // swagger
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { customSiteTitle: "web application" })
  );

  // morgan logger
  app.use(morgan("dev")); //"combined" //   morgan format

  // app
  routes(app);
  return app;
};

module.exports = initialize;
