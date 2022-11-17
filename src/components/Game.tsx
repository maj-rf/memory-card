import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

async function fetchMortys() {
  const data = await axios.get(
    'https://rickandmortyapi.com/api/character/?name=morty&status=alive',
  )
  return data.data.results
}

export const Game = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['morty'],
    queryFn: fetchMortys,
  })

  console.log(data)

  return (
    <div className="bg-blue-400 max-w-screen-md h-full m-auto">
      <ul className="grid grid-cols-3 place-items-center gap-4">
        {isLoading
          ? 'Loading...'
          : isError
          ? 'Error'
          : isSuccess
          ? data.map((card: any) => {
              return (
                <li
                  key={card.id}
                  className="border-2 w-20 h-20 flex justify-center items-center"
                >
                  {card.name}
                </li>
              )
            })
          : null}
      </ul>
    </div>
  )
}
