import './App.css';
import useData from './components/hooks/useData';
import Gameboard from './components/Gameboard';
import { shuffleDeck } from './utils/shuffleDeck';
function App() {
  const results = useData(
    'https://rickandmortyapi.com/api/character/?name=morty&status=alive'
  );
  console.log(results?.results);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem optio quam
        vero cumque.
      </p>
      <Gameboard results={results} />
    </div>
  );
}

export default App;
