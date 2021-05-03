import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import { fetchData } from './helpers/FetchData';
import { shuffleDeck } from './helpers/ShuffleDeck';

export default function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    fetchData().then((newData) => {
      setDeck(shuffleDeck(newData));
    });
  }, []); //shuffle new deck on mount

  return (
    <div className="App">
      <Header />
      <Gameboard deck={deck} />
    </div>
  );
}
