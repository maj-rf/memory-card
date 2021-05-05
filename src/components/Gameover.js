import React from 'react';

export default function Gameover(props) {
  if (props.currentScore === 20)
    return (
      <div className="gameover">
        <h1>You Win!</h1>
        <button onClick={props.restartGame}>Play Again?</button>
      </div>
    );
  else
    return (
      <div className="gameover">
        <h1>Game Over!</h1>
        <p>You already picked that Morty. </p>
        <button onClick={props.restartGame}>Play Again?</button>
      </div>
    );
}
