"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connectionBD = require("../connections/connectionBD.js");

class Client {
  async insertClient(id, typeid, name, lastname, sex, adress, cel) {
    let values = [id, typeid, name, lastname, sex, adress, cel];
    let query = "INSERT INTO cliente VALUES ($1, $2, $3, $4, $5, $6, $7)";

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend inserting a new client');
    }
  }

  async consultClientById(id) {
    let query = "SELECT * FROM cliente WHERE k_identificacioncliente = $1 ";
    let values = [id];

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend consulting a existing client');
    }
  }

  async consultClients() {
    let query = "SELECT * FROM cliente";

    try {
      return await _connectionBD.pool.query(query);
    } catch (e) {
      console.log(e);
      throw new error('an error happend consulting all clients');
    }
  }

  async verifyClient(id, nombre) {
    let query = "SELECT * FROM cliente WHERE k_identificacioncliente = $1 AND n_nombrescliente = $2";
    let values = [id, nombre];

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend validating a existing client');
    }
  }

  async updateLoggedClient(logged, id) {
    let query = "UPDATE cliente SET i_logged = $1 WHERE k_identificacioncliente = $2";
    let values = [logged, id];

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend validating a existing client');
    }
  }

}

exports.default = Client;