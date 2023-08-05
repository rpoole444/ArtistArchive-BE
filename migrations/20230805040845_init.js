
exports.up = function(knex) {
  return knex.schema
  .createTable("artists", (table) => {
    table.increments("PGid").primary()
    table.string("id");
    table.string("name");
    table.string("image");
    table.integer("rank");
    table.string("description", 2000);
    table.string("genre");
    table.string("video");
    table.boolean("isFavorited").defaultTo(false);
  })
  .createTable("favorites", (table) => {
    table.increments("PGid").primary()
    table.string("id");
    table.string("name");
    table.string("image");
    table.integer("rank");
    table.string("description", 2000);
    table.string("genre");
    table.string("video");
    table.boolean("isFavorited");
  })
};


exports.down = function(knex) {
  return knex.schema
    .dropTable("artists")
    .dropTable("favorites")
};
