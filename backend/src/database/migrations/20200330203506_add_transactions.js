exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table) {
    table.string('uniqueToken').primary();

    table.decimal('points').notNullable();
    table.dateTime('date').notNullable();

    table.string('house_uniqueToken').notNullable();
    table.string('resident_uniqueToken').notNullable();

    table.foreign('house_uniqueToken').references('uniqueToken').inTable('houses');
    table.foreign('resident_uniqueToken').references('uniqueToken').inTable('residents');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('transactions');
};
