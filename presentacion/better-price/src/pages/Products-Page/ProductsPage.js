import {React, useState, useEffect} from 'react';
import './styles.css';
import Layout from '../../components-commons/Layout/Layout.js';
import CardProduct from '../../components-commons/Card-Product/CardProduct.js';

const ProductPage = (props) =>{
  

  var categoria = props.match.params.categoria;
  console.log(categoria);
  const [items, setItem] = useState([]);

  useEffect(()=>{
    fetchCategoria(); 
  });

  const fetchCategoria = async () => {
    const data = await fetch(`http://127.0.0.1:5000/categoria/${categoria.toLocaleLowerCase()}`);
    const listItem = await data.json();
    setItem(listItem.data);
  }
  
  //traer la data
  return(
    <Layout pos="relative">
      <section className="product-section">
        <div className="title">
          <h2> {categoria} </h2>
        </div>
        <div className="products-container">
        {
          items.map((e)=>
          <CardProduct producto={e} key={e._id}/>
        )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductPage;
