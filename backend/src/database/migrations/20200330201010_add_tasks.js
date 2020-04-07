exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.string("uniqueToken").primary();

    table.string("name").notNullable();
    table.string("description").notNullable();
    table.integer("points").notNullable();

    table.string("house_uniqueToken").notNullable();
    table
      .foreign("house_uniqueToken")
      .references("uniqueToken")
      .inTable("house");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
