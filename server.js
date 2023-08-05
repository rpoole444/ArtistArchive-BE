require("dotenv").config()
const cors = require("cors");
const { request, response } = require("express")
const express = require("express");
const knex = require("knex")
const artists = require("./data/artist-data");
const favorites = require("./data/favorites-data")
const app = express();
const queries = require("./queries")
// const environment = process.env.NODE_ENV ||'development'

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3001);
app.locals.title = "Artist Archive";
app.locals.artists = artists;
app.locals.favorites = favorites

app.get("/", (request, response) => {
  response.send("Heyo! You're Nearing the Artist Archive!");
});

app.get("/api/v1/artists", (request, response) => {
  // queries
  //   .getAllArtists()
  //   .then((data) => response.status(200).json(data))
  //   .catch((error) => {
  //     console.error(error);
  //     response.status(500).json({ error: 'Something went wrong on the server' })
  //   });
    const { artists } = app.locals;
    response.json({ artists });
});


app.get("/api/v1/artists/:id", (request, response) => {
  const { id } = request.params;

  const artist = app.locals.artists.find((artist) => artist.id === id);
  if (!artist) {
    return response.status(404).send("No id Matches");
  } else {
    response.status(200).json(artist);
  }

  // queries
  // .getSingleArtist()
  // .then((artists) => {
  //   if(artists.length) {
  //     response.status(200).json(artists)
  //   } else { 
  //     response.status(404).json({
  //       error: `no artist found with id of # ${request.params.id}`
  //     })
  //   }
  // })
  // .catch((error) => response.status(500).json({ error }))
});

// app.get("/api/v1/favorites", (request, response) => {
//   queries
//     .getAllFavorites()
//     .then((data) => response.status(200).json(data))
//     .catch((error) => response.status(500).json({ error }));
// });

// app.delete("/api/v1/favorites/:id", (request, response) => {
//   queries
//   .removeBookFromFavorites(request).then((unfavorited) => {
//     if (unfavorited) {
//       return response.status(200).json({
//         message: `Artist with id number ${request.params.id} has been removed from favorites`,
//       });
//     } else {
//       response.status(404).json({
//         error: `could not find artist based on id ${request.params.id}`,
//       });
//     }
//   });
// });

// app.post("/api/v1/favorites", (request, response) => {
//   const favorite = request.body;
//   const {
//     id,
//     name,
//     image,
//     rank,
//     description,
//     genre,
//     video,
//     isFavorited,
//   } = favorite;
//   for (let requiredParameter of [
//     "id",
//     "name",
//     "image",
//     "rank",
//     "description",
//     "genre",
//     "video",
//     "isFavorited",
//   ]) {
//     if (!favorite[requiredParameter]) {
//       response.status(422).send({
//         error: `Expected format: {id:<String>, name: <String>, image:<String>, rank:<Number>, description: <String>, genre: <String>, video: <String>, isFavorited: <Boolean>}. You're missing a "${requiredParameter}" property.`,
//       });
//     }
//   }
//   queries
//     .addArtistToFavorites(favorite)
//     .then((data) => response.status(201).json(data))
//     .catch((error) => response.status(500).json({ error }));
// });

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
