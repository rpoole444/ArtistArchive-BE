require("dotenv").config();
const connection = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = require("knex")(connection);

module.exports = {
  getAllArtists() {
    return database("artists");
  },
  getSingleArtist(request) {
    return database("artists").where("id", request.params.id).select();
  },
  addArtistToFavorites(favorite) {
    return database("favorites").insert(favorite, "id");
  },
  removeBookFromFavorites(request) {
    return database("favorites").where("id", request.params.id).del()
  },
  getAllFavorites() {
    return database("favorites")
  },
  updatedFavorites(request) {
    return database("books").where("id", request.params.id).update({isFavorited: request.body.isFavorited })
  }
}