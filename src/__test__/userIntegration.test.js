const request = require("supertest");
const initialize = require("../app");
const app = initialize();

describe("/v2/user endpoint integration tests", () => {
  let userId;
  const userData = {
    first_name: "Mihir",
    last_name: "Adelkar",
    password: "Mihir@123",
    username: "mihir.adelkar@gmail.com",
  };

  beforeAll(
    async () => await new Promise((resolve) => setTimeout(resolve, 4000))
  );

  beforeEach(
    async () => await new Promise((resolve) => setTimeout(resolve, 1000))
  );

  test("Test 1 - Create an account", async () => {
    const response = await request(app)
      .post(`/v2/user`)
      .set("Content-Type", "application/json")
      .send(userData);
    expect(response.statusCode).toBe(201);
    userId = response.body.id; // Assuming the response includes the user ID
  });

  test("Validate account exists", async () => {
    const response = await request(app)
      .get(`/v2/user/self`)
      .set(
        "Authorization",
        `Basic ${Buffer.from(
          `${userData.username}:${userData.password}`
        ).toString("base64")}`
      );
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(userId);
    expect(response.body.email).toBe(userData.username);
    expect(response.body.first_name).toBe(userData.first_name);
    expect(response.body.last_name).toBe(userData.last_name);
  });

  test("Test 2 - Update the account", async () => {
    const updatedData = {
      ...userData,
      first_name: "Updated",
    };
    const response = await request(app)
      .put(`/v2/user/self`)
      .set("Content-Type", "application/json")
      .set(
        "Authorization",
        `Basic ${Buffer.from(
          `${userData.username}:${userData.password}`
        ).toString("base64")}`
      )
      .send(updatedData);
    expect(response.statusCode).toBe(204);
  });

  test("Validate the account was updated", async () => {
    const response = await request(app)
      .get(`/v2/user/self`)
      .set("Content-Type", "application/json")
      .set(
        "Authorization",
        `Basic ${Buffer.from(
          `${userData.username}:${userData.password}`
        ).toString("base64")}`
      );
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(userId);
    expect(response.body.email).toBe(userData.username);
    expect(response.body.first_name).toBe("Updated");
    expect(response.body.last_name).toBe(userData.last_name);
  });

  // run the delete sql query to delete the user
  // afterAll(async () => {
  //   // Assuming there is a function to delete the user from the database
  //   await deleteUser(userId);
  // });
});
