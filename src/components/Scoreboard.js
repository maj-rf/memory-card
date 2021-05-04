import React from 'react';

export default function Scoreboard(props) {
  return (
    <div>
      <span> Score: {props.currentScore} </span>
      <span> High Score: {props.highScore} (max of 20!)</span>
    </div>
  );
}
