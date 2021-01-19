import React from 'react';
import './card.styles.css';

const Card = ({ name, id, email }) => {
  return (
    <div className='card-container'>
      <img
        alt='robots'
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
