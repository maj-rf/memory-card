import React from 'react';
import Card from '../Card/Card';

function Gameboard({ data }) {
  return (
    <div>
      <h2>Gameboard</h2>
      {data?.map((x) => (
        <Card key={x.id} morty={x} />
      ))}
    </div>
  );
}

export default Gameboard;
