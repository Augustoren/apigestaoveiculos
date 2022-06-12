const development = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite",
  },
  migrations: {
    directory: "./src/database/migrations/",
  },
  useNullasDefault: true,
}

module.exports = { development }
