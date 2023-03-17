module.exports = {
  development: {
     serviceTimeout: 30,
     postgres: {
      options: {
        username: 'bsppqfwf',
        password: 'ZxBONIco29NR8od0UhPVWwYUcIqjPrWC',
        database: 'dev',
        host: 'otto.db.elephantsql.com',
        dialect: 'postgres',
        port: 5432,
        logging: false,
      },
      client: null
    },
    dialect: 'postgres',
   // freezeTableName: true
    // dialectOptions: {
    //   ssl:{
    //      regectUnauthorized: false,
    //   },
    // }
  },
  test: {
    // username: Sophia,
    // password: 'Amjilt',
    // database: database_test,
    host:'otto.db.elephantsql.com',
    //host: '127.0.0.1',
    dialect: 'postgres',
    //freezeTableName: true
  },
  production: {
    // username: 'Sophia',
    // password: 'Amjilt',
    host: 'otto.db.elephantsql.com',
    // database: database_production,
    // host: 127.0.0.1,
    // url: process.env.DATABASE_URL,
    dialect: 'postgres',
    //freezeTableName: true,
    
    // dialectOptions: {
    //   ssl:{
    //      require:true,
    //      regectUnauthorized: false,

    //   },
    // }
  }
}



