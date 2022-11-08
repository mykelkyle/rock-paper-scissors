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
      return "You win! Rock beats scissors.";
    } else {
      return "You lose! Paper beats rock.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You win! Paper beats rock.";
    } else {
      return "You lose! Scissors beat paper.";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return "You win! Scissors beat paper.";
    } else {
      return "You lose! Rock beats scissors.";
    }
  } else {
    return "Syntax error. Check your spelling and try again!";
  }
}

// loops through 5 rounds of RPS, keeps score, and reports a winner/loser at the end
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(renderGame(playerSelection, computerSelection));
  }
}

game();
