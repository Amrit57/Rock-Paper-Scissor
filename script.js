
//create btn which selects and matches the user choice.
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')




// Ask input from user which is case insensitive.
const opt = ["ROCK", "PAPER", "SCISSOR"];
let playerSelection;
let text;
let result;
let round = 0;


//variables to show score.
let scoreText;
let userScore = 0;
let computerScore = 0;
let draw = 0;

//Create a div to show the game results.

const container = document.querySelector('.container');
let div = document.createElement('div');
div.classList = 'result';
container.appendChild(div);
const para = document.createElement("p");
div.appendChild(para);
const resultPara = document.createElement('p');
resultPara.classList = 'result-para'
div.appendChild(resultPara);
const score = document.createElement('p')
div.appendChild(score)

//Reset function to restart the game.
function reset() {
    resultPara.textContent = '';
    div.style.display = "none";
    round = 0;
    userScore = 0;
    computerScore = 0;
    draw = 0;
    console.log('hello')

};

//Restart button to reset the game.
const restart = document.querySelector(".restart")
restart.addEventListener('click', reset,)

//Adding events to the btns.
rock.addEventListener('click', selectRock);
function selectRock() {
    let playerSelection = opt[0];
    userChoice = playerSelection;
    game();

}

paper.addEventListener('click', selectPaper);
function selectPaper() {
    let playerSelection = opt[1];
    userChoice = playerSelection;
    game();



}
scissor.addEventListener('click', selectScissor);
function selectScissor() {
    let playerSelection = opt[2];
    userChoice = playerSelection;
    game();

}

//Function which runs playrgound and shows final result.
function game() {
    div.style.display = "block";
    if (round < 4) {
        playGround()
        return;
    } else {
        if (userScore > computerScore) {
            let result = ` You win!`;
            resultPara.textContent = result;
        } else if (userScore < computerScore) {
            let result = ` You lose!`;
            resultPara.textContent = result;

        } else {
            let result = ` Draw!`;
            resultPara.textContent = result;
        }
    }


}



//Function which runs the game and takes input from player and computer.
function playGround() {

    // create a function which let computer choose random option. (ROCK, PAPER OR SCISSOR).
    const computerInput = () => {
        const randomIndex = Math.floor(Math.random() * opt.length)
        const computerInput = opt[randomIndex]
        return computerInput;
    }
    const computerChoice = computerInput();





    // Condition that decides the winner
    if (userChoice === "ROCK" && computerChoice === "SCISSOR") {
        userScore++;
        round++;
        let text = `USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;




    } else if (userChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
        round++;
        let text = `User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;



    } else if (userChoice === "SCISSOR" && computerChoice === "PAPER") {
        userScore++
        round++;
        let text = `USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;



    } else if (userChoice === "SCISSOR" && computerChoice === "ROCK") {
        computerScore++
        round++;
        let text = `User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;



    } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
        userScore++;
        round++;
        let text = `USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;



    } else if (userChoice === "PAPER" && computerChoice === "SCISSOR") {
        computerScore++;
        round++;
        let text = `User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;

    }
    else if (userChoice === computerChoice) {
        round++;
        draw++;
        let text = `User : ${userChoice}  AI: ${computerChoice}, DRAW`;
        para.textContent = text;
        let scoreText = `User: ${userScore}  AI: ${computerScore}  Draw: ${draw}`;
        score.textContent = scoreText;

    }

    //Condition that shows result after 5 rounds.
    console.log(`User: ${userScore}`);
    console.log(`AI: ${computerScore}`);
}




