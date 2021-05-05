import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import Gameover from './components/Gameover';
import { fetchData } from './helpers/FetchData';
import { shuffleDeck } from './helpers/ShuffleDeck';

export default function App() {
  const [deck, setDeck] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);
  const [mode, setMode] = useState(true);

  const playNextRound = () => {
    setCurrentScore(currentScore + 1);
    setDeck(shuffleDeck(deck));
  };

  const gameover = () => {
    if (currentScore > highScore) setHighScore(currentScore);
    setMode(false);
  };

  const restartGame = () => {
    setCurrentScore(0);
    setPickedCards([]);
    setDeck(shuffleDeck(deck));
    setMode(true);
  };

  const handleClick = (e) => {
    if (pickedCards.includes(e.target.id)) {
      gameover();
    } else {
      setPickedCards(pickedCards.concat(e.target.id));
      playNextRound();
    }
  };

  useEffect(() => {
    fetchData().then((newData) => {
      setDeck(shuffleDeck(newData));
    });
  }, []); //shuffle new deck on mount

  useEffect(() => {
    if (currentScore === 20) gameover();
  }); //check if you win

  return (
    <div className="App">
      <div className="top-nav">
        <Header />
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      {mode ? (
        <Gameboard deck={deck} handleClick={handleClick} />
      ) : (
        <Gameover
          restartGame={restartGame}
          currentScore={currentScore}
        ></Gameover>
      )}
    </div>
  );
}
