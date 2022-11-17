import axios from 'axios'

export async function fetchMortys() {
  const { data } = await axios.get(
    'https://rickandmortyapi.com/api/character/?name=morty&status=alive',
  )
  const arr = []
  for (let i = 0; i < 13; i++) {
    if (i === 10) continue
    arr.push({
      id: data.results[i].id,
      name: data.results[i].name,
      image: data.results[i].image,
    })
  }
  return arr
}
