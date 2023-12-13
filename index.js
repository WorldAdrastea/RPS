//Creates variables using Ids from HTML
const compChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playButton = document.getElementById('play')
const possibleChoices = ['rock', 'paper', 'scissors']

//Creates the choices variable and runs forEach() method on each choice clicked and turns on button
const choices = document.getElementsByName('choice')
choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false
    });
});

//When the play button is clicked it attaches your choice to the "Your Choice:" heading and randomizes a choice for Computer and resets the board
playButton.addEventListener('click', (e) => {
    const buttonsArray = Array.from(choices)
    const selected = buttonsArray.filter((b) => b.checked)
    addTextToSpan(yourChoice, selected[0].id)
    const randomChoice = generateComputerChoice()
    showResult(selected[0].id, randomChoice)
    e.target.disabled = true;
    choices.forEach((b) => {
        b.checked = false;
    })
})

//Function to add the choice as text
function addTextToSpan(spanControl, text) {
    spanControl.textContent = text
}

//Function to randomly pick a choice for computer
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const computerChoice = possibleChoices[randomNumber]
    addTextToSpan(compChoice, possibleChoices[randomNumber])
    return computerChoice
}

//Function to show the result by comparing each choice and displaying the result
function showResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        addTextToSpan(resultDisplay, 'tied')
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            addTextToSpan(resultDisplay, 'You lost')
        }
        else if (computerChoice == 'scissors') {
            addTextToSpan(resultDisplay, 'You won')
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            addTextToSpan(resultDisplay, 'You lost')
        }
        else if (computerChoice == 'rock') {
            addTextToSpan(resultDisplay, 'You won')
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            addTextToSpan(resultDisplay, 'You lost')
        }
        else if (computerChoice == 'paper') {
            addTextToSpan(resultDisplay, 'You won')
        }
    }
}