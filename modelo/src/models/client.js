import {pool} from '../connections/connectionBD.js';

export default class Client{

  async insertClient(id, typeid, name, lastname , sex, adress, cel){
    let values = [id, typeid, name, lastname, sex, adress, cel];
    let query = "INSERT INTO cliente VALUES ($1, $2, $3, $4, $5, $6, $7)";
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend inserting a new client');
    }
  }

  async consultClientById(id){
    let query = "SELECT * FROM cliente WHERE k_identificacioncliente = $1 ";
    let values = [id];
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting a existing client');
    }
  }

  async consultClients(){
    let query = "SELECT * FROM cliente";
    try{
      return await pool.query(query); 
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting all clients');
    }
  }
}

