import { Morty } from '../types'

export const shuffleDeck = (prevCards: Morty[]) => {
  const array = [...prevCards]
  let currentIndex = array.length
  let tempValue: Morty | number = 0
  let randomIndex = 0
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempValue
  }
  return array
}
