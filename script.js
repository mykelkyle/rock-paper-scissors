let playerScore = 0;
let computerScore = 0;
let playerScoreMessage = "Your score is: ";
let computerScoreMessage = "The computer's score is: ";
let pScore = document.getElementById("pScore");
let cScore = document.getElementById("cScore");
const btnContainer = document.getElementById("btn-container");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const results = document.getElementById("results");
const gameOver = document.getElementById("gameOver");
const btnClear = document.createElement("button");

// event listeners for btns -- runs logic for single game of RPS
btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  const computerSelection = getComputerChoice();
  renderGame(playerSelection, computerSelection);
});

btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  const computerSelection = getComputerChoice();
  renderGame(playerSelection, computerSelection);
});

btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  renderGame(playerSelection, computerSelection);
});

btnClear.addEventListener("click", () => {
  btnRock.classList.remove("hidden");
  btnPaper.classList.remove("hidden");
  btnScissors.classList.remove("hidden");

  btnClear.classList.add("hidden");
  pScore.textContent = 0;
  cScore.textContent = 0;
  gameOver.textContent = "";
  results.textContent = "Press any button to start!";
});

// returns a random item from array
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = [Math.floor(Math.random() * choices.length)];
  const cpuChoice = choices[randomIndex];
  return cpuChoice;
}

// conditional logic for a single game of RPS
function renderGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      pScore.textContent++;
      results.textContent = "You win! Rock beats scissors.";
    } else {
      cScore.textContent++;
      results.textContent = "You lose! Paper beats rock.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      pScore.textContent++;
      results.textContent = "You win! Paper beats rock.";
    } else {
      cScore.textContent++;
      results.textContent = "You lose! Scissors beat paper.";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      pScore.textContent++;
      results.textContent = "You win! Scissors beat paper.";
    } else {
      cScore.textContent++;
      results.textContent = "You lose! Rock beats scissors.";
    }
  }

  if (pScore.textContent == 5) {
    btnClear.classList.remove("hidden");
    gameOver.textContent = "Game over. You win!";

    btnRock.classList.add("hidden");
    btnPaper.classList.add("hidden");
    btnScissors.classList.add("hidden");

    btnClear.textContent = "Play Again?";
    btnClear.classList.add("btnClear");
    gameOver.appendChild(btnClear);
  } else if (cScore.textContent == 5) {
    btnClear.classList.remove("hidden");
    gameOver.textContent = "Game over. You lose!";

    btnRock.classList.add("hidden");
    btnPaper.classList.add("hidden");
    btnScissors.classList.add("hidden");

    btnClear.textContent = "Play Again?";
    btnClear.classList.add("btnClear");
    gameOver.appendChild(btnClear);
  }
}
