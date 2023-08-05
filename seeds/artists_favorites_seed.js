const artistsData = require("../data/artist-data")

exports.seed = function(knex) {
  return knex("artists")
    .del()
    .then(() => {
      return knex.raw("ALTER SEQUENCE artists_pgid_seq RESTART WITH 1");
    })
    .then(() => {
      return knex("artists").insert(artistsData);
    })
    .then(() => {
      return knex("favorites")
        .del()
        .then(() => {
          return knex.raw("ALTER SEQUENCE favorites_pgid_seq RESTART WITH 1");
        })
    })
    
};
