document.write(`Welcome to the Number Guessing Game! <br> I am thinking of a number between 1 and 10`)

const secretNumber = Math.trunc(Math.random() * 10 + 1)
let guess = 3
let loop = false

while (!loop) {
    document.write(`You have ${guess} guesses left`)
    let guessed_num = Number(prompt('Guess a number:'))
    if (guessed_num != NaN) {
        if (guessed_num > secretNumber) {
            guess --
            document.write(`higher`)
        } else if (guessed_num < secretNumber) {
            guess ++
            document.write(`Lower`)
        } else document.write(`Correct Number`)
        if (guess == 0) {
            document.write(`You Loose`)
            loop = true
        }
        document.write(`Number to be guessed:`, secretNumber)
    } else {
        loop = true
        document.write(`Invalid Input!`)
    }
}