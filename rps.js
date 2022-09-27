
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let getComputerChoice = () => {
    rand = getRndInteger(1,3);
    let choice = "";

    if (rand === 1){
        choice = "rock"
    } else if (rand === 2){
        choice = "paper"

    } else if (rand === 3){
        choice = "scissors"
    }

    return choice;
}

let playRound = (playerSelection, computerSelection) => {

    let ps = playerSelection.toLowerCase();

    let cs = computerSelection;

    if(ps === "rock" && cs === "rock"){
        return ["You both picked Rock. It's a draw.", "tie"]
    } else if (ps === "rock" && cs === "paper"){
        return ["Paper beats Rock. You Lose!", "cwin"]
    } else if (ps === "rock" && cs === "scissors"){
        return ["Rock beats Scissors! You Win!", "pwin"]
    } else if (ps === "paper" && cs === "rock") {
        return ["Paper beats Rock! You Win!", "pwin"]

    } else if (ps === "paper" && cs === "paper") {
        return ["You both picked paper. It's a draw.", 'tie']
        
    } else if (ps === "paper" && cs === "scissors") {
        return ["Scissors beats Paper. You Lose!", "cwin"]
        
    } else if (ps === "scissors" && cs === "rock") {
        return ["Rock beats Scissors. You Lose!", "cwin"]
        
    } else if (ps === "scissors" && cs === "paper") {
        return ["Scissors beats Paper! You Win!", "pwin"]
        
    } else if (ps === "scissors" && cs === "scissors") {
        return ["You both picked Scissors. It's a draw.", "tie"]
        
    }

}


let pPoints = document.querySelector(".pPoints");
let cPoints = document.querySelector(".cPoints");

let roundResult = document.querySelector(".outcome");

let end = document.querySelector(".end");

let refresh = document.querySelector(".refresh");
let playAgain = document.createElement("button");
playAgain.classList.add('playAgain');
playAgain.textContent = "Play Again";
playAgain.addEventListener("click", function(){
    window.location.reload();
});





let playerScore = 0;
let computerScore = 0;
    

let game = (pc) => {

    if(playerScore === 5 || computerScore === 5){
        return; 
    }

    let gameOutcome = "";


    let result = playRound(pc, getComputerChoice()); 

    if(result[1] === "pwin"){
        playerScore += 1;
        
    } else if(result[1] === "cwin"){
        computerScore += 1
            
    }

    

    pPoints.textContent = `Player Score: ${playerScore}`;
    cPoints.textContent = `Computer Score: ${computerScore}`;

    roundResult.textContent = result[0];

    if(playerScore === 5 || computerScore === 5){

        if (playerScore > computerScore){
            gameOutcome = "You have defeated the computer!";
        } else if (computerScore > playerScore){
            gameOutcome = "The computer has defeated you!";
        }

        end.textContent = gameOutcome;

        refresh.appendChild(playAgain);

    }
        

        



}



document.getElementById("rock").addEventListener("click", function(){
    game('rock');
});

document.getElementById("paper").addEventListener("click", function(){
    game('paper');
});
document.getElementById("scissors").addEventListener("click", function(){
    game('scissors');
});


document.getElementsByClassName("playAgain").addEventListener("click", function(){
    window.location.reload();
});


