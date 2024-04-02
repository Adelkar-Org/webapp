const ApiError = require("./apiError");
// success
const okResponse = (res, data) => res.status(200).json(data);

const createdResponse = (res, data) => res.status(201).json(data);

const noContentResponse = (res) => res.status(204).send();

const unauthorizedResponse = (res) =>
  res.status(401).json({ message: "Unauthorized" });

const forbiddenResponse = (res) =>
  res.status(403).json({ message: "Unauthorized" });
// client errors
class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}

class ForbiddenError extends ApiError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}

class NotFoundError extends ApiError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

class MethodNotAllowedError extends ApiError {
  constructor(message = "Method Not Allowed") {
    super(405, message);
  }
}

// server errors
class InternalServerError extends ApiError {
  constructor(message = "Internal Server Error") {
    super(500, message);
  }
}

class ServiceUnavailableError extends ApiError {
  constructor(message = "Service Unavailable") {
    super(503, message);
  }
}

module.exports = {
  okResponse,
  createdResponse,
  noContentResponse,
  unauthorizedResponse,
  forbiddenResponse,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  InternalServerError,
  ServiceUnavailableError,
};
