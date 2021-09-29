"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludar = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saludar = () => {
  console.log('hola');
};

exports.saludar = saludar;