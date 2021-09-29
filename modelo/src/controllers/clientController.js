import {pool} from '../connections/connectionBD.js';
import Client from '../models/client.js';

const createClient = async (req,res) => {
  try{
    const client = new Client();
    const data = await client.insertClient(req.body.id, req.body.tipoid, req.body.nombre, req.body.apellido, req.body.sexo, req.body.direccion, req.body.cel);
    res.status(201).send({id: req.body.id}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainClientById = async (req, res) =>{
  try{
    const client = new Client();
    const data = await client.consultClientById(req.params.id);
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainClients = async (req, res)=>{
  try{
    const client = new Client();
    const data = await client.consultClients();
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}



export {
  createClient,
  obtainClientById,
  obtainClients
};
