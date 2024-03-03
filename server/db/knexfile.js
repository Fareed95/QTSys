/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knex = {
  development: {
    client: 'postgres',
    connection: {
      host: 'db',
      database: 'username',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}

export default knex
