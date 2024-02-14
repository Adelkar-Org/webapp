const request = require("supertest");
const initialize = require("../app");
const app = initialize();

describe("/healthz endpoint integration tests", () => {
  beforeAll(async () => {
    // Wait for 10 seconds before starting the tests
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }, 12000); // Increase the timeout to 15 seconds

  test("Test 1 - Healthz endpoint", async () => {
    const response = await request(app).get("/healthz");
    expect(response.statusCode).toBe(200);
  });
});
