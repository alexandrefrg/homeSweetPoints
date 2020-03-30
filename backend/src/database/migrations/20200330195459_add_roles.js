exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('roles', function(table) {
      table.string('title').notNullable().unique();
    }).then( function() {
      return knex('roles').insert([
        { title: 'HouseAdmin' },
        { title: 'HouseResident' },
      ]);
    }),
  ]);
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};
