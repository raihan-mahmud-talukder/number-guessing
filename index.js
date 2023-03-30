const check = document.getElementsByTagName('section')[0].getElementsByTagName('button')[0]
const display = document.getElementsByTagName('section')[0].getElementsByTagName('p')[0]
const input = document.getElementsByTagName('section')[0].getElementsByTagName('input')[0]
const again = document.getElementsByTagName('header')[0].getElementsByTagName('button')[0]
const number = document.getElementsByTagName('header')[0].getElementsByTagName('div')[0]
const chance = document.getElementsByTagName('aside')[0]

let secretNumber = Math.trunc(Math.random() * 10 + 1)
let guess = 3

const displayMessage = message => {
    display.innerHTML = message
}

const chanceMessage = message => {
    chance.innerHTML = message
}
chanceMessage(`You have ${guess} guesses left`)

check.addEventListener('click', () => {
    const guessed_num = input.value
    if (guessed_num) {
        if (guessed_num > secretNumber) {
            guess--
            displayMessage('greater')
            chanceMessage(`You have ${guess} guesses left`)
        } else if (guessed_num < secretNumber) {
            guess--
            displayMessage('smaller')
            chanceMessage(`You have ${guess} guesses left`)
        } else {
            document.querySelector('body').style.background = 'green'
            number.innerHTML = guessed_num
            input.disabled = true
            check.disabled = true
            displayMessage(`Correct Number`)
            chanceMessage(`You Won!`)
        }
        if (guess == 0) {
            input.disabled = true
            check.disabled = true
            displayMessage(`Number to be guessed: ${secretNumber}`)
            chanceMessage(`You Lost!`)
        }
    } else {
        displayMessage(`Invalid Input!`)
    }
})

again.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 10 + 1)
    guess = 3
    input.value = ''
    check.disabled = false
    input.disabled = false
    document.querySelector('body').style.background = 'black'
    number.innerHTML = '?'
    displayMessage('Start Guessing...')
    chanceMessage(`You have ${guess} guesses left`)
})