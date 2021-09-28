const result = require('dotenv').config();

if (result.error) {
  throw result.error
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3200,
  USERDB: process.env.USERDB,
  HOSTDB: process.env.HOSTDB,
  DB: process.env.DB,
  PORTDB: process.env.PORTDB,
}
