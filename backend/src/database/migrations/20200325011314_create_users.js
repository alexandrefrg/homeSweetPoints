
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();

    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('whatsapp').notNullable();
    table.integer('total_points').notNullable().defaultTo(0);

    table.integer('role').notNullable();

    table.foreign('role').references('title').inTable('roles');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
