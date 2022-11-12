import {pool} from '../connections/connectionBD.js';

export default class Favorite{

  async insertFavorite(idCliente, idProducto){
    let values = [idCliente, idProducto];
    let query = "INSERT INTO cliente_producto VALUES ($1, $2)";
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend inserting a favorite');
    }
  }

  async consultStateFavorite(idCliente, idProducto){
    let values = [idCliente, idProducto];
    let query = "SELECT i_estadofavorito FROM cliente_producto WHERE k_identificacioncliente = $1 AND k_idproducto = $2"; 
    try{
      return await pool.query(query,values);
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting the state of a favorite existing');
    }
  }

  async consultFavorites(idCliente){
    let values = [idCliente];
    let query = "SELECT k_idproducto FROM cliente_producto WHERE k_identificacioncliente = $1";
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting all favorites existing');
    }
  }

  async deleteFavorite(idCliente, idProducto){
    let values = [idCliente, idProducto];
    let query = "DELETE FROM cliente_producto WHERE k_identificacioncliente = $1 AND k_idproducto = $2"; 
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend deleting a favorite existing');
    }
  }

}
