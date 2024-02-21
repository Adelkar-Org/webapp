const morgan = require("morgan");

const morganLogger = (app) => {
  // development
  app.use(morgan("dev"));

  // production
  //   app.use(morgan("combined"));

  //   custon
  //   app.use(
  //     morgan(":method :url :status :res[content-length] - :response-time ms")
  //   );
};

module.exports = morganLogger;
