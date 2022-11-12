import express from 'express';
import {createProduct, obtainProductById, obtainProducts} from '../controllers/productController.js';

const router = express.Router();

router.use(express.json());

router
  .route("/consult")
  .get((req,res)=>{obtainProducts(req,res)});

router
  .route("/consult/:id")
  .get((req,res)=>{obtainProductById(req,res)});

router
  .route( "/create")
  .post((req,res) =>{createProduct(req,res)});

module.exports = router;
