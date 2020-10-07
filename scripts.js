let compScore = 0;
let userScore = 0;

const userScore_span = document.getElementById("userScore");

const compScore_span = document.getElementById("compScore");

const scoreBoard_div = document.querySelector(".scoreboard");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

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
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow');}, 600)
}


function lose(user, computer){
    compScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + ". You Lose!"
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow');}, 600)
}
function draw(user, computer){
    result_p.innerHTML = "Its a Draw!"
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow');}, 600)
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



