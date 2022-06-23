import React from 'react';

function Card({ morty, playRound }) {
  return (
    <div key={morty.id} onClick={playRound}>
      <img src={morty.image} alt={morty.name} />
      <p>{morty.name}</p>
    </div>
  );
}

export default Card;
