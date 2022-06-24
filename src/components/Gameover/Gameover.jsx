import React from 'react';
import styled from 'styled-components';

const GameoverWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  button {
    border-image: linear-gradient(to right, #3f5efb, #fc466b) 1;
    border-image-width: 5px;
    padding: 0.8rem 2rem;
    background-color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 900;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;
function Gameover({ setPlaying }) {
  return (
    <GameoverWrapper>
      <h1>Game Over!</h1>
      <button onClick={() => setPlaying(true)}> Play Again?</button>
    </GameoverWrapper>
  );
}

export default Gameover;
