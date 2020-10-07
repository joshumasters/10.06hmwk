let compScore = 0;
let userScore = 0;

const userScore_span = document.getElementById("userScore");

const compScore_span = document.getElementById("compScore");

const scoreBoard_div = document.querySelector(".scoreboard");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function wins(user, computer){
    userScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You Win!"
    document.getElementById(user).classList.add('green-glow');
}


function lose(user, computer){
    compScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + ". You Lose!"

}
function draw(user, computer){
    result_p.innerHTML = "Its a Draw!"
}


function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        wins(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
            
       
   }

}
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})



