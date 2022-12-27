require('dotenv').config();
// require('dotenv').config({path: __dirname + '/../../.env'});

const creds = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host    : process.env.DB_HOSTNAME,
    dialect : process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host    : process.env.DB_HOSTNAME,
    dialect : process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host    : process.env.DB_HOSTNAME,
    dialect : process.env.DB_DIALECT
  }
};

module.exports = creds;
