const dotenv = require("dotenv");

const env = process.env.NODE_ENV || "development";

dotenv.config(
  env === "production"
    ? { path: ".env.production" }
    : { path: ".env.development" }
);

const config = {
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
  email_verification: {
    expiry: process.env.EMAIL_VERIFICATION_EXPIRY || 240000,
  },
  ci: {
    isGitHubActions: (process.env.CI && process.env.GITHUB_ACTIONS) || false,
  },
};
module.exports = config;
