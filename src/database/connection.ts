import knex from 'knex'

const connection = knex("./src/database/db.sqlite")

export default connection