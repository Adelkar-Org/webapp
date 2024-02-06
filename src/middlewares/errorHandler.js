const config = require("../configs/config.js");

// global error handler
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Error format
  const errorResponse = {
    success: false,
    message: err.message || "Internal Server Error",
    ...(config.app.enviornment === "development" && { stack: err.stack }), // stack trace in development only
  };

  // set status code else default to 500
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
