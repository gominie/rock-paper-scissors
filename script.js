const stringCollection = ["rock", "paper", "scissors"];

function getComputerChoice(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === null) {
    return "You canceled the game.";
  }

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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
  playerSelection = "rock";
  playGame();
});

paper.addEventListener("click", function () {
  const result = playRound("paper", getComputerChoice(stringCollection));
  playerSelection = "paper";
  playGame();
});

scissors.addEventListener("click", function () {
  const result = playRound("scissors", getComputerChoice(stringCollection));
  playerSelection = "scissors";
  playGame();
});

function playGame() {
  const computerSelection = getComputerChoice(stringCollection);
  const result = playRound(playerSelection, computerSelection);
  resultDiv.innerHTML = result;
}

const resultDiv = document.querySelector(".results");

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    playGame(); // Call the playGame function instead of prompting the user
  }
}

game(5);
