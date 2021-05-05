import React from 'react';

export default function Gameboard(props) {
  return (
    <ul className="board">
      {props.deck.map((card) => {
        return (
          <li className="cards" key={card.id}>
            <img
              className="images"
              src={card.image}
              alt={card.name}
              id={card.id}
              onClick={props.handleClick}
            ></img>
          </li>
        );
      })}
    </ul>
  );
}
