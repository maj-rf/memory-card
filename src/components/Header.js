import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Rick-and-Morty-Logo"></img>A Memory
      Card Game
    </header>
  );
}
