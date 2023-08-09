require("dotenv").config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_DATABASE_NAME,
      port: process.env.DEV_DATABASE_PORT,
      user: process.env.DEV_DATABASE_USER,
      password: process.env.DEV_DATABASE_PASSWORD,
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
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
  }
};
