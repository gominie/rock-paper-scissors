const stringCollection = ["Rock","Paper","Scissors"]
//computer choice
function getComputerChoice(collection) {
    const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}
const computerSelection = getComputerChoice(stringCollection)


let playerSelection = prompt("Rock, paper or scissors");
function playRound(playerSelection, computerSelection) {
     if (!stringCollection.includes(playerSelection)) {
        return "Invalid input. Please choose Rock, Paper, or Scissors."
     }
    if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();
    }

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")   
    ) {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    } else {
      return `${computerSelection} beats ${playerSelection}. You lose!`;
    }
    
}

let result = playRound(playerSelection, computerSelection);
console.log(result)