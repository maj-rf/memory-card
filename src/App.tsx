import { Game } from './components/Game'
import { Navbar } from './components/Navbar'
import { useState } from 'react'
function App() {
  const [score, setScore] = useState<number>(0)
  const [highScore, setHighScore] = useState<number>(0)

  const handleScore = (val: number) => {
    setScore(val)
  }

  const handleHighScore = (val: number) => {
    setHighScore(val)
  }
  return (
    <div className="App">
      <Navbar score={score} highScore={highScore} />
      <Game
        score={score}
        highScore={highScore}
        handleScore={handleScore}
        handleHighScore={handleHighScore}
      />
    </div>
  )
}

export default App
