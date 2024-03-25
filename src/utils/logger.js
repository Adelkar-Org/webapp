const winston = require("winston");
const config = require("../configs/config");
require("winston-daily-rotate-file");

// commented for testing all log in prod
// const logDir =
//   config.app.environment === "production"
//     ? "/var/log/csye6225"
//     : "./log/csye6225";

const logDir = "/var/log/csye6225";

// Transport for daily rotation
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: `${logDir}/webapp-%DATE%.log`,
  datePattern: "YYYY-MM-DD",
});

const logger = winston.createLogger({
  level: config.app.environment === "production" ? "error" : "debug",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    ),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      level: config.app.environment === "production" ? "error" : "debug", // silly for testing all logs
      // level: "silly",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
    }),
    dailyRotateFileTransport,
    // testing locally
    new winston.transports.File({
      filename: `./log/csye6225/webapp.log`,
    }),
  ],
});

// Stream for morgan logging middleware
logger.stream = {
  write: function (message) {
    logger.info(message.trim());
  },
};

// logger.info("structured log", { important: "value" });

module.exports = logger;
