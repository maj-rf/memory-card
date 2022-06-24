import React from 'react';
import Card from '../Card/Card';
import { GameboardWrapper } from './Gameboard.style';

function Gameboard({ data, playRound }) {
  return (
    <GameboardWrapper>
      {data?.map((x) => (
        <Card key={x.id} morty={x} playRound={() => playRound(x.id)} />
      ))}
    </GameboardWrapper>
  );
}

export default Gameboard;
