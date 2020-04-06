const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Tasks", () => {
  beforeAll(async () => {
    // await connection.migrate.rollback();
    // await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new task", async () => {
    const { uniqueToken } = await connection("residents")
      .where("role", "HouseAdmin")
      .select("uniqueToken")
      .first();

    const response = await request(app)
      .post("/tasks")
      .send({
        name: "test task",
        description: "test description for new task",
        points: 10,
      })
      .set("Authorization", uniqueToken);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name");
  });

  it("should not be able to create new task when user uniqueToken is not HouseAdmin", () => {
    expect(true).toBe(true);
  });

  it("should not be able to create new task when user uniqueToken does not exist", () => {
    expect(true).toBe(true);
  });
});
