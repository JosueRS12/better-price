"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authToken = authToken;
exports.logoutClient = logoutClient;
exports.tokenLoginClient = exports.obtainClients = exports.obtainClientById = exports.createClient = void 0;

var _connectionBD = require("../connections/connectionBD.js");

var _client = _interopRequireDefault(require("../models/client.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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

const modifyStatusClient = async (logged, id) => {
  try {
    const client = new _client.default();
    const data = await client.updateLoggedClient(logged, id);
    return {
      state: logged
    };
  } catch (e) {
    throw new error('error updating the state of user');
  }
};

function generateAccesToken(user) {
  return _jsonwebtoken.default.sign(user, process.env.ACCES_TOKEN_SECRET, {
    expiresIn: '480min'
  });
}

const tokenLoginClient = async (req, res) => {
  try {
    const client = new _client.default();
    const data = await client.verifyClient(req.body.pass, req.body.name);
    const user = {
      name: req.body.name
    };

    if (data.rowCount == 1) {
      modifyStatusClient(req.body.logged, req.body.pass);
      const accesToken = generateAccesToken(user);
      res.json({
        accesToken: accesToken
      });
    } else res.status(202).send({
      data: "credenciales no válidas"
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.tokenLoginClient = tokenLoginClient;

function authToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    _jsonwebtoken.default.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send({
        status: "token no válido"
      });
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(500).send(e);
  }
}

function logoutClient(req, res) {
  try {
    modifyStatusClient(req.body.logged, req.body.id);

    const refreshToken = _jsonwebtoken.default.sign({
      user: req.body.name
    }, process.env.REFRESH_ACCES_TOKEN);

    res.status(200).send({
      status: req.body.logged
    });
  } catch (e) {
    res.status(500).send(e);
  }
}