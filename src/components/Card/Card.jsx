import React from 'react';
import { CardWrapper } from './Card.style';

function Card({ morty, playRound }) {
  return (
    <CardWrapper key={morty.id} onClick={playRound}>
      <img src={morty.image} alt={morty.name} />
      <p>{morty.name}</p>
    </CardWrapper>
  );
}

export default Card;
