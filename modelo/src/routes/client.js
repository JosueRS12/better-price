import express from 'express';
import {createClient, obtainClientById, obtainClients} from '../controllers/clientController.js';

const router = express.Router();

router.use(express.json());

router
  .route("/consult")
  .get((req,res)=>{obtainClients(req,res)});

router
  .route("/consult/:id")
  .get((req,res)=>{obtainClientById(req,res)});

router
  .route( "/create")
  .post((req,res) =>{createClient(req,res)});

module.exports = router;
