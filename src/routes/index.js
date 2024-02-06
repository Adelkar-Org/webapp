const healthCheckRouter = require("./healthCheck.routes.js");
module.exports = (app) => {
  app.use("/healthz", healthCheckRouter);
};
