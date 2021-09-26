import React from 'react';
import './styles.css';
import Layout from '../../components-commons/Layout/Layout.js';
import CardProduct from '../../components-commons/Card-Product/CardProduct.js';

const ProductPage = (props) =>{

  //traer la data
  return(
    <Layout>
      <section className="product-section">
        <div className="title">
          {/*categoria con api*/}
          <h2> CATEGORÍA </h2>
        </div>
        <div className="products-container">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </section>
    </Layout>
  );
}

export default ProductPage;
