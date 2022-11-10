let playerScore = 0;
let computerScore = 0;
let playerScoreMessage = "Your score is: ";
let computerScoreMessage = "The computer's score is: ";

// loops through 5 rounds of RPS, keeps score, and reports a winner/loser at the end
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(renderGame(playerSelection, computerSelection));
    console.log(playerScoreMessage + playerScore);
    console.log(computerScoreMessage + computerScore);

    if (i === 4) {
      if (playerScore > computerScore) {
        console.log(`The game has ended! You are the winner!`);
      } else if (computerScore > playerScore) {
        console.log(`The game has ended! The computer wins!`);
      } else {
        console.log(`The game has ended! It's a tie!`);
      }
      playerScore = 0;
      computerScore = 0;
    }
  }
}

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
    return "It's a tie!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      return "You win! Rock beats scissors.";
    } else {
      computerScore++;
      return "You lose! Paper beats rock.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore++;
      return "You win! Paper beats rock.";
    } else {
      computerScore++;
      return "You lose! Scissors beat paper.";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      return "You win! Scissors beat paper.";
    } else {
      computerScore++;
      return "You lose! Rock beats scissors.";
    }
  } else {
    return "Syntax error. Check your spelling and try again!";
  }
}

game();
