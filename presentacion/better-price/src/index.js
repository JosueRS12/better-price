import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components-commons/Layout/Layout.js' 

const Header = (props) =>{
  return(
    <header>
      <h1 align="center">
        Busca, compara y encuentra los mejores precios que se ajusten a tu bolsillo.
      </h1>
    </header>
  );
}

const Categoria = (props) =>{
  return(
    <section id="categorias">
      categorias
    </section>
  );
}


const Marca = (props) =>{
  return(
    <section id="Marca">
      Marcas
    </section>
  );
}



const Home = (props)=>{
  return(
    <Layout>
      <Header/>
      <Categoria/>
      <Marca/>
    </Layout>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
