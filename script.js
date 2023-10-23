const stringCollection = ["Rock","Paper","Scissors"]
function getComputerChoice(collection) {
    const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

const computerChoice = getComputerChoice(stringCollection)
