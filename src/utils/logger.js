const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "/var/log/csye6225/webapp.log" }),
    // new winston.transports.File({ filename: "./webapp.log" }),
  ],
});

logger.info("structured log", { important: "value" });

module.exports = logger;
