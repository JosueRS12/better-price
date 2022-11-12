import {React, useState, useEffect} from 'react';
import './styles.css';
import Layout from '../../components-commons/Layout/Layout.js';
import CardProduct from '../../components-commons/Card-Product/CardProduct.js';

const ProductPage = (props) =>{
  

  var categoria = props.match.params.categoria;
  const [items, setItem] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=>{
    //fetchCategoria(); 
    fetchData();
  });

  //const fetchCategoria = async () => {
    //konst data = await fetch(`http://127.0.0.1:5000/categoria/${categoria}`);
    //const listItem = await data.json();
    //setItem(listItem.data);
  //}

  const fetchData = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const results = await res.json()
    setData(results.abilities)
  }
  
  //traer la data
  return(
    <Layout pos="relative">
      <section className="product-section">
        <div className="title">
          <h2> {categoria} </h2>
        </div>
        <div>
          { data.map((e)=> (
            <p>{e.ability.name}</p>
          ))} 
        </div>
      </section>
    </Layout>
  );
}

export default ProductPage;
