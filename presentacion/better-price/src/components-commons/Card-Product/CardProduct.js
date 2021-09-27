import {React, useState, useEffect  } from 'react';
import './styles.css';
import favActive from '../../assets/heart-icon.png';
import favDesactive from '../../assets/heart-icon-disable.png';

const CardProduct = (props) =>{
  const [fav, setFav] = useState(false);

  return(
    <div className="card-container">
      <img className="size-img" src=" https://www.alkosto.com/medias/840023212574-001-310Wx310H?context=bWFzdGVyfGltYWdlc3wyOTYzNXxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaDVlLzEwNDIyNzc2MjY2NzgyLmpwZ3wzZTA3ODEzNzQ4ZjY5OGJmY2VkMTA1ODQ0M2I2ZmI1M2UyZmNkZGZiNTFkZTZjYWE5ZDRkYzAzMGJmN2I3OWQw" alt="img" />
      <div className='headers-container'>
          <p> Alkosto </p>
          <p> Celular MOTOROLA G30 128GB Lila </p>
          <p> $729.900 </p>
      </div>

      <button className="decorate-button" onClick={()=>setFav(!fav)}>
        <img className="size-fav" src={fav ? favActive : favDesactive} alt="icon-heart"/>
      </button>
    </div>
  )
}

export default CardProduct;
