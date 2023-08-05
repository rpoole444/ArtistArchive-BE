
exports.up = function(knex) {
  return knex.schema.table("artists", (table) => {
    table.timestamps(true, true);
  });
};


exports.down = function(knex) {
  return knex.schema.table("artists", (table) => {
    table.dropTimestamps();
  });
};
