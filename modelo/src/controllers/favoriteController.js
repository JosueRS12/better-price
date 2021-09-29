import {pool} from '../connections/connectionBD.js';
import Favorite from '../models/favorite.js';

const createFavorite = async (req,res) => {
  try{
    const favorite = new Favorite();
    const data = await favorite.insertFavorite(req.body.idClient, req.body.idProduct);
    res.status(201).send({data: req.body.idClient}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainStateFavorite = async (req, res) =>{
  try{
    const favorite = new Favorite();
    const data = await favorite.consultStateFavorite(req.params.idClient, req.params.idProduct);
    res.status(200).send({data}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainFavorites = async (req, res)=>{
  try{
    const favorite = new Favorite();
    const data = await favorite.consultFavorites(req.params.idClient);
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const deleteFavorite = async (req, res)=>{
  try{
    const favorite = new Favorite();
    const data = await favorite.deleteFavorite(req.body.idClient, req.body.idProduct);
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}



export {
  createFavorite,
  obtainStateFavorite,
  obtainFavorites,
  deleteFavorite
};
