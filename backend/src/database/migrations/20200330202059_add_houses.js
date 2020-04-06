exports.up = function (knex) {
  return knex.schema.createTable("houses", function (table) {
    // table.string('uniqueToken').primary();
    // table.string('resident_uniqueToken').notNullable().unique();
    // table.string('task_uniqueToken').notNullable().unique();
    // table.foreign('resident_uniqueToken').references('uniqueToken').inTable('residents');
    // table.foreign('task_uniqueToken').references('uniqueToken').inTable('tasks');
  });
};

exports.down = function (knex) {
  // return knex.schema.dropTable("houses");
};
