const db = require('../controllers/connectionBD.js');

const queries = {
  insertCliente: "INSERT INTO cliente VALUES ($1, $2, $3, $4, $5, $6, $7)",
  clientById: "SELECT * FROM cliente WHERE k_identificacioncliente = $1 ",
  clients: "SELECT * FROM cliente",
}


const postClient = async (values) =>{
  try{
    const res = await db.query(queries.insertCliente, values); 
    console.log(`response post ${res}`);
    return res;
  } catch(e){
    console.log(e.message);
  }
}

const getUsersId = async (id) =>{
  try{
    const res = await db.query(queries.clientById, [id]);
    return {data:res.rows};
  } catch(e){
    console.log(e);
  }
}

const getUsers = async () =>{
  try{
    const res = await db.query(queries.clients);
    return {data:res.rows};
  } catch(e){
    console.log(e);
  }
}

const putUser = async () =>{
  try{
    const res = await db.query(queries.clients);
    return {data:res.rows};
  } catch(e){
    console.log(e);
  }

}

module.exports = {
  postClient : postClient,
  getUsersId : getUsersId,
  getUsers : getUsers
}
