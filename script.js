function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = [Math.floor(Math.random() * choices.length)];
  const cpuChoice = choices[randomIndex];
  return cpuChoice;
}

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

// {
//   if (playerSelection === computerSelection) {
//     console.log("It's a tie!");
//   }
//   if (playerSelection == "rock" && computerSelection == "scissors") {
//     console.log("You win! Rock beats scissors.");
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     console.log("Computer wins! Paper beats rock.");
//   }
//   if (playerSelection == "paper" && computerSelection == "rock") {
//     console.log("You win! Paper beats rock.");
//   } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     console.log("Computer wins! Scissors beats paper.");
//   }
//   if (playerSelection == "scissors" && computerSelection == "paper") {
//     console.log("You win! Scissors beats paper.");
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     console.log("Computer wins! Rock beats scissors.");
//   }
// }

const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerSelection);
console.log(renderGame(playerSelection, computerSelection));
