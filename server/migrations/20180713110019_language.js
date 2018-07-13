exports.up = function(knex, Promise) {
    return knex.schema.createTable("language", table => {
      table.increments();
      table.text("name").notNullable();
      table.text("imgUrl");
    });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("language");
  };
  