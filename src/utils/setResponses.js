// success
const okResponse = (res, data) => res.status(200).json(data);

const createdResponse = (res, data) => res.status(201).json(data);

const noContentResponse = (res) => res.status(204).send();

// client errors
const badRequestResponse = (res) =>
  res.status(400).json({ message: "Bad Request" });

const unauthorizedResponse = (res) =>
  res.status(401).json({ message: "Unauthorized" });

const notFoundResponse = (res) =>
  res.status(404).json({ message: "Not Found" });

const methodNotAllowedResponse = (res) => res.status(405).send();

// server errors
const internalServerErrorResponse = (res) =>
  res.status(500).json({ message: "Internal Server Error" });

const serviceUnavailableResponse = (res) =>
  res.status(503).json({ message: "Service Unavailable" });

module.exports = {
  okResponse,
  createdResponse,
  noContentResponse,
  badRequestResponse,
  unauthorizedResponse,
  notFoundResponse,
  methodNotAllowedResponse,
  internalServerErrorResponse,
  serviceUnavailableResponse,
};
