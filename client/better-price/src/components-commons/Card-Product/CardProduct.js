import {React, useState} from 'react';
import './styles.css';
import favActive from '../../assets/heart-icon.png';
import favDesactive from '../../assets/heart-icon-disable.png';

const CardProduct = (props) =>{
  const [fav, setFav] = useState(false);
  return(
    <div className="card-container">
      <img className="size-img" src={props.producto.img} alt="img"/>
      <div className='headers-container'>
          <p> {props.producto.proveedor} </p>
          <p> {props.producto.nombre}</p>
          <p> {props.producto.precio}</p>
      </div>

      <button className="decorate-button" onClick={()=>setFav(!fav)}>
        <img className="size-fav" src={fav ? favActive : favDesactive} alt="icon-heart"/>
      </button>
    </div>
  )
}

export default CardProduct;
