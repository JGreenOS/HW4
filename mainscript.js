//Questions
var questionNum = 0;
var numCorrect = 0;

// var questions = [
//     (
//         stem: "Question 1",
//         choices: [A, B, C, D]
//         correct: B (text)
        
//         stem: "Question 2",
//     choices: [A, B, C, D]
//         correct: B(text)

//         stem: "Question 3",
//     choices: [A, B, C, D]
//         correct: B(text)

//         stem: "Question 4",
//     choices: [A, B, C, D]
//         correct: B(text)

//         stem: "Question 5",
//     choices: [A, B, C, D]
//         correct: B(text)
//     }

//Timer - 20 seconds 

var startTime = 75;

var x = setInterval(function () {
    startTime--;

document.getElementById("counter").innerHTML = startTime;

if (startTime < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED"
}
},1000);

//var timeEl = document.querySelector(".timer");
//var currentTime = 33; //document.querySelector(#remainingTime);
//var timer = document.querySelector(#startTimer);
//var remainingTime = 100;
var wrongPenalty = 10;
var correctAnswerHold = 0;

//imeEl.textContent = secondsLeft

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
            //function correctAnswerCheck(event) {
               // if Element.matches("li");

                //if (Element.textContext == questions[question array somewhere ].correct);
        //score++;
    //send to screen div "The correct answer is" + questions[ question array].correct; "Nice!"

//else
        //secondsLeft = secondsLeft - wrongPenalty;

    //send to screen div "Nope - The correct answer is" questions[ question array].correct; "You have a 10 second penalty";





//Incorrect Answer with penalty


//Leaderboard
