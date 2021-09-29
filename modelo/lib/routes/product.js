"use strict";

var _express = _interopRequireDefault(require("express"));

var _productController = require("../controllers/productController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use(_express.default.json());
router.route("/consult").get((req, res) => {
  (0, _productController.obtainProducts)(req, res);
});
router.route("/consult/:id").get((req, res) => {
  (0, _productController.obtainProductById)(req, res);
});
router.route("/create").post((req, res) => {
  (0, _productController.createProduct)(req, res);
});
module.exports = router;