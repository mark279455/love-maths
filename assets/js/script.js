// Wait for the DOM to load before running game
// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })
    runGame("addition");
})

/**
 * game loop called when script loaded and after users answer 
 * to last question has been completed
 */
function runGame(gameType) {

    // get answer-box
    let answerBox = document.getElementById("answer-box");
    // clear answer-box
    answerBox.value = "";
    // focus answer-box
    answerBox.focus();

    // generate numbers for game (less than 25)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`unknown type ${gameType}`);
        throw (`unknown type ${gameType}. Aborting`);
    }
}
/**
 * checks the answer against the first element of the array 
 * returned by calculateCorrectAnswer()
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calcAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calcAnswer[0];

    if (isCorrect) {
        alert("correct");
        incrementScore();
    } else {
        alert(`Wrong answer ${userAnswer} - answer was ${calcAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calcAnswer[1]);
}

/**
 * gets the numbers and the operator from the DOM 
 * and returns the answer
 */
function calculateCorrectAnswer() {
    let op1 = parseInt(document.getElementById("operand1").innerText);
    let op2 = parseInt(document.getElementById("operand2").innerText);
    let op = document.getElementById("operator").innerText;
    let ans = [];
    switch (op) {
        case "+":
            ans = [op1 + op2, "addition"];
            break;
        case "-":
            ans = [op1 - op2, "subtract"];
            break;
        case "*":
            ans = [op1 * op2, "multiply"];
            break;
        case "/":
            ans = [op1 / op2, "division"];
            break;
    }
    return ans;
}
/**
 * gets the current score from dom and increments it
 */
function incrementScore() {
    let correct = document.getElementById("score");
    let numCorrect = parseInt(correct.innerText) + 1;
    correct.textContent = numCorrect;
}

/**
 * gets the current wrong answers score from dom and increments it
 */
function incrementWrongAnswer() {
    let inCorrect = document.getElementById("incorrect");
    let numIncorrect = parseInt(inCorrect.innerText) + 1;
    inCorrect.textContent = numIncorrect;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    calculateCorrectAnswer();
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
    calculateCorrectAnswer();
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
    calculateCorrectAnswer();
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
    calculateCorrectAnswer();
}