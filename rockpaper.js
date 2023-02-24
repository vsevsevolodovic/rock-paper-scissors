
const rps = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomRps;
    randomRps = rps[Math.floor(Math.random()*rps.length)];
    return randomRps
}

console.log(getComputerChoice())