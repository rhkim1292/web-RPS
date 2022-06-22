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

console.log(computerPlay());