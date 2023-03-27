const movesElement = document.getElementsByClassName("move");
const playerElement = document.getElementById("player");
const computerElement = document.getElementById("computer");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let computerMoves = ["✌️", "🤚", "✊"];
let computerMove = "";
let playerMove = "";
let playerScore = 0;
let computerScore = 0;

for (let moveElement of movesElement) {
  moveElement.addEventListener("click", () => {
    displayPlayerMove(moveElement.innerText);
    displayComputerMove();
    computerScores();
  });
}

function displayPlayerMove(move) {
  playerMove = move;
  playerElement.innerText = "🐸: " + playerMove;
}

function displayComputerMove() {
  let randomIndex = Math.floor(Math.random() * 3);
  computerMove = computerMoves[randomIndex];
  computerElement.innerText = "🤖: " + computerMove;
}

function computerScores() {
  if (
    (playerMove === "✊" && computerMove === "✌️") ||
    (playerMove === "🤚" && computerMove === "✊") ||
    (playerMove === "✌️" && computerMove === "🤚")
  ) {
    playerScore += 1;
    playerScoreElement.innerText = "🐸: " + playerScore;
  } else if (
    (computerMove === "✊" && playerMove === "✌️") ||
    (computerMove === "🤚" && playerMove === "✊") ||
    (computerMove === "✌️" && playerMove === "🤚")
  ) {
    computerScore += 1;
    computerScoreElement.innerText = "🤖: " + computerScore;
  }
}

function checkWinner(playerOne, playerTwo) {
  if (
    (playerOne === "✊" && playerTwo === "✌️") ||
    (playerOne === "🤚" && playerTwo === "✊") ||
    (playerOne === "✌️" && playerTwo === "🤚")
  ) {
    return true;
  } else {
    return false;
  }
}
