const request = require("supertest");
const initialize = require("../app");
const app = initialize();

describe("/healthz endpoint integration tests", () => {
  // beforeAll(async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  // }, 12000);
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
  });

  test("Test 1 - Healthz endpoint", async () => {
    const response = await request(app).get("/healthz");
    expect(response.statusCode).toBe(200);
  });
});
