
import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';


const Card = ({ name, types, image, id  }) => {


  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`} key={id}>
      <img className={style.card-image} src={image} alt={name} />
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>types:{types}</p>
     </Link>
    </div>
  );
};

export default Card;
