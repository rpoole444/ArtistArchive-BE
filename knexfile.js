require("dotenv").config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: "artist_archive",
      port: 5432,
      user: "postgres", 
      password: "RLft353244"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      connecionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
  }
};
