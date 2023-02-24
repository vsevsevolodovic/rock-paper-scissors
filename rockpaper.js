
const rps = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomRps;
    randomRps = rps[Math.floor(Math.random()*rps.length)];
    return randomRps
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a tie!"
    } else if(playerSelection.toLowerCase() == "rock") {
        if(computerSelection == "paper") {
            return "You lose! Paper beats rock!"
        } else if(computerSelection == "scissors") {
            return "You win! Rock beats scissors!"
        }
    } else if(playerSelection.toLowerCase() == "paper") {
        if(computerSelection == "rock") {
            return "You win! Paper beats rock!"
        } else if(computerSelection == "scissors") {
            return "You lose! Scissors beat paper!"
        }
    } else if(playerSelection.toLowerCase() == "scissors") {
        if(computerSelection == "rock") {
            return "You lose! Scissors beats rock!"
        } else if(computerSelection == "paper") {
            return "You win! Scissors beat paper!"
        }
    } 
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for(i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?")
        computerSelection = getComputerChoice()
        console.log(`Your choice: ${playerSelection}`)
        console.log(`Computer's choice:: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        if(playRound(playerSelection, computerSelection) == "It's a tie!") {
        } else if(playRound(playerSelection, computerSelection) == "You win! Rock beats scissors!" || playRound(playerSelection, computerSelection) == "You win! Paper beats rock!" || playRound(playerSelection, computerSelection) == "You win! Scissors beat paper!") {
            playerScore++
        } else {
            computerScore++
        }
        console.log(`Your score: ${playerScore}`)
        console.log(`Computer's score: ${computerScore}`)
    }
    if(computerScore > playerScore) {
        console.log("Computer wins these 5 rounds")
    } else if (computerScore < playerScore) {
        console.log("Yoy win these 5 rounds!")
    } else {
        console.log("It's a tiee!")
    }
}

game()