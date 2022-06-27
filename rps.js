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
        return "player";
    } else if (resultsSubstr === "You L") {
        return "cpu";
    }

    return "tie";
}

function updateUI(
    playerCurrWins,
    cpuCurrWins,
    playerWinsElement,
    cpuWinsElement,
    resultText,
    playerChoice = ""
) {
    let playerWins = playerCurrWins;
    let cpuWins = cpuCurrWins;

    if (playerChoice === "") {
        playerWinsElement.textContent = `Your Wins: ${playerWins}`;
        cpuWinsElement.textContent = `CPU Wins: ${cpuWins}`;
        resultText.innerHTML = "Click on a button below to start a<br>first to 5 game of RPS with the CPU."
        return [playerWins, cpuWins];
    }

    resultText.textContent = playRound(playerChoice, computerPlay());

    let winnerOfRound = determineWinner(resultText.textContent);
    if (winnerOfRound === "player") {
        playerWins++;
    } else if (winnerOfRound === "cpu") {
        cpuWins++;
    }

    playerWinsElement.textContent = `Your Wins: ${playerWins}`;
    cpuWinsElement.textContent = `CPU Wins: ${cpuWins}`;

    return [playerWins, cpuWins];
}

function didGameEnd(playerWins, cpuWins, resultText) {
    if (playerWins === 5) {
        resultText.innerHTML = "The player wins!<br>Click any button to reset.";
        return true;
    }
    if (cpuWins === 5) {
        resultText.innerHTML = "The cpu wins!<br>Click any button to reset.";
        return true;
    }

    return false;
}

// Executes the entire game of RPS
function game() {
    let playerWins = 0;
    let cpuWins = 0;
    let gameEnd = false;

    const playerWinsElement = document.querySelector("#playerWins");
    const cpuWinsElement = document.querySelector("#cpuWins");
    const resultText = document.querySelector("#resultText");
    const rpsBtnContainer = document.querySelector(".rpsBtn-container");

    rpsBtnContainer.addEventListener("click", (e) => {
        let isButton =
            e.target.nodeName === "BUTTON" || e.target.nodeName === "I";
            
        if (!isButton) {
            return;
        }

        if (gameEnd) {
            playerWins = 0;
            cpuWins = 0;
            gameEnd = false;
            updateUI(playerWins, cpuWins, playerWinsElement, cpuWinsElement, resultText);
            return;
        }

        let playerChoice = "";
        if (
            e.target.id === "rockBtn" ||
            e.target.parentElement.id === "rockBtn"
        ) {
            playerChoice = "rock";
        } else if (
            e.target.id === "paperBtn" ||
            e.target.parentElement.id === "paperBtn"
        ) {
            playerChoice = "paper";
        } else if (
            e.target.id === "scissorsBtn" ||
            e.target.parentElement.id === "scissorsBtn"
        ) {
            playerChoice = "scissors";
        }

        let winningResults = updateUI(
            playerWins,
            cpuWins,
            playerWinsElement,
            cpuWinsElement,
            resultText,
            playerChoice
        );

        playerWins = winningResults[0];
        cpuWins = winningResults[1];
        
        gameEnd = didGameEnd(playerWins, cpuWins, resultText);
    });
}

game();