const express = require("express");
const cors = require("cors");
const app = express();
const artists = require("./data/artist-data");
const favorites = require("./data/favorites-data");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3001);
app.locals.title = "Artist Archive";
app.locals.artists = artists;
app.locals.favorites = favorites;

app.get("/", (request, response) => {
  response.send("Heyo! From Reid!");
});

app.get("/api/v1/artists", (request, response) => {
  console.log(response);
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
});

app.get("/api/v1/favorites", (request, response) => {
  const { favorites } = app.locals;
  response.status(200).json(favorites);
  // .catch((error) => response.status(500).json({ error }));
});

app.post("/api/v1/favorites", (request, response) => {
  console.log("hit Post!!!");
  // console.log("request: ", request);
  const artist = request.body;
  // const xpressID = Date.now();
  const { id, name, image, rank, genre, description, video } = artist;
  for (let requiredParameter of [
    "id",
    "name",
    "image",
    "rank",
    "genre",
    "video",
  ]) {
    if (!artist[requiredParameter]) {
      response.status(422).send({
        error: `Expected format: { id: <String>, name: <String>, image: <https>, rank: <Number>, genre: <String>, description: <String>, video: <String> }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  app.locals.favorites.push({
    id,
    name,
    image,
    rank,
    genre,
    description,
    video,
  });
  response
    .status(201)
    .json({ id, name, image, rank, genre, description, video });
});

app.post("/api/v1/artists", (request, response) => {
  const artist = request.body;
  // const xpressID = Date.now();
  const { id, name, image, rank, genre, description, video } = artist;
  for (let requiredParameter of [
    "id",
    "name",
    "image",
    "rank",
    "genre",
    "description",
    "video",
  ]) {
    if (!artist[requiredParameter]) {
      response.status(422).send({
        error: `Expected format: { id: <String>, name: <String>, image: <https>, rank: <Number>, genre: <String>, description: <String>, video: <String> }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }
  app.locals.artists.push({
    id,
    name,
    image,
    rank,
    genre,
    description,
    video,
  }); // if duplicated id send a 400
  response
    .status(201)
    .json({ id, name, image, rank, genre, description, video });
});

app.delete("/api/v1/favorites/:id", (request, response) => {
  const length = app.locals.favorites.length;
  const newFavorites = app.locals.favorites.filter((favorite) => {
    return favorite.id !== request.params.id;
  });

  app.locals.favorites = newFavorites;

  if (newFavorites.length !== length) {
    return response.status(200).json({
      message: `Artist with id number ${request.params.id} has been removed from favorites`,
    });
  } else {
    return response.status(404);
  }
});

app.patch("/api/v1/artists/:id", async (request, response) => {
  console.log("BODY: ", request.body);
  const musician = app.locals.favorites.find(
    (favorite) => favorite.id === request.params.id
  );
  console.log(musician);
  if (musician) {
    musician.isFavorited = request.body.isFavorited;
    return response.status(200).json({
      message: `Artist with id number ${request.params.id}`,
      isFavorited: `${request.params.isFavorited}`,
    });
  } else {
    response.status(404).json({
      error:
        "This request failed, Double Check your request body and id for proper formatting",
    });
  }
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
