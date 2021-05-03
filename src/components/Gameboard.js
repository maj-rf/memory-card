import React from 'react';

export default function Gameboard(props) {
  return (
    <ul className="board">
      {props.deck.map((card) => {
        return (
          <li className="cards" key={card.id}>
            <img src={card.image} alt={card.name}></img>
            {card.name}
          </li>
        );
      })}
    </ul>
  );
}
