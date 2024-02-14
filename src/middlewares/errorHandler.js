const config = require("../configs/config.js");

// global error handler
const errorHandler = (err, req, res, next) => {
  // Log the error
  if (config.app.environment !== "production") {
    console.error("Error: ", err.message);
    console.error("Stack: ", err.stack);
  } else {
    console.error("Error: ", err.message); // Log minimal error info in production
  }

  // Error format
  const errorResponse = {
    error: err.message || "Internal Server Error",
    ...(config.app.enviornment === "development" && { stack: err.stack }), // stack trace in development only
  };

  // set status code else default to 500
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;
