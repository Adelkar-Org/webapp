const config = require("./src/configs/config.js");
const initialize = require("./src/app.js");
const errorHandler = require("./src/middlewares/errorHandler.js");

// Initialize app
const app = initialize();

// Error handler
app.use(errorHandler);

// Start server
app.listen(config.app.port, () => {
  console.log(
    `Server listening at http://localhost:${config.app.port}/healthz`
  );
});
