/**
 * 
 *  TASK:
 *      Create a rock-paper-scissor game against computer.
 * 
 *  NOTE:
 *      Game is played on console.
 *      Game has two players: User and Computer
 *      User needs to input a hand to play
 *      Computer needs randomize hand
 */

/**
 * 
 * Ask user "Start Game? "
 * If user inputs "no"
 *  - Exit the game
 * If user inputs "yes"
 *  - Start the game
 *  - Ask user "Pick a hand: "
 *  - Generate a random hand for computer
 *  - Determine the result
 *  - Tell the user the result
 *  Ask the user "Play again? "
 * If user inputs no "no" 
 *  - Exit the game
 * If user inputs "yes"
 *  - Repeat the game
 *
 */

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

