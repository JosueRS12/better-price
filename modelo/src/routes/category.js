import express from 'express';
import {createCategory, obtainCategoryById, obtainCategories} from '../controllers/categoryController.js';

const router = express.Router();

router.use(express.json());

router
  .route("/consult")
  .get((req,res)=>{obtainCategories(req,res)});

router
  .route("/consult/:id")
  .get((req,res)=>{obtainCategoryById(req,res)});

router
  .route( "/create")
  .post((req,res) =>{createCategory(req,res)});

module.exports = router;
