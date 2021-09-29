"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtainCategories = exports.obtainCategoryById = exports.createCategory = void 0;

var _connectionBD = require("../connections/connectionBD.js");

var _category = _interopRequireDefault(require("../models/category.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createCategory = async (req, res) => {
  try {
    const category = new _category.default();
    const data = await category.insertCategory(req.body.id, req.body.name);
    res.status(201).send({
      id: req.body.id
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.createCategory = createCategory;

const obtainCategoryById = async (req, res) => {
  try {
    const category = new _category.default();
    const data = await category.consultCategoryById(req.params.id);
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainCategoryById = obtainCategoryById;

const obtainCategories = async (req, res) => {
  try {
    const category = new _category.default();
    const data = await category.consultCategories();
    res.status(200).send({
      data: data.rows
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.obtainCategories = obtainCategories;