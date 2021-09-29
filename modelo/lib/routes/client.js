"use strict";

var _express = _interopRequireDefault(require("express"));

var _clientController = require("../controllers/clientController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use(_express.default.json());
router.route("/consult").get((req, res) => {
  (0, _clientController.obtainClients)(req, res);
});
router.route("/consult/:id").get((req, res) => {
  (0, _clientController.obtainClientById)(req, res);
});
router.route("/create").post((req, res) => {
  (0, _clientController.createClient)(req, res);
});
router.route("/login/token").post((req, res) => {
  (0, _clientController.tokenLoginClient)(req, res);
});
router.route("/login/status").get(_clientController.authToken, (req, res) => {
  res.json({
    status: "true"
  });
});
router.route("/logout").put((req, res) => {
  (0, _clientController.logoutClient)(req, res);
});
module.exports = router;