import React from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Dropdown, DropdownButton} from 'react-bootstrap';
import logotipo from '../../assets/logo-better-price.png';
import linkedin from '../../assets/logo-linkedin.png';
import gmail from '../../assets/logo-gmail.png';
import github from '../../assets/logo-github.png';
import './styles.css' 

//revisar estado en mi cuenta

const Nav = (props)=>{
  return (
    <nav className="decorate-nav">
      <Navbar expand="lg">
      <Container> 
        <Navbar.Brand>
          <Link to='/'>
            <img src={logotipo} alt='Logotipo de Better Price' Style="width:5.4em; height: 60px"/>
          </Link>
        </Navbar.Brand> 
          <DropdownButton as='Warning' key='Warning' variant='warning'title="Mi Cuenta">
            <Dropdown.Item href='#'> Iniciar Sesion </Dropdown.Item>
            <Dropdown.Item href='#'> Registrarsei </Dropdown.Item>
          </DropdownButton>
      </Container>
      </Navbar>
    </nav>
    );
}

const Subject = (props) => {
  var miembros = [
    {
      nombre: 'Milena Encinales',
      redes: [
        {
          url: 'https://linkedin.com',
          nombre:linkedin,
        },
        {
          url: 'https://github.com',
          nombre: github,
        },
        {
          url: 'https://gmail.com',
          nombre: gmail,
        }
      ],
    }, 
    {
      nombre: 'Josué Rodríguez',
      redes: [
        {
          url: 'https://linkedin.com',
          nombre:linkedin,
        },
        {
          url: 'https://github.com/josuers12',
          nombre: github,
        },
        {
          url: 'https://gmail.com',
          nombre: gmail,
        }
      ],

    }, 
    {
      nombre: 'Angie Peña',
      redes: [
        {
          url: 'https://linkedin.com',
          nombre:linkedin,
        },
        {
          url: 'https://github.com',
          nombre: github,
        },
        {
          url: 'https://gmail.com',
          nombre: gmail,
        }
      ],
    }, 
  ];
  return(
    <>
      {miembros.map((sub,i)=>
        <div className="container-subject" key={i}>
          <p>{sub.nombre}</p>
          <div className="Container-redes">
            {sub.redes.map((red,i)=>
              <div className='container-icon' key={i}>
                <a className="decorate-a" target="_blank" href={red.url} rel="noreferrer">
                  <img src={red.nombre} alt="icono de linkedin" className="size-icon"/>
                </a>
              </div>
            )}
          </div>
        </div>
       )} 
    </>
  );
} 

const Footer = (props) =>{
  const display = {
    position : props.pos
  }
  return(
    <footer style={display}> 
      <h5 align="center">Diseñado y Desarrollado por: </h5>
      <div className="container-names">
        <Subject/>
      </div> 
      <p align="center">  Copyright (C) 2021  Encinales M., Rodríguez J. Peña A. </p>
    </footer>
  );
}

const Layout = (props) =>{
  return(
    <>
    <Nav/>
        {props.children}
    <Footer pos = {props.pos}/>
    </>
  );
}

export default Layout;
