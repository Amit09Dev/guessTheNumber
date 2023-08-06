
let numberGuess = document.getElementById('number-guess')
let guess = []


let correctNumber = getRandomNumber()


// loading a random number and restart on load
window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

// getting the user input and showing results
function playGame() {
    let numb = numberGuess.value
    displayResult(numb)
    saveGuessHistory(numb)
    displayHistory()
}

// showing the user input history
function displayResult(numberGuess) {

    if (numberGuess > correctNumber) {
        showNumberAbove()
    }
    else if (numberGuess < correctNumber) {
        showNumberBelow()
    }
    else if (numberGuess == correctNumber) {
        showYouWon()
    }
}

// restarting the game
function initGame() {
    correctNumber = getRandomNumber()
    resetResultContent()
    guess = []
    displayHistory()
}

// result content ''
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

// genrating random number
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100 + 1)
    return randomNumber
}

// saving user input
function saveGuessHistory(number) {
    guess.unshift(number)
    console.log(guess)
    numberGuess.value = ''
}

// displaying history
function displayHistory() {
    let list = "<ul class='list-group'>";
    for (let i = 0; i < guess.length; i++) {
        list += `<li class='list-group-item'>You guessed ${guess[i]}</li>`
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}

// displaying alert
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}
// creating alert 
function showYouWon() {
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text)

    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}
