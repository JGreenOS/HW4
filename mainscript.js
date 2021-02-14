//variables
//questions index
//questions element for questions container
//timer
//choices definition
//submit button definition
//start button definition
//enter player name
//track high score on leaderboard
//questions array here
  //title
  //choices in an array
  //correct answer


//functions

//time interval


//getQuestion


//checkAnswer


//update leaderboard
function updateLeaderboard () {
var name = nameEL.value.trim();
console.log(name);
var bestScores = JSON.parse(window.localStorage.getItem("leaderBoard")) || []

var playerScore = {
score: time,
name: name,
}

bestScores.push(playerScore);
window.localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
window.location.href - "./leaderboard.html";
};

//player submits name
submitBtn.onclick = updateLeaderboard;
startBtn.online = start;

