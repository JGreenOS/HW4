
//holding my questions in an arrayt with the correct answer
var myQuestions = [
    {
        question: "What type of variable cannot be reassigned?",
        answers: {
            a: "var",
            b: "let",
            c: "const",
            d: "none"
        },
        correctAnswer: 'b'
    },

    {
        question: "Timers in Javascript are typically measured in which unit of time?",
        answers: {
            a: "minutes",
            b: "seconds",
            c: "flops",
            d: "milliseconds"
        },
        correctAnswer: 'd'
    },
    {
        question: "What common structure does the DOM resemble?",
        answers: {
            a: "house",
            b: "shed",
            c: "shrub",
            d: "tree"
        },
        correctAnswer: 'd'
    },

    {
        question: "What company developed Javascript?",
        answers: {
            a: "Apple",
            b: "Microsoft",
            c: "IBM",
            d: "Netscape"
        },
        correctAnswer: 'd'
    },

    {
        question: "Which of these are not a Javascript Event Handler?",
        answers: {
            a: "onclick",
            b: "onmouseover",
            c: "onsubmit",
            d: "continue"
        },
         correctAnswer: 'd'
    },


  ];
  
  //aligning to html
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var counter = 0;
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
   
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[counter].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+0+'" value="'+letter+'">'
              + letter + ': '
              + questions[counter].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[counter].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      
  
        // find selected answer
        //userAnswer = (answerContainers[counter].querySelector([name=question'+counter+']:checked')||{}).value;)
        
        // if answer is correct
        if(userAnswer===questions[counter].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[counter].style.color = 'red';
        }
      
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);

    
    // on submit, show results
    submitButton.onclick = function(){
      counter++;
      showResults(questions, quizContainer, resultsContainer);
      generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    }
  
  }

  //counter
 var startTime= 75;

 var x = setInterval(function () {
   startTime--;
  
   document.getElementById("time").innerText = startTime;
 
   if (startTime < 0) {
     clearInterval(x);
     document.getElementById("time").innerHTML = "EXPIRED"
   }
 }, 1000 );

