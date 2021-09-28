const express = require('express');
const db = require('../handlers/cliente.js');
const router = express.Router();


router.use(express.json());

router
  .route("/")
  .get(async (req,res) =>{
    const data = await db.getUsers(); 
    console.log(data);
    res.status(200).send(data);
  });

router
  .route("/:id")
  .get(async (req,res) =>{
    const data = await db.getUsersId(req.params.id); 
    console.log(data);
    res.status(200).send(data);
  });

router
  .route("/:id/:tipoid/:nombre/:apellido/:sexo/:direccion/:cel")
  .post(async(req, res)=>{
    let values = [req.params.id, req.params.tipoid, req.params.nombre, req.params.apellido, req.params.sexo, req.params.direccion, req.params.cel];
    const data = await db.postClient(values); 
    console.log(data);
    res.status(201).send(data);
  });

module.exports = router;
