import React from 'react';
import useData from './hooks/useData';

function Gameboard({ results }) {
  return (
    <div>
      <h2>Gameboard</h2>
      {results?.results.map((x) => (
        <div key={x.id}>
          <p>{x.name}</p>
          <img src={x.image} alt={x.name} />
        </div>
      ))}
    </div>
  );
}

export default Gameboard;
