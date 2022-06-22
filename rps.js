// Randomly determines the cpu player's choice between rock, paper, or scissors.
function computerPlay() {
    let roll = Math.random();
    if (roll < .33) {
        return 'Rock';
    } else if (roll >= .33 && roll < .67) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Plays one round of RPS using the player's choice and the cpu's choice.
function playRound(playerSelection, computerSelection) {
    playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase === 'rock') {
        if (computerSelection === 'Paper') return 'You Lose! Paper beats Rock';
        if (computerSelection === 'Rock') return 'It\'s a tie!';
        if (computerSelection === 'Scissors') return 'You Win! Rock beats Scissors!';
    } else if (playerSelectionLowerCase === 'paper') {
        if (computerSelection === 'Paper') return 'It\'s a tie!';
        if (computerSelection === 'Rock') return 'You Win! Paper beats Rock!';
        if (computerSelection === 'Scissors') return 'You Lose! Scissors beats Paper';
    } else if (playerSelectionLowerCase === 'scissors') {
        if (computerSelection === 'Paper') return 'You Win! Scissors beats Paper!';
        if (computerSelection === 'Rock') return 'You Lose! Rock beats Scissors!';
        if (computerSelection === 'Scissors') return 'It\'s a tie!';
    }
}

// Executes the entire game of RPS
function game() {
    let playerWins = 0;
    let cpuWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('It\'s time to choose! Rock, Paper, or Scissors?!');
        let results = playRound(playerChoice, computerPlay());
        console.log(results);

        results = results.substring(0, 5);

        if (results === 'You W') {
            playerWins++;
        } else if (results === 'You L') {
            cpuWins++;
        }
    }

    console.log('Here are the final results...\nPlayer Wins: ' + playerWins + '\nCPU Wins: ' + cpuWins);
    if (playerWins > cpuWins) {
        console.log('The player wins overall with ' + playerWins + ' round wins!');
    } else {
        console.log('The cpu wins overall with ' + cpuWins + ' round wins!');
    }
}

game();