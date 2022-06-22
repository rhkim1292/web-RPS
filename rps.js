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

console.log(playRound('paper', 'Scissors'));