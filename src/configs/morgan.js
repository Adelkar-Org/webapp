const morgan = require("morgan");
const logger = require("../utils/logger");
const config = require("./config");

const morganLogger = (app) => {
  app.use(
    morgan(config.app.environment === "production" ? "combined" : "dev", {
      stream: logger.stream,
    })
  );

  // development
  // app.use(morgan("dev"));

  // production
  //   app.use(morgan("combined"));

  //   custon
  //   app.use(
  //     morgan(":method :url :status :res[content-length] - :response-time ms")
  //   );
};

module.exports = morganLogger;
