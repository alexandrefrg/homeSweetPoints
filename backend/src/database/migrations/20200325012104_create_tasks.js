
exports.up = function(knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('points').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
