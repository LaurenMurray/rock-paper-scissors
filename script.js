function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() == "rock") {
        return "rock";
    } else if (humanChoice.toLowerCase() == "paper") {
        return "paper";
    } else if (humanChoice.toLowerCase() == "scissors") {
        return "scissors";
    } else {
        return null;
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3)) + 1;
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            alert("You win! Rock beats Scissors.")
            return "human";
        } else if (computerChoice == "paper") {
            alert("You lose! Paper beats Rock.")
            return "computer";
        } else {
            alert("It's a draw! You both chose Rock.")
            return "draw";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            alert("You win! Paper beats Rock.")
            return "human";
        } else if (computerChoice == "scissors") {
            alert("You lose! Scissors beat Paper.")
            return "computer";
        } else {
            alert("It's a draw! You both chose Paper.")
            return "draw";
        }
    } else {
        if (computerChoice == "paper") {
            alert("You win! Scissors beat Paper.")
            return "human";
        } else if (computerChoice == "rock") {
            alert("You lose! Rock beats Scissors.")
            return "computer";
        } else {
            alert("It's a draw! You both chose Scissors.")
            return "draw";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        console.log("Round: " + round)
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);

        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        alert("You win! " + humanScore + " - " + computerScore)
    } else if (computerScore > humanScore) {
        alert("You lose! " + computerScore + " - " + humanScore)
    } else {
        alert("It's a draw! " + humanScore + " - " + computerScore)
    }
}

playGame();


