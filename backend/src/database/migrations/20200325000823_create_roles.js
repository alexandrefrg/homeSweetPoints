
exports.up = function(knex) {
  return knex.schema.createTable('roles', function (table) {
    table.string('title').primary();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};
