document.write(`Welcome to the Number Guessing Game! <br> I am thinking of a number between 1 and 10`)

const secretNumber = Math.trunc(Math.random() * 10 + 1)
let guess = 3
let loop = false

while (!loop) {
    console.log(`You have ${guess} guesses left`)
    let guessed_num = Number(prompt('Guess a number:'))
    if (guessed_num != NaN) {
        if (guessed_num > secretNumber) {
            guess--
            console.log(`higher`)
        } else if (guessed_num < secretNumber) {
            guess--
            console.log(`Lower`)
        } else {
            console.log(`Correct Number`)
            loop = true
        }
        if (guess == 0) {
            console.log(`You Loose`)
            loop = true
            console.log(`Number to be guessed:`, secretNumber)
        }
    } else {
        loop = true
        console.log(`Invalid Input!`)
    }
}