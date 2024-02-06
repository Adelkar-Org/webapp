const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../documentation/swagger/openapi.json");
const errorHandler = require("./middlewares/errorHandler.js");

const initialize = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // cors
  app.use(cors());

  app.use(errorHandler);
  // swagger
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { customSiteTitle: "web application" })
  );
  // app
  routes(app);
  return app;
};

module.exports = initialize;
