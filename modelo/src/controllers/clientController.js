import {pool} from '../connections/connectionBD.js';
import Client from '../models/client.js';
import jwt from 'jsonwebtoken';

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

const modifyStatusClient = async (logged, id) =>{
  try{
    const client = new Client();
    const data = await client.updateLoggedClient(logged, id);
    return ({state: logged});
  } catch(e){
    throw new error('error updating the state of user');
  }
}

function generateAccesToken(user){
  return jwt.sign(user, process.env.ACCES_TOKEN_SECRET, {expiresIn: '480min'});
}

const tokenLoginClient = async (req, res)=>{
  try{
    const client = new Client();
    const data = await client.verifyClient(req.body.pass, req.body.name);
    const user = {name:req.body.name}
    if (data.rowCount == 1){
      modifyStatusClient(req.body.logged, req.body.pass);
      const accesToken = generateAccesToken(user);
      res.json({accesToken: accesToken});
    } else
      res.status(202).send({data: "credenciales no válidas"})
  } catch(e){
    res.status(500).send(e);
  }
}

function authToken(req, res, next){
  try{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
      if(err) return res.status(403).send({status: "token no válido"})
      req.user = user
      next();
    })
  } catch(e){
    res.status(500).send(e);
  }
}

function logoutClient(req, res){
  try{
    modifyStatusClient(req.body.logged, req.body.id);
    const refreshToken = jwt.sign({user: req.body.name}, process.env.REFRESH_ACCES_TOKEN);
    res.status(200).send({status: req.body.logged});
  } catch(e){
    res.status(500).send(e);
  }
}

export {
  createClient,
  obtainClientById,
  obtainClients,
  tokenLoginClient,
  authToken,
  logoutClient,
};
