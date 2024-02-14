const config = require("./src/configs/config.js");
const initialize = require("./src/app.js");
const errorHandler = require("./src/middlewares/errorHandler.js");
const sequelize = require("./src/configs/database.js");

async function startServer() {
  // Initialize app
  const app = initialize();

  // Error handler

  // Start server
  try {
    await sequelize.sync({ alter: true });

    app.listen(config.app.port, () => {
      console.log(
        `Server listening at http://localhost:${config.app.port}/healthz`
      );
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
  app.use(errorHandler);
}

startServer();
