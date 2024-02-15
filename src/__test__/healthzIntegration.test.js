const request = require("supertest");
const initialize = require("../app");
const app = initialize();

describe("/healthz endpoint integration tests", () => {
  beforeAll(
    async () => await new Promise((resolve) => setTimeout(resolve, 10000))
  );

  // get request for healthz endpoint
  test("Test 1 - get request for healthz endpoint", async () => {
    const response = await request(app).get("/healthz");
    expect(response.statusCode).toBe(200);
  });

  // post request for healthz endpoint
  test("Test 2 - post request for healthz endpoint", async () => {
    const response = await request(app).post("/healthz");
    expect(response.statusCode).toBe(405);
  });

  // put request for healthz endpoint
  test("Test 3 - put request for healthz endpoint", async () => {
    const response = await request(app).put("/healthz");
    expect(response.statusCode).toBe(405);
  });

  // delete request for healthz endpoint
  test("Test 4 - delete request for healthz endpoint", async () => {
    const response = await request(app).delete("/healthz");
    expect(response.statusCode).toBe(405);
  });

  // patch request for healthz endpoint
  test("Test 5 - patch request for healthz endpoint", async () => {
    const response = await request(app).patch("/healthz");
    expect(response.statusCode).toBe(405);
  });

  // get with body request for healthz endpoint
  test("Test 6 - get with body request for healthz endpoint", async () => {
    const response = await request(app).get("/healthz").send({ key: "value" });
    expect(response.statusCode).toBe(400);
  });

  // get with query request for healthz endpoint
  test("Test 7 - get with query request for healthz endpoint", async () => {
    const response = await request(app).get("/healthz?name=healthz");
    expect(response.statusCode).toBe(400);
  });
});
