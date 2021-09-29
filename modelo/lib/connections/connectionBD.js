"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

const env = process.env;
const pool = new _pg.Pool({
  user: env.USERDB,
  host: env.HOSTDB,
  database: env.DB,
  password: env.PASSDB,
  port: env.PORTDB
});
exports.pool = pool;