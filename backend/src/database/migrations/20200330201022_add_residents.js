const generateUniqueToken = require("../../utils/generateUniqueId");

exports.up = function(knex) {
  return Promise.all([
    knex.schema
      .createTable("residents", function(table) {
        table.string("uniqueToken").primary();

        table
          .string("email")
          .notNullable()
          .unique();
        table.string("name").notNullable();
        table
          .decimal("totalPoints")
          .notNullable()
          .defaultTo(0);

        table
          .string("role")
          .notNullable()
          .defaultTo("HouseResident");
        table
          .foreign("role")
          .references("title")
          .inTable("roles");
      })
      .then(function() {
        return knex("residents").insert({
          uniqueToken: generateUniqueToken(),
          email: "admin@admin.com",
          name: "admin",
          totalPoints: 0,
          role: "HouseAdmin"
        });
      })
  ]);
};

exports.down = function(knex) {
  return knex.schema.dropTable("residents");
};
