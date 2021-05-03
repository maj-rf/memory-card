import axios from 'axios';

export const fetchData = async () => {
  const mortyData = [];
  const rickAndMortyAPIUrl =
    'https://rickandmortyapi.com/api/character/?name=morty&status=alive';
  const response = await axios.get(rickAndMortyAPIUrl);
  for (let count = 0; count < 20; count++) {
    const id = response.data.results[count].id;
    const name = response.data.results[count].name;
    const image = response.data.results[count].image;
    mortyData.push({ id, name, image });
  }
  return mortyData;
};
