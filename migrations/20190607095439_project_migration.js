exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.string('description').notNullable().unique()
      tbl.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};


