// Randomly determines the cpu player's choice between rock, paper, or scissors.
function computerPlay() {
    let roll = Math.random();
    if (roll < 0.33) {
        return "Rock";
    } else if (roll >= 0.33 && roll < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Plays one round of RPS using the player's choice and the cpu's choice.
function playRound(playerSelection, computerSelection) {
    playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase === "rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === "Rock") {
            return "It's a tie!";
        }
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors!";
        }
    } else if (playerSelectionLowerCase === "paper") {
        if (computerSelection === "Paper") {
            return "It's a tie!";
        }
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock!";
        }
        if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelectionLowerCase === "scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper!";
        }
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors!";
        }
        if (computerSelection === "Scissors") {
            return "It's a tie!";
        }
    }
}

// Determines the winner of the round
function determineWinner(results) {
    let resultsSubstr = results.substring(0, 5);

    if (resultsSubstr === "You W") {
        return 'player';
    } else if (resultsSubstr === 'You L') {
        return 'cpu';
    }

    return 'tie';
}

// Executes the entire game of RPS
function game() {
    let playerWins = 0;
    let cpuWins = 0;

    const rockBtn = document.querySelector("#rockBtn");
    const paperBtn = document.querySelector("#paperBtn");
    const scissorsBtn = document.querySelector("#scissorsBtn");
    const winsDisplayContainer = document.querySelector(".wins-display-container");
    const playerWinsElement = document.querySelector("#playerWins");
    const cpuWinsElement = document.querySelector("#cpuWins");
    const resultTextContainer = document.querySelector(".result-text-container");
    const resultText = document.querySelector("#resultText");
    
    rockBtn.addEventListener("click", () => {
        resultText.textContent = playRound("rock", computerPlay());
        let winnerOfRound = determineWinner(resultText.textContent);
        if (winnerOfRound === 'player') {
            playerWins++;
        } else if (winnerOfRound === 'cpu') {
            cpuWins++;
        }
        playerWinsElement.textContent = `Your Wins: ${playerWins}`;
        cpuWinsElement.textContent = `CPU Wins: ${cpuWins}`;
        winsDisplayContainer.replaceChildren(playerWinsElement, cpuWinsElement);
    });

    console.log(
        "Here are the final results...\nPlayer Wins: " +
            playerWins +
            "\nCPU Wins: " +
            cpuWins
    );

    if (playerWins > cpuWins) {
        console.log(
            "The player wins overall with " + playerWins + " round wins!"
        );
    } else {
        console.log("The cpu wins overall with " + cpuWins + " round wins!");
    }
}

game();
