import React from 'react';
import './App.css';

export default function App() {
  const mortyData = [];

  const fetchCharacterData = async () => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?name=morty&status=alive'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCharacterData = async () => {
    const characterData = await fetchCharacterData();
    for (let count = 0; count < 20; count++) {
      mortyData.push(characterData.results[count]);
    }
    return mortyData;
  };

  getCharacterData();
  console.log(mortyData);
  return (
    <div className="App">
      <header className="App-header">Rick & Morty : A Memory Card Game</header>
    </div>
  );
}
