"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtainProducts = exports.obtainProductById = exports.createProduct = void 0;

var _connectionBD = require("../connections/connectionBD.js");

var _product = _interopRequireDefault(require("../models/product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createProduct = async (req, res) => {
  try {
    const product = new _product.default();
    const data = await product.insertProduct(req.body.id, req.body.name, req.body.nameProvider, req.body.priceProduct, req.body.idCategory);
    res.status(201).send({
      id: req.body.id
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.createProduct = createProduct;

const obtainProductById = async (req, res) => {
  try {
    const product = new _product.default();
    const data = await product.consultProductById(req.params.id);
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainProductById = obtainProductById;

const obtainProducts = async (req, res) => {
  try {
    const product = new _product.default();
    const data = await product.consultProducts();
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainProducts = obtainProducts;