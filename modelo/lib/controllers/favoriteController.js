"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFavorite = exports.obtainFavorites = exports.obtainStateFavorite = exports.createFavorite = void 0;

var _connectionBD = require("../connections/connectionBD.js");

var _favorite = _interopRequireDefault(require("../models/favorite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createFavorite = async (req, res) => {
  try {
    const favorite = new _favorite.default();
    const data = await favorite.insertFavorite(req.body.idClient, req.body.idProduct);
    res.status(201).send({
      id: req.body.id
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.createFavorite = createFavorite;

const obtainStateFavorite = async (req, res) => {
  try {
    const favorite = new _favorite.default();
    const data = await favorite.consultStateFavorite(req.params.idClient, req.params.idProduct);
    res.status(200).send({
      data
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainStateFavorite = obtainStateFavorite;

const obtainFavorites = async (req, res) => {
  try {
    const favorite = new _favorite.default();
    const data = await favorite.consultFavorites(req.params.idClient);
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainFavorites = obtainFavorites;

const deleteFavorite = async (req, res) => {
  try {
    const favorite = new _favorite.default();
    const data = await favorite.deleteFavorite(req.body.idClient, req.body.idProduct);
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.deleteFavorite = deleteFavorite;