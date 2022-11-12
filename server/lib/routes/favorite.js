"use strict";

var _express = _interopRequireDefault(require("express"));

var _favoriteController = require("../controllers/favoriteController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use(_express.default.json());
router.route("/consult/:idClient").get((req, res) => {
  (0, _favoriteController.obtainFavorites)(req, res);
});
router.route("/consult/:idClient/:idProduct").get((req, res) => {
  (0, _favoriteController.obtainStateFavorite)(req, res);
});
router.route("/create").post((req, res) => {
  (0, _favoriteController.createFavorite)(req, res);
});
router.route("/delete").delete((req, res) => {
  (0, _favoriteController.deleteFavorite)(req, res);
});
module.exports = router;