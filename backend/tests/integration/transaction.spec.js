const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Transactions", () => {
  beforeAll(async () => {
    // await connection.migrate.rollback();
    // await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new transaction", () => {
    expect(true).toBe(true);
  });
});
