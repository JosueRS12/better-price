"use strict";

var _express = _interopRequireDefault(require("express"));

var _categoryController = require("../controllers/categoryController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use(_express.default.json());
router.route("/consult").get((req, res) => {
  (0, _categoryController.obtainCategories)(req, res);
});
router.route("/consult/:id").get((req, res) => {
  (0, _categoryController.obtainCategoryById)(req, res);
});
router.route("/create").post((req, res) => {
  (0, _categoryController.createCategory)(req, res);
});
module.exports = router;