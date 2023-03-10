// Create a rock paper scissor Game. player VS computer
// make a  fucntion which let user play for 5 rounds
// Display wining messsage with Score and rounds after  finishing.









//make a function which takes both input and compete them.
const playGround = () => {
    for (i = 0; i < 5; i++) {


        // create a function which let computer choose random (ROCK, PAPER OR SCISSOR).
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
        let user = 1;
        let ai = 0;
        let win;

        if (userChoice === "ROCK" && computerChoice === "SCISSOR") {
            console.log(`USER : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            win = user+1
            console.log(win)

        } else if (userChoice === "ROCK" && computerChoice === "PAPER") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
            win = ai+1
            console.log(win)


        } else if (userChoice === "SCISSOR" && computerChoice === "PAPER") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            win = user+1
            console.log(win)

        } else if (userChoice === "SCISSOR" && computerChoice === "ROCK") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
            win = ai+1
            console.log(win)


        } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, USER wins this round.`);
            win = user+1
            console.log(win)


        } else if (userChoice === "PAPER" && computerChoice === "SCISSOR") {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, AI wins this round.`);
            win = ai+1
            console.log(win)
        }
        else if (userChoice === computerChoice) {
            console.log(`User : ${userChoice}  AI: ${computerChoice}, DRAW`);
        } else if (userChoice !== opt) {
            console.log('PLEASE CHOOSE ROCK, PAPER OR SCISSOR ONLY.');
        }

    }
}
playGround()

