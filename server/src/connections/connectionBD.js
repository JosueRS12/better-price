import {Pool, Client} from 'pg';
const env = process.env;

const pool = new Pool({
  user: env.USERDB,
  host: env.HOSTDB,
  database: env.DB,
  password: env.PASSDB,
  port: env.PORTDB,
})

export {pool}


