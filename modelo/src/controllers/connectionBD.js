//const express = require('express');
const { Pool, Client } = require('pg');

const env = process.env;

const pool = new Pool({
  user: env.USERDB,
  host: env.HOSTDB,
  database: env.DB,
  password: env.PASSDB,
  port: env.PORTDB,
})

module.exports = {
  query : (text,params) => pool.query(text,params)
} 

//const queries = {
  //insertCliente: "INSERT INTO cliente VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
  //insertCategoria: "INSERT INTO categoria VALUES ($1, $2)", 
  //insertProducto: "INSERT INTO producto VALUES ($1, $2, $3, $4, $5, $6)",
  //insertFav: "INSERT INTO cliente_producto VALUES ($1, $2, $3)",
  //deleteFav: "DELETE FROM cliente_producto WHERE k_identificacioncliente = $1",
  //verFav: "SELECT i_estadofavorito FROM cliente_producto WHERE k_idproducto = $1"
//}



