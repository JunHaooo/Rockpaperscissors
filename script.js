choices = ['Rock', 'Paper', 'Scissors']

let playerScore = 0;
let computerScore = 0;

outcomes = {
    "RP": "computerWins",
    "PS": "computerWins",
    "SR": "computerWins",
    "PR": "playerWins",
    "SP": "playerWins",
    "RS": "playerWins",
}


function getComputerChoice() {
    choose = choices[Math.floor(Math.random() * choices.length)];
    return choose;
}

function playRound (selection1, selection2) {
    if (selection1 == selection2) {
        console.log(`Draw! Both of you picked ${selection2}`)
    }

    else {
        result = selection1.slice(0,1).toUpperCase() + selection2.slice(0,1);
        return result;
    }
  }

function computerWins(selection1, selection2){
    console.log(`You lose! You chose ${selection1} but it loses to computer's choice of ${selection2}`)
}

function playerWins (selection1, selection2){
    console.log(`You win! You chose ${selection1} and it beats computer's choice of ${selection2}`)
}


function game(){
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
if (outcomes[outcome] === "computerWins") {
    computerWins(playerSelection, computerSelection);
    computerScore++;
} 
else if (outcomes[outcome] === "playerWins") {
    playerWins(playerSelection, computerSelection);
    playerScore++;

if (computerScore == 5) {
        console.log("Computer wins the whole game!")
    }
    
else if (playerScore == 5) {
        console.log("You win the whole game!")
    }


}

while (computerScore < 5 || playerScore < 5) {
    game();
}
}

game();

