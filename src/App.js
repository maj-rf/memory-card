import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import { fetchData } from './helpers/FetchData';
import { shuffleDeck } from './helpers/ShuffleDeck';
import Scoreboard from './components/Scoreboard';

export default function App() {
  const [deck, setDeck] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dupeChecker, setDupeChecker] = useState([]);

  const playNextRound = () => {
    setCurrentScore(currentScore + 1);
    setDeck(shuffleDeck(deck));
  };

  const gameOverAndRestart = () => {
    if (currentScore > highScore) setHighScore(currentScore);
    setCurrentScore(0);
    setDeck(shuffleDeck(deck));
    console.log('GAME OVER');
  };

  useEffect(() => {
    fetchData().then((newData) => {
      setDeck(shuffleDeck(newData));
    });
  }, []); //shuffle new deck on mount

  const handleClick = (e) => {
    const selectedCardID = e.target.id;
    if (dupeChecker.includes(selectedCardID)) {
      gameOverAndRestart();
    } else {
      setDupeChecker(dupeChecker.concat(selectedCardID));
      playNextRound();
    }
  };

  return (
    <div className="App">
      <div className="top-nav">
        <Header />
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <Gameboard deck={deck} handleClick={handleClick} />
    </div>
  );
}
