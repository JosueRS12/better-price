//const {getFav} = require('./src/connectionBD.js'); 
//const router = require('./src/operations.js'); 
require('dotenv').config();
const express = require('express');
const cliente = require('./src/routes/cliente.js');
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.use(express.json());
//app.use("/categoria", categoria);
//app.use("/favorito", favorito);
app.use("/cliente", cliente);


app.get('/', (req, res) =>{
  res.send('hola');
});

app.listen(PORT, HOST, ()=>{
  console.log(`App listening on http://${HOST}:${PORT}`);
})
