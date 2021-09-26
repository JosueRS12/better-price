import React from 'react';
import './styles.css';


const CardProduct = (props) =>{

  //traer la data
  return(
    <div className="card-container">
      <img className="size-img" src=" https://www.alkosto.com/medias/840023212574-001-310Wx310H?context=bWFzdGVyfGltYWdlc3wyOTYzNXxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaDVlLzEwNDIyNzc2MjY2NzgyLmpwZ3wzZTA3ODEzNzQ4ZjY5OGJmY2VkMTA1ODQ0M2I2ZmI1M2UyZmNkZGZiNTFkZTZjYWE5ZDRkYzAzMGJmN2I3OWQw" alt="img" />
      <div className='headers-container'>
          <p> Alkosto </p>
          <p> Celular MOTOROLA G30 128GB Lila </p>
          <p> $729.900 </p>
      </div>
    </div>
  )
}

export default CardProduct;
