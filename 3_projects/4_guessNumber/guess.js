let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const hint = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultLines');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter A Valid Number`);
    }
    else if (guess < 1) {
        alert(`Please Enter A Valid Number`);
    }
    else if (guess > 100) {
        alert(`Please Enter A Valid Number`);
    }
    else {
        prevGuess.push(guess);
        if (numGuess > 11) {
            displayGuess(guess);
            displayMassage(`Game Over! Answer Is ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMassage(`You Guessed It Right...`);
    }
    else if (guess < randomNumber) {
        displayMassage(`Too Low!`);
    }
    else if (guess > randomNumber) {
        displayMassage(`Too High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
    hint.innerHTML = `<h2>${massage}</h2>`;

}

function endGame() {
    userInput.innerHTML = "";
    userInput.setAttribute('disabled', '')//key value pair;
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start Over</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (event) => {
        randomNumber = parseInt((Math.random() * 100) + 1);
        guessSlot.innerHTML = '';
        prevGuess = [];
        numGuess = 1;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })

}

