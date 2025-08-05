// Variables
let currentScore = 0;
let allScores = [];
let timeLeft = 45;
let timeIsUp = false;
const storageKey = "scores";
const currentScoreTD = document.getElementById("current-score");
const previousScoresTBody = document.getElementById("previous-scores");
const countdownText = document.getElementById("countdown");

// Export functions
export function addScore(amount){
    if(timeIsUp){
        return;
    }

    currentScore += amount;
    updateCurrentScore();
}

export function subtractScore(amount){
    if(timeIsUp){
        return;
    }

    currentScore -= amount;
    if(currentScore < 0){
        currentScore = 0;
    }
    updateCurrentScore();
}

// Normal functions
function saveScore(){
    allScores.unshift({
        score: currentScore,
        time: Date.now()
    });
    localStorage.setItem(storageKey, JSON.stringify(allScores));
}

function updateCurrentScore(){
    currentScoreTD.innerHTML = currentScore+" Points";
}

function loadPreviousScores(){
    if (localStorage.getItem(storageKey) === null) {
        return;
    }

    allScores = JSON.parse(localStorage.getItem(storageKey));
    for (const score of allScores) {
        const date = new Date(score.time);
        previousScoresTBody.innerHTML += '<tr><td>'+score.score+' Points - '+date.toLocaleString()+'</td></tr>';
    }
}

// Timer
const timer = setInterval(() => {
    countdownText.innerHTML = timeLeft+" Seconds";
    timeLeft--;

    if (timeLeft < 0) {
        countdownText.innerHTML = "Time Is Up!";
        timeIsUp = true;
        clearInterval(timer);

        // Save score if it is above zero
        if(currentScore > 0){
            saveScore();
        }
    }
}, 1000);

// Runs on load
loadPreviousScores();