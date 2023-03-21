require("dotenv").config({path: '../.env'})
//require("dotenv").config();
//console.log(require("dotenv").config({path: '../.env'}))

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: console.log,
    pool: {
      max: 3,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    use_env_variable: "DATABASE_URL",
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};





