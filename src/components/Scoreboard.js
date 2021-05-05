import React from 'react';

export default function Scoreboard(props) {
  return (
    <div className="scoreContainer">
      <span className="currentScore"> Score: {props.currentScore} </span>
      <span className="highScore"> High Score: {props.highScore}</span>
    </div>
  );
}
