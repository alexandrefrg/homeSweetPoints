const generateUniqueToken = require("../../utils/generateUniqueId");

exports.up = function (knex) {
  return knex.schema.createTable("residents", function (table) {
    table.string("uniqueToken").primary();

    table.string("email").notNullable().unique();
    table.string("name").notNullable();
    table.decimal("totalPoints").notNullable().defaultTo(0);

    table.string("role").notNullable().defaultTo("HouseResident");
    table.foreign("role").references("title").inTable("roles");

    table.string("house_uniqueToken").notNullable();
    table
      .foreign("house_uniqueToken")
      .references("uniqueToken")
      .inTable("house");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("residents");
};
