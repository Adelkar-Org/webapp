const dotenv = require("dotenv");

dotenv.config(
  process.env.NODE_ENV === "production"
    ? { path: ".env.production" }
    : { path: ".env.development" }
);

const config = {
  development: {
    app: {
      port: process.env.PORT,
      host: process.env.HOST,
      environment: process.env.NODE_ENV || "development",
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiry: process.env.JWT_EXPIRY,
    },
  },
  production: {
    app: {
      port: process.env.PORT,
      host: process.env.HOST,
      environment: process.env.NODE_ENV,
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiry: process.env.JWT_EXPIRY,
    },
  },
};

const selectedConfig = config[process.env.NODE_ENV || "development"];

module.exports = selectedConfig;
