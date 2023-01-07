// Wait for the DOM to load before running game
// Get button elements and add event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("submit");
            }
            else{
                let gameType=this.getAttribute("data-type");
                alert(gameType);
            }
        })
    }
})

/**
 * game loop called when script loaded and after users answer 
 * to last question has been completed
 */
 function runGame(){
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivideQuestion(){

}

