    // ****************Create a rock paper scissor Game. player VS computer********************


//Function which takes  runs the game and takes input from player and computer.
const playGround = () => {

    //variables to show score.
    let userScore = 0;
    let computerScore = 0;

    //Loop to run game for 5 rounds.
    for (i = 0; i < 5; i++) {


        // create a function which let computer choose random option. (ROCK, PAPER OR SCISSOR).
        const opt = ["ROCK", "PAPER", "SCISSOR"]
        const computerInput = () => {
            const randomIndex = Math.floor(Math.random() * opt.length)
            const computerInput = opt[randomIndex]
            return computerInput;
        }
        const computerChoice = computerInput();


        // Ask input from user which is case insensitive.

        const playerSelection = prompt("Enter Rock, Paper Or scissor? : ");
        const userChoice = playerSelection.toUpperCase();
       
        // Condition that decides the winner
        if (userChoice === "ROCK" && computerChoice === "SCISSOR") { userScore++;
            console.log(`USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            
           

        } else if (userChoice === "ROCK" && computerChoice === "PAPER") { computerScore++;
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
           
            


        } else if (userChoice === "SCISSOR" && computerChoice === "PAPER") { userScore++
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            let result = userScore;
           

        } else if (userChoice === "SCISSOR" && computerChoice === "ROCK") { computerScore++
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
           
           


        } else if (userChoice === "PAPER" && computerChoice === "ROCK") { userScore++;
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            let result = userScore;
           


        } else if (userChoice === "PAPER" && computerChoice === "SCISSOR") { computerScore++;
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
            let result = userScore;
            
        }
        else if (userChoice === computerChoice) {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, DRAW`);
        } else if (userChoice !== opt) {
            console.log('PLEASE CHOOSE ROCK, PAPER OR SCISSOR ONLY.');
        }

      
    }

    // condition that shows overall Score.
    if(userScore == computerScore){
        console.log(`You lose! AI:${computerScore}  USER: ${userScore}`)
    } else if(userScore < computerScore){
        console.log(`You lose! AI:${computerScore}  USER: ${userScore}`)
    } else{
        console.log(`You win! AI:${computerScore}  USER: ${userScore}`)
      
    }
}
playGround()

