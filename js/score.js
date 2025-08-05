// Variables
let currentScore = 0;
let allScores = [];
const storageKey = "scores";
const currentScoreTD = document.getElementById("current-score");
const previousScoresTBody = document.getElementById("previous-scores");

// Export functions
export function addScore(amount){
    currentScore += amount;
    updateCurrentScore();
}

export function subtractScore(amount){
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

// Runs on load
loadPreviousScores();