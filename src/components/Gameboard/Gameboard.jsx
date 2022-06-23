import React from 'react';
import Card from '../Card/Card';

function Gameboard({ data, playRound }) {
  return (
    <div className="gameboard">
      {data?.map((x) => (
        <Card key={x.id} morty={x} playRound={() => playRound(x.id)} />
      ))}
    </div>
  );
}

export default Gameboard;
