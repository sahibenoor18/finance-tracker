// learned this from yt

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    msg.innerText = "Game was tied, Play Again";
    msg.style.backgroundColor = "#f4a261";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#606c38";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose, ${compChoice} beats your${userChoice}`;
        msg.style.backgroundColor = "#c1121f";
    }
}

const playGame = (userChoice)  => {
    // generate computer choice
    const compChoice = generateCompChoice();

    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false :true;
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})