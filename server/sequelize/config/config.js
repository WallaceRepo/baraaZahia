require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRE_DB_USER,
    password: process.env.POSTGRE_DB_PASSWORD,
    host: process.env.POSTGRE_DB_HOST,
    dialect: 'postgres',
    port: 5432,
    logging: false,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRE_DB_USER,
    password: process.env.POSTGRE_DB_PASSWORD,
    host: process.env.POSTGRE_DB_HOST,
    dialect: 'postgres',
    port: 5432,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRE_DB_USER,
    password: process.env.POSTGRE_DB_PASSWORD,
    host: process.env.POSTGRE_DB_HOST,
    dialect: 'postgres',
    port: 5432,
    logging: false,
    dialect: 'postgres',
  }
}



