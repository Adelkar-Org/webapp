const healthCheckRouter = require("./healthCheck.routes");
const v1Router = require("./v1");

module.exports = (app) => {
  app.use("/healthz", healthCheckRouter);
  app.use("/v1", v1Router);
};
