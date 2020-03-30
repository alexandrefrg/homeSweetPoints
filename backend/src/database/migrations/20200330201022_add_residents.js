exports.up = function(knex) {
  return knex.schema.createTable('residents', function(table) {
    table.string('uniqueToken').primary();

    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.decimal('totalPoints').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('residents');
};
