// Wait for the DOM to load before running game
// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }
            else{
                let gameType=this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * game loop called when script loaded and after users answer 
 * to last question has been completed
 */
 function runGame(gameType){
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
     }
    else{
        alert(`unknown type ${gameType}`);
        throw (`unknown type ${gameType}. Aborting`);
    }
        
}
/**
 * checks the answer against the first element of the array 
 * returned by calculateCorrectAnswer()
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calcAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calcAnswer[0];

    if(isCorrect){
        alert("correct");
    } else{
        alert(`Wrong answer ${userAnswer} - answer was ${calcAnswer[0]}`);
    }

    runGame(calcAnswer[1]);
}

/**
 * gets the numbers and the operator from the DOM 
 * and returns the answer
 */
function calculateCorrectAnswer(){
    let op1 = parseInt(document.getElementById("operand1").innerText);
    let op2 = parseInt(document.getElementById("operand2").innerText);
    let op = document.getElementById("operator").innerText;
    let ans = [];
    switch(op)
    {
        case "+":
            ans.push(op1+op2);
            ans.push("addition");
            break;
        case "-":
            ans = op1-op2;
            break;
        case "*":
            ans = op1*op2;
            break;
        case "/":
            ans = op1/op2;
            break;
    }
    return ans;
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    calculateCorrectAnswer();
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivideQuestion(){

}

