
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function (table) {
    table.increments();

    table.integer('points').notNullable();

    table.integer('user_id').notNullable();
    table.integer('task_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('task_id').references('id').inTable('tasks');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('transactions');
};
