let currentQuestionindex = 0;
let timerId;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialsElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

let questions = [
  {
      stem: "What type of variable cannot be reassigned?",
      choice: ["var", "let", "const", "none"],
      correct: "const"
  },

  {
      stem: "Timers in Javascript are typically measured in which unit of time?",
      choices: ["minutes", "seconds", "flops", "milliseconds"],
      correct: "milliseconds"
  },

  {
      stem: "What common structure does the DOM resemble?",
      choices: ["house", "shed", "shrub", "tree"],
      correct: "tree"
  },

  {
      stem: "What company developed Javascript?",
      choices: ["Apple", "Microsoft", "IBM", "Netscape"],
      correct: "Netscape"
  },

  {
      stem: "Which of these are not a Javascript Event Handler?",
      choices: ["onclick", "onmouseover", "onsubmit", "continue"],
      correct: "continue"
  }
]

var time = questions.length * 10;
function timeInterval () {
time --;
timerElement.textContent = time; 
if (time <= 0)
  quizEnd();
}

function start () {
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hidden");
  questionsElement.removeAttribute("class");
  timerid = setInterval(timeInterval, 1000);
  timerElement.textContent = time;

  getQuestion();
}

function getQuestion () {
let currentQuestion = questions[currentQuestionIndex];
let stem = document.getElementById("question-stem")
stem.textContent = currentQuestion.stem;

choicesElement.innerHTML = " ";

currentQuestion.choice.forEach((choice, index) => {
let answerOption = document.createElement("button");
answerOption.setAttribute("class", "choice");
answerOption.setAttribute("value", choice);
answerOption.textContext = index + i + " " + choice;
answerOption.onclick = questionClick;
choicesElement.appendChild(answerOption);

});
}

function questionClick () {
 if (this.value !==questions[CurrentQuestionIndex].correct) {
   time = time -10;
   if (time < 0) {
     time = 0;
}
timerElement.textContent = time;

feedbackElement.textContent = "Incorrect";
 }
 else {
   feedbackElement.textContent = "Correct";
 }

 feedbackElement.setAttribute("class", "feedback");
 currentQuestionindex ++;

 if(currentQuestionindex === questions.length) {
   quizEnd();
 }else {
   getQuestion();
 }
}
function quizEnd () {
  clearInterval(timerId);

alert ("Quiz over");

let final = document.getElementById("final-score");
final.textContent = time;
let end = document.getElementById("end-screen");
end.removeAttribute("class");

questionsElement.setAttribute("class", "hidden")
}

startButton.onclick = start; 
