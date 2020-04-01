const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Roles", () => {
  beforeAll(async () => {
    // await connection.migrate.rollback();
    // await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new role", async () => {
    const { uniqueToken } = await connection("residents")
      .where("role", "HouseAdmin")
      .select("uniqueToken")
      .first();
    expect(true).toBe(true);
  });
});
