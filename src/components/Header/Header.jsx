import React from 'react';
import { HeaderWrapper } from './Header.style';
function Header({ score, highScore }) {
  return (
    <HeaderWrapper>
      <h1>Rick and Morty: Memory Game</h1>
      <div>
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
