import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components-commons/Layout/Layout.js' 
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';

import alkosto from './assets/alkosto-slider.jpg';
import ktronix from './assets/ktronix-slider.jpg';
import exito from './assets/exito-slider.jpg';
import smartphone from './assets/smartphone.png';
import televisor from './assets/televisor.png';
import laptop from './assets/laptop.png';

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
  var categorias = [
    {
      nombre:'Televisores',
      img:televisor,
      url:'',
    },
    {
      nombre:'Laptops',
      img:laptop,
      url:'',
    },
    {
      nombre:'Smarthpones',
      img:smartphone,
      url:'',
    },
  ];
  //se obtiene la lista de tarjetas ya ordenas y todo
  return(
    <section id="categorias" className="container-categoria"> 
      <h2> Categorías Disponibles </h2>
      <div className="container-articles">
    {
      categorias.map((e,i) =>
      <article key={i} className="decorate-article">
        <a href={e.url}>
          <img src={e.img} alt={e.nombre} className="icon-categorias"/> 
        </a>
      </article>
      
    )}
      </div>
    </section>
  );
}


const Marca = (props) =>{
  var marcas = [
    {
      nombre:'Alkosto',
      img: alkosto,
    },
    {
      nombre:'Exito',
      img: exito,
    },
    {
      nombre:'Tecno Plaza',
      img: ktronix,
    }
  ];
  return(
    <section id="Marca" className="container-marca">
      <Carousel variant="dark" pause="hover">
        {
          marcas.map((e,i)=>
            <Carousel.Item interval={5000} key={i} className="carousel-item-color">
              <img className="img-slider" src={e.img} alt={`Logo de ${e.nombre}`}/>
              <Carousel.Caption bsPrefix="decorate-carousel-caption">
                <h3>{e.nombre}</h3>
              </Carousel.Caption>
            </Carousel.Item>
        )}
      </Carousel>
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
