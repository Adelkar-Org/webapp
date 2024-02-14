const request = require("supertest");
const initialize = require("../app");
const app = initialize();

describe("/healthz endpoint integration tests", () => {
  test("Test 1 - Healthz endpoint", async () => {
    const response = await request(app).get("/healthz");
    expect(response.statusCode).toBe(200);
  }); // Add a timeout value of 10000 ms
});
