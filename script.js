const stringCollection = ["rock", "paper", "scissors"];

function getComputerChoice(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function playRound(playerSelection, computerSelection) {
if (playerSelection === null) {
        return "You canceled the game.";
    }

    playerSelection = playerSelection.toLowerCase();

if (!stringCollection.includes(playerSelection)) {
    return "Invalid input. Please choose rock, paper, or scissors.";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `${playerSelection} beats ${computerSelection}. You win!`;
  } else {
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
let playerSelection;
while (true) {
    playerSelection = prompt("Rock, paper, or scissors");
if (playerSelection !== null) {
                playerSelection = playerSelection.toLowerCase(); // Convert input to lowercase
}
if (stringCollection.includes(playerSelection)) {
                break;
}
alert("Invalid input. Please choose rock, paper, or scissors.");
        }
    const computerSelection = getComputerChoice(stringCollection);
    let result = playRound(playerSelection, computerSelection);
    alert(result);
  }
}

game(5);

