"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connectionBD = require("../connections/connectionBD.js");

class Product {
  async insertProduct(id, name, nameProvider, priceProduct, idCategoria) {
    let values = [id, name, nameProvider, priceProduct, idCategoria];
    let query = "INSERT INTO producto VALUES ($1, $2, $3, $4, $5)";

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend inserting a product');
    }
  }

  async consultProductById(id) {
    let values = [id];
    let query = "SELECT * FROM producto WHERE k_idproducto = $1";

    try {
      return await _connectionBD.pool.query(query, values);
    } catch (e) {
      console.log(e);
      throw new error('an error happend consulting a product existing');
    }
  }

  async consultProducts() {
    let query = "SELECT * FROM producto";

    try {
      return await _connectionBD.pool.query(query);
    } catch (e) {
      console.log(e);
      throw new error('an error happend consulting all products');
    }
  }

}

exports.default = Product;