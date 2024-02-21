const cors = require("cors");

const corsConfig = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:8080", "*"],
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    })
  );
};

module.exports = corsConfig;
