// Create a rock paper scissor Game. player VS computer
// make a  fucntion which let user play for 5 rounds
// Display wining messsage with Score and rounds after  finishing.





// create a function which let computer choose random (ROCK, PAPER OR SCISSOR).
const opt = ["ROCK", "PAPER", "SCISSOR"]
const computerInput = () => {
    let randomIndex = Math.floor(Math.random() * opt.length)
    let computerInput = opt[randomIndex]
    return computerInput;
}
const computerChoice = computerInput();


// Ask input from user which is case insensitive.
const playerSelection = prompt("Enter Rock, Paper Or scissor? : ");
const userChoice = playerSelection.toUpperCase();


//make a function which takes both input and compete them.
const playGround = (userChoice, computerChoice) => {
   
        if (userChoice === "ROCK" && computerChoice === "SCISSOR") {
            console.log(`USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
        } else if (userChoice === "ROCK" && computerChoice === "PAPER") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);

        } else if (userChoice === "SCISSOR" && computerChoice === "PAPER") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
        } else if (userChoice === "SCISSOR" && computerChoice === "ROCK") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
        } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
        } else if (userChoice === "PAPER" && computerChoice === "SCISSOR") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
        }
        else if (userChoice === computerChoice) {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, DRAW`);
        } else if (userChoice !== opt) {
            console.log('PLEASE CHOOSE ROCK, PAPER OR SCISSOR ONLY.');
        }
    
}
playGround(userChoice,computerChoice)

