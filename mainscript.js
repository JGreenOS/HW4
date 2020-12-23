//Questions

var questions = [
    {
        "stem": "What type of variable cannot be reassigned?",
        "choice": ["var", "let", "const", "none"],
        "correct": "const"
    },

    {
        "stem": "Timers in Javascript are typically measured in which unit of time?",
        "choices": ["minutes", "seconds", "flops", "milliseconds"],
        "correct": "milliseconds"
    },

    {
        "stem": "What common structure does the DOM resemble?",
        "choices": ["house", "shed", "shrub", "tree"],
        "correct": "tree"
    },

    {
        "stem": "What company developed Javascript?",
        "choices": ["Apple", "Microsoft", "IBM", "Netscape"],
        "correct": "Netscape"
    },

    {
        "stem": "Which of these are not a Javascript Event Handler?",
        "choices": ["onclick", "onmouseover", "onsubmit", "continue"],
        "correct": "continue"
    }
]

//Timer 

var startTime = 75;

var x = setInterval(function () {
    startTime--;

    document.getElementById("counter").innerHTML = startTime;

    if (startTime < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED"
    }
}, 1000);

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var timer = document.querySelector("#startTimer");
var secondsLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");



//if (wrongPenalty === 0) function timer() {
// wrongPenalty = setInterval(function () {
// secondsLeft--;
// remainingTime.textContext = "Time Remaining" + secondsLeft;

//if (secondsLeft = 0) {
// clearInterval(remainingTime);

// currentTime.textContext = "Time is Up";
// }
//  }


//Stop-start timer




//Time remaining


//Render questions and choices to codequiz page
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++)
        var userQuestion = questions[questionIndex].stem;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
}

userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li")
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
})

function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = documentCreateElement("div")
        createDiv.setAttribute("id", "createDiv");
    }

    if (element.textContent === questions[questionIndex].answer) {
        score++
        createDiv.textContent = "Correct! The answer is " + questions[questionIndex].answer;
    }
    else {
        secondsLeft = secondsLeft - penalty;
        createDiv.textContent = "Incorrect. The correct answer is" + questions[questions.Index].answer;
    }
}
questionIndex++;

if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "The End  . Your score is " + score;

}
else {
    render(questionIndex);

}
questionsDiv.appendChild(createDiv);

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Complete!"
    questionsDiv.appendChild(createH1);

    var createnewP = document.createElement("p");
    createnewP = setAttribute("id", "createnewP");
    questionsDiv.appendChild(createNewP);


}
if (secondsLeft >= 0) {
    var timeremaining = secondsLeft;
    var createPend = document.createElement("p")
    clearInterval(holdInterval);
    createnewP.textContent = "Your final score is: " + timeremaining;
    questionsDiv.appendChild(createPend);
}

  

// function render(questionsIndex)
// {
//     questionDiv.innerHTML = "my infor here";
//     ulCreate.innerHTML = "";

// for (var i =0 ; i < totalQuestions; i++);
// var userQuestion = questions[questionsIndex].stem;
// var userChoices = questions[questionsIndex].choices;
// questionDiv.textContext = userQuestion;

// userChoices.forEach(function (newItem) {
// var listItem = document.createElement("li");
//     listItem.textContext = newItem;
//     questiondiv.appendChild(ulCreate);
//     ulCreate.appendChild(listItem);
//     listItem.addEventListener("click", compare));
// }

    //loadQuestion(currentQuestion);

    //    testChoice.forEach (function (newItem) {
    //        var listItem = document.createElement ("li");
    //        listItem.textContent = newItem;
    //        testChoice.appendChild(ulCreate);
    //        ulCreate.appendChild(listItem);
    //        listItem.addEventListener("click", (correctAnswerCheck));
    //    }
    // } , 


//function send(questionNum) {
    //clear screen, keep timer

    //for (var = i, i < 0, i++) {  //oops through questions
        //question stem presented here//
        //choices associated with question stem//
        //var userQuestion = questions[array here].stem;
        //var userChoices = questions[array here].choices;
        //send to questions area on html = userQuestion;

        //userChoices.forEach(function (newItem) {  //presents all choices from choices//
            //var listItem = document.createElement("li");
            //listItem.textContext = newItem;
            //send this to choices area on html = 
            //listItem.addEventListener("click", (correctAnswerCheck));





            //Correct Answer and Wrong Answer check
         //   function correctAnswerCheck(event) {
               // if Element.matches("li");

                //if (Element.textContext == questions[question array somewhere ].correct);
        //score++;
    //send to screen div "The correct answer is" + questions[ question array].correct; "Nice!"

//else
        //secondsLeft = secondsLeft - wrongPenalty;

    //send to screen div "Nope - The correct answer is" questions[ question array].correct; "You have a 10 second penalty";





//Incorrect Answer with penalty


//Leaderboard