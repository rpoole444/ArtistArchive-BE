const artistsData = require("../data/artist-data")

exports.seed = function(knex) {
  return knex("artists")
    .del()
    .then(() => {
      return knex.raw("ALTER SEQUENCE artists_id_seq RESTART WITH 1");
    })
    .then(() => {
      return knex("artists").insert(artistsData);
    })
    .then(() => {
      return knex("favorites")
        .del()
        .then(() => {
          return knex.raw("ALTER SEQUENCE favorites_id_seq RESTART WITH 1");
        })
    })
    
};
