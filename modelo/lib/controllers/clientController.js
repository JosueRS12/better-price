"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtainClients = exports.obtainClientById = exports.createClient = void 0;

var _connectionBD = require("../connections/connectionBD.js");

var _client = _interopRequireDefault(require("../models/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createClient = async (req, res) => {
  try {
    const client = new _client.default();
    const data = await client.insertClient(req.body.id, req.body.tipoid, req.body.nombre, req.body.apellido, req.body.sexo, req.body.direccion, req.body.cel);
    res.status(201).send({
      id: req.body.id
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.createClient = createClient;

const obtainClientById = async (req, res) => {
  try {
    const client = new _client.default();
    const data = await client.consultClientById(req.params.id);
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainClientById = obtainClientById;

const obtainClients = async (req, res) => {
  try {
    const client = new _client.default();
    const data = await client.consultClients();
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainClients = obtainClients;