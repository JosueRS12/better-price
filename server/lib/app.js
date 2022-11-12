"use strict";

var _express = _interopRequireDefault(require("express"));

var _client = _interopRequireDefault(require("./routes/client.js"));

var _category = _interopRequireDefault(require("./routes/category.js"));

var _product = _interopRequireDefault(require("./routes/product.js"));

var _favorite = _interopRequireDefault(require("./routes/favorite.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use("/categoria", _category.default);
app.use("/producto", _product.default);
app.use("/favorito", _favorite.default);
app.use("/cliente", _client.default);
app.get('/', (req, res) => {
  res.send('hola');
});
app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT}`);
});