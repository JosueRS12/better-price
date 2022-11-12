import express from 'express';
import {logoutClient, createClient, obtainClientById, obtainClients, tokenLoginClient, authToken} from '../controllers/clientController.js';

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

router
  .route("/login/token")
  .post((req,res) =>{tokenLoginClient(req,res)});

router
  .route("/login/status")
  .get(authToken, (req,res)=>{
    res.json({status: "true"})
  })

router
  .route("/logout")
  .put((req,res)=>{logoutClient(req,res)})

module.exports = router;
