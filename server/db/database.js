require('dotenv').config();

const {
  DB_USER, DB_PORT, DB_PASS, DB_NAME, DB_HOST, DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  },
};
