var three = document.querySelector(".three");
var check = document.querySelector(".five");
var text = document.querySelector(".four");
var scoreElement = document.getElementById("score");

var score = 10;

function call() {
    var s = parseInt(three.value);
    var k = Math.floor(Math.random() * 10) + 1;
    if (s === k) {
        text.textContent = "You are right";
    } else {
        text.textContent = "You are wrong";
    }
    score--;
    if (score <= 0) {
        score = 10;
    }
    scoreElement.textContent = score;
    checkScore(text.textContent, score);
}

function checkScore(message, score) {
    if (message === "You are right") {
        if (score >= 8) {
            alert("You are doing a wonderful job! Your score is " + score + ". Wait for the announcement.");
        } else if (score < 5) {
            alert("Your score is too low. Refresh the page and try again.");
            location.reload();
        } else if (score >= 5 && score < 8) {
            alert("Well playing! Try to score above 8.");
        }
    
}
}

check.addEventListener('click', call);
