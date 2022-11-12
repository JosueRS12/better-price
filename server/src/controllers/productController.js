import {pool} from '../connections/connectionBD.js';
import Product from '../models/product.js';

const createProduct = async (req,res) => {
  try{
    const product = new Product();
    const data = await product.insertProduct(req.body.id, req.body.name, req.body.nameProvider, req.body.priceProduct, req.body.idCategory); 
    res.status(201).send({id: req.body.id}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainProductById = async (req, res) =>{
  try{
    const product = new Product();
    const data = await product.consultProductById(req.params.id);
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainProducts = async (req, res)=>{
  try{
    const product = new Product();
    const data = await product.consultProducts();
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

export {
  createProduct,
  obtainProductById,
  obtainProducts
};
