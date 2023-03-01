const express = require("express");
const cors = require("cors");
const app = express();
const artists = require("./data/artist-data");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3001);
app.locals.title = "Artist Archive";

app.get("/", (request, response) => {
  response.send("Heyo! From Reid!");
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

app.locals.artists = artists;

app.get("/api/v1/artists", (request, response) => {
  console.log(response);
  const { artists } = app.locals;

  response.json({ artists });
});

app.get("/api/v1/artists/:id", (request, response) => {
  console.log(request.params);
  const { id } = request.params;

  const artist = app.locals.artists.find((artist) => artist.id === id);
  if (!artist) {
    return response.status(404).send("No id Matches");
  } else {
    response.status(200).json(artist);
  }
});

app.post("/api/v1/artists", (request, response) => {
  const artist = request.body;
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
  app.locals.artists.push({ id, name, image, rank, genre, description, video });
  response.status(201).json({ id, name, image, rank, genre, description, video });
});
