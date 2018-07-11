
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snip', table => {
      table.increments();
      table.text('title').notNullable();
      table.text('language').notNullable();
      table.text('description').notNullable();
      table.text('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('snip');
};
