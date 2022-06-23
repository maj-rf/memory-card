import { useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import { shuffleDeck } from './utils/shuffleDeck';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const { isLoading, error, data } = useQuery('mortys', () =>
    axios('https://rickandmortyapi.com/api/character/?name=morty&status=alive')
  );
  const [deck, setDeck] = useState([]);
  const [picks, setPicks] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    setDeck(data?.data.results);
  }, [data]);

  const playRound = (id) => {
    setDeck((prevState) => shuffleDeck(prevState));
    if (picks.includes(id)) return gameOver();
    setPicks(picks.concat(id));
    setScore((prevState) => prevState + 1);
  };

  const gameOver = () => {
    setScore(0);
    setPicks([]);
    if (score > highScore) setHighScore(score);
    return alert('gameover');
  };

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="App">
      <h2>Score: {score}</h2>
      <h2>HighScore: {highScore}</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Gameboard data={deck} playRound={playRound} />
      )}
    </div>
  );
}

export default App;
