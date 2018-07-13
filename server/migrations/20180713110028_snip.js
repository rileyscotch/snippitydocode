exports.up = function(knex, Promise) {
    return knex.schema.createTable("snip", table => {
      table.increments();
      table.text("title").notNullable();
      table.text("description").notNullable();
      table.text("url");
      table
        .integer("language_id")
        .notNullable()
        .references("id")
        .inTable("language")
        .onDelete("CASCADE")
        .index();
    });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("snip");
  };
  