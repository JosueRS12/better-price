import express from 'express';
import {createFavorite, obtainStateFavorite, obtainFavorites, deleteFavorite} from '../controllers/favoriteController.js';

const router = express.Router();

router.use(express.json());

router
  .route("/consult/:idClient")
  .get((req,res)=>{obtainFavorites(req,res)});

router
  .route("/consult/:idClient/:idProduct")
  .get((req,res)=>{obtainStateFavorite(req,res)});

router
  .route("/create")
  .post((req,res) =>{createFavorite(req,res)});

router
  .route("/delete")
  .delete((req,res) =>{deleteFavorite(req,res)});

module.exports = router;
