exports.up = function (knex) {
  return knex.schema.createTable("houses", function (table) {
    table.string("uniqueToken").primary();
    table.string("familyName").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("houses");
};
