import express from 'express';
import client from './routes/client.js';
import category from './routes/category.js';
import product from './routes/product.js';
import favorite from './routes/favorite.js';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.use(cors());
app.use(express.json());

app.use("/categoria", category);
app.use("/producto", product);
app.use("/favorito", favorite);
app.use("/cliente", client);


app.get('/', (req, res) =>{
  res.send('hola');
});

app.listen(PORT, HOST, ()=>{
  console.log(`App listening on http://${HOST}:${PORT}`);
})
