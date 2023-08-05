exports.up = function (knex) {
  return knex.schema.alterTable("favorites", (table) => {
    table.unique("pgid")
  })
};

exports.down = function (knex) {
  return knex.schema.table("favorites", (table) => {
    table.dropUnique("pgid")
  })
};