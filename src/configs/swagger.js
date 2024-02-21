const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../documentation/swagger/openapi.json");

// create a swagger middleware to handle the documentation
const swagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customSiteTitle: "Web App API Documentation",
      basicAuth: {
        username: "jane.doe@example.com",
        password: "skdjfhskdfjhg",
      },
    })
  );
};

module.exports = swagger;
