const { config } = require("../configs");
const ApiError = require("../utils/apiError");

// global error handler
const errorHandler = (err, req, res, next) => {
  const isDevelopment = config.app.environment === "development";
  let { statusCode, message } = err;

  if (!(err instanceof ApiError)) {
    statusCode = 500;
    message = "Internal Server Error";
  }

  // Log the error
  if (isDevelopment) {
    logger.error({ error: err });
  } else {
    logger.error("Error: ", message); // Log minimal error info in production
  }

  res.status(statusCode).json({
    error: true,
    message: message,
    ...(isDevelopment && { stack: err.stack }),
  });
};

module.exports = errorHandler;
