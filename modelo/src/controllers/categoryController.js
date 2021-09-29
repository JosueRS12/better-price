import {pool} from '../connections/connectionBD.js';
import Category from '../models/category.js';

const createCategory = async (req,res) => {
  try{
    const category = new Category();
    const data = await category.insertCategory(req.body.id, req.body.name);
    res.status(201).send({id: req.body.id}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainCategoryById = async (req, res) =>{
  try{
    const category = new Category();
    const data = await category.consultCategoryById(req.params.id);
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

const obtainCategories = async (req, res)=>{
  try{
    const category = new Category();
    const data = await category.consultCategories();
    res.status(200).send({data: data.rows}); 
  } catch(e){
    res.status(500).send(e);
  }
}

export {
  createCategory,
  obtainCategoryById,
  obtainCategories
};
