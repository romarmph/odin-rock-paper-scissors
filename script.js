const computerPlay = () => {
    const HAND = ["rock", "paper", "scissors"];
    return HAND[Math.floor(Math.random() * 3)];
};

const playerPlay = () => prompt("Please pick a hand:\nROCK | PAPER | SCISSORS");


function playRound(playerSelection, computerSelection) {
    const LOSE = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const WIN = `You Win! ${playerSelection} beats ${computerSelection}`;

    if (playerSelection.toLowerCase() == computerSelection)
        return "Game Draw!";
    
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors")
            return WIN;
        else
            return LOSE;
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock")
            return WIN;
        else
            return LOSE;
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper")
            return WIN;
        else
            return LOSE;
    }

    return "Incorrect input try again!"
}



function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
}

game();

