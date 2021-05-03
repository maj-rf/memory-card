export const shuffleDeck = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
