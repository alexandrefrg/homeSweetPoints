const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Residents", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new resident type HouseResident", async () => {
    const { uniqueToken } = await connection("residents")
      .where("role", "HouseAdmin")
      .select("uniqueToken")
      .first();

    const response = await request(app)
      .post("/residents")
      .send({
        email: "test@houseResident.com",
        name: "test house resident",
        isAdmin: false
      })
      .set("Authorization", uniqueToken);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("email");
  });

  it("should be able to create new resident type HouseAdmin", async () => {
    const { uniqueToken } = await connection("residents")
      .where("role", "HouseAdmin")
      .select("uniqueToken")
      .first();

    const response = await request(app)
      .post("/residents")
      .send({
        email: "test@houseAdmin.com",
        name: "test house admin",
        isAdmin: true
      })
      .set("Authorization", uniqueToken);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("email");
  });
});
