import React from 'react';

function Card({ morty }) {
  return (
    <div key={morty.id}>
      <img src={morty.image} alt={morty.name} />
      <p>{morty.name}</p>
    </div>
  );
}

export default Card;
