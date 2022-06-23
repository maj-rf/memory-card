import { useState } from 'react';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import { shuffleDeck } from './utils/shuffleDeck';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const { isLoading, error, data } = useQuery('mortys', () =>
    axios('https://rickandmortyapi.com/api/character/?name=morty&status=alive')
  );
  const [deck, setDeck] = useState([]);

  const playRound = () => {
    setDeck(shuffleDeck(data?.data.results));
  };

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem optio quam
        vero cumque.
      </p>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Gameboard data={data?.data.results} playRound={playRound} />
      )}
    </div>
  );
}

export default App;
