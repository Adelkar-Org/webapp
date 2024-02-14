const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes/index.js");
const swaggerDocument = require("../documentation/swagger/openapi.json");

const initialize = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // swagger
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { customSiteTitle: "web application" })
  );

  app.use(morgan("dev")); //"combined" //   morgan format

  // app
  routes(app);
  return app;
};

module.exports = initialize;
