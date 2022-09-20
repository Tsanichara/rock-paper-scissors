
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
        return "You both picked Rock. It's a draw."
    } else if (ps === "rock" && cs === "paper"){
        return "Paper beats Rock. You Lose!"
    } else if (ps === "rock" && cs === "scissors"){
        return "Rock beats Scissors! You Win!"
    } else if (ps === "paper" && cs === "rock") {
        return "Paper beats Rock! You Win!"

    } else if (ps === "paper" && cs === "paper") {
        return "You both picked paper. It's a draw."
        
    } else if (ps === "paper" && cs === "scissors") {
        return "Scissors beats Paper. You Lose!"
        
    } else if (ps === "scissors" && cs === "rock") {
        return "Rock beats Scissors. You Lose!"
        
    } else if (ps === "scissors" && cs === "paper") {
        return "Scissors beats Paper! You Win!"
        
    } else if (ps === "scissors" && cs === "scissors") {
        return "You both picked Scissors. It's a draw."
        
    }


}