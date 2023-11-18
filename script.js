let choices = ['Rock', 'Paper', 'Scissors']

let outcomes = ["RockPaper", "PaperScissors", "ScissorsRock"]

let round = 1;

const content = document.querySelector('#content');

//styling round number
const roundContainer = document.querySelector('#roundContainer');
roundContainer.style.textAlign = "center";
roundContainer.style.fontSize = "30px";
const roundNumber = document.querySelector('#roundNumber');

function getComputerChoice() {
    choose = choices[Math.floor(Math.random() * choices.length)];
    return choose;
}


function computerWins(selection1, selection2){
    content.textContent = `You lose! You chose ${selection1} and it loses to computer's choice of ${selection2}`
}

function playerWins (selection1, selection2){
    content.textContent = `You win! You chose ${selection1} and it beats computer's choice of ${selection2}`;
}

function compare(selection1, selection2) {
    if (selection1 == selection2) {
        content.textContent = `Draw! Both of you picked ${selection2}`
        playerPoint.textContent = `${playerScore}`;
        computerPoint.textContent = `${computerScore}`;
    }

    else {
        outcome = String(selection1 + selection2);
        if (outcomes.includes(outcome)) {
            computerWins(selection1, selection2);
            computerScore++;
            playerPoint.textContent = `${playerScore}`;
            computerPoint.textContent = `${computerScore}`
            if (computerScore == 5) {
                //computerPoint.textContent = `${computerScore}`;
                alert("Computer wins the whole game!")
                return true;
            }
            else return false;
        } 
        else {
            playerWins(selection1, selection2)
            playerScore++;
            playerPoint.textContent = `${playerScore}`;
            computerPoint.textContent = `${computerScore}`
            if (playerScore == 5){
                //playerPoint.textContent = `${playerScore}`;
                alert("You win the whole game!")
                return true;
            }
            else return false;
        }
    }
}


function playRound (playerSelection) {
    let computerSelection = getComputerChoice();
    
    if (compare(playerSelection, computerSelection)){
        round = 1;
        playerScore = 0;
        computerScore = 0;
        roundNumber.textContent = `Round ${round}`;
    }
    
    else if (round >= 1){
        round++;
        roundNumber.textContent = `Round ${round}`;
    }
}

let playerScore = 0;
let computerScore = 0;


let buttons = document.querySelector('#buttonS');
buttons.addEventListener('click', (event) => {
    let target = event.target; 

    switch(target.id) {
        case 'rock':
            playRound("Rock");
            break;
        case 'paper':
            playRound("Paper");
            break;
        case 'scissors':
            playRound("Scissors");
            break;
        }
});

//styling the scoreboard
const scoreboard = document.querySelector('#scoreboard');
scoreboard.style.display = "grid";
scoreboard.style.gridTemplateColumns = "repeat(2, 1fr)"; //or 1fr, 1fr
scoreboard.style.fontFamily = "Quicksand, sans-serif";
scoreboard.style.paddingLeft = "200px";
scoreboard.style.paddingRight = "200px";

//creating the elements for player, computer and the scores
const player = document.createElement('div');
player.classList.add('scoreboard__name');
player.textContent = 'Player';
scoreboard.appendChild(player);

const computer = document.createElement('div');
computer.classList.add('scoreboard__name');
computer.textContent = 'Computer';
scoreboard.appendChild(computer);

const playerPoint= document.createElement('div');
playerPoint.classList.add('scoreboard__score');
playerPoint.textContent = '0';
scoreboard.appendChild(playerPoint);

const computerPoint = document.createElement('div');
computerPoint.classList.add('scoreboard__score');
computerPoint.textContent = '0';
scoreboard.appendChild(computerPoint);

//styling the player, computer and scores
const scoreboardNames = document.querySelectorAll('.scoreboard__name');
scoreboardNames.forEach(element => {
    element.style.padding = "10px";
    element.style.textAlign = "center";
    element.style.fontWeight = "bold";
    element.style.borderBottom = "1px solid #ddd"
});

const scoreboardScores = document.querySelectorAll('.scoreboard__score');
scoreboardScores.forEach(element => {
    element.style.padding = "10px";
    element.style.textAlign = "center";
});