const express = require("express");
const cors = require("cors");
const app = express();
const artists = require("./data/artist-data");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3001);
app.locals.title = "Artist Archive";
app.locals.artists = artists;

app.get("/", (request, response) => {
  response.send("Heyo! You're Nearing the Archive!");
});

app.get("/api/v1/artists", (request, response) => {
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

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
