exports.up = function (knex) {
  return knex.schema.alterTable("favorites", (table) => {
    table.string("id").notNullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("favorites", (table) => {
    table.string("id").nullable().alter();
  });
};