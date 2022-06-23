import React from 'react';
import Card from '../Card/Card';

function Gameboard({ data, playRound }) {
  return (
    <div>
      <h2>Gameboard</h2>
      {data?.map((x) => (
        <Card key={x.id} morty={x} playRound={playRound} />
      ))}
    </div>
  );
}

export default Gameboard;
