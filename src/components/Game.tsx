import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchMortys } from '../utils/fetchMortys'
import { shuffleDeck } from '../utils/shuffleDeck'
import { Morty } from '../types'
import { Spinner } from '../components/Spinner'

type Props = {
  score: number
  highScore: number
  handleScore: (val: number) => void
  handleHighScore: (val: number) => void
}

export const Game = ({
  score,
  highScore,
  handleHighScore,
  handleScore,
}: Props) => {
  const [deck, setDeck] = useState<Morty[]>([])
  const [picks, setPicks] = useState<number[]>([])
  const [transition, setTransition] = useState(false)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['morty'],
    queryFn: fetchMortys,
    onSuccess: (data) => setDeck(data),
  })

  const gameOver = () => {
    handleScore(0)
    setPicks([])
    if (score > highScore) handleHighScore(score)
    return
  }

  const playRound = (id: number) => {
    setDeck((prevState) => shuffleDeck(prevState))
    if (picks.includes(id)) return gameOver()
    setPicks(picks.concat(id))
    handleScore(score + 1)
    showTransition()
  }

  function showTransition() {
    setTransition(true)
    const timer = setTimeout(() => {
      setTransition(false)
    }, 500)
    return () => clearInterval(timer)
  }

  return (
    <div className="max-w-screen-md h-full m-auto mt-6 p-4">
      {transition ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <ul className="grid grid-cols-3 md:grid-cols-4 place-items-center gap-4">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            'Error'
          ) : data ? (
            deck.map((card: Morty) => {
              return (
                <li
                  key={card.id}
                  className="border-2 flex-col justify-center items-center cursor-pointer hover:border-cyan-400"
                  onClick={() => playRound(card.id)}
                >
                  <img src={card.image} alt={card.name} />
                  <p className=" text-sm text-center">{card.name}</p>
                </li>
              )
            })
          ) : null}
        </ul>
      )}
    </div>
  )
}
