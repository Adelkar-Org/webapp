// src/configs/validateEnv.js
const Joi = require("joi");
const logger = require("../utils/logger");

const envVarsSchema = Joi.object({
  //
  NODE_ENV: Joi.string().valid("development", "production", "test").required(),
  PORT: Joi.number().default(8080),
  HOST: Joi.string().default("localhost"),
  //
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DIALECT: Joi.string().required(),
})
  .unknown()
  .required();

function validateEnv(envVariables) {
  // logger.log(envVariables);
  const { error, value } = envVarsSchema.validate(envVariables);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
  return value;
  // return envVariables;
}

module.exports = validateEnv;
