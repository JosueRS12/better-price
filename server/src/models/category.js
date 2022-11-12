import {pool} from '../connections/connectionBD.js';

export default class Categoria{

  async insertCategory(id, nombre){
    let values = [id, nombre];
    let query = "INSERT INTO categoria VALUES ($1, $2)";
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend inserting a category');
    }
  }

  async consultCategoryById(id){
    let values = [id];
    let query = "SELECT * FROM categoria WHERE k_idcategoria = $1";
    try{
      return await pool.query(query, values); 
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting a category existing');
    }
  }

  async consultCategories(){
    let query = "SELECT * FROM categoria";
    try{
      return await pool.query(query); 
    }catch(e){
      console.log(e);
      throw new error('an error happend consulting all categories');
    }
  }
  
}
