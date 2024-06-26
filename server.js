const { config } = require("./src/configs/");
const initialize = require("./src/app.js");
const errorHandler = require("./src/middlewares/errorHandler.js");
const logger = require("./src/utils/logger.js");

// Initialize the app
const app = initialize();

// Start the server
app.listen(config.app.port, () => {
  // console.log(`Server listening at http://localhost:${config.app.port}/healthz`);
  logger.info(
    `Server listening at http://localhost:${config.app.port}/healthz`
  );
});

// Error handler
app.use(errorHandler);
