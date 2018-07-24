
var userChoice;
var score = [];
var points = 0;
var currentQuestion = 0;
var questions = [];
var radioButtons = document.getElementsByName("choices");

var defaultQuestions = [
    {
        question: "Why is it good?",
        choice1: "I don't know",
        choice2: "You tell me!",
        choice3: "How come?",
        choice4: "This is hard",
        correct: "A"//same with radio value

    },
    {
        question: "What is kryptonite?",
        choice1: "I don't know",
        choice2: "You tell me!",
        choice3: "How come?",
        choice4: "This is hard",
        correct: "B"

    },
    {
        question: "Why is your name weird",
        choice1: "I don't know",
        choice2: "You tell me!",
        choice3: "How come?",
        choice4: "This is hard",
        correct: "D"

    }, {
        question: "This is a question?",
        choice1: "I don't know",
        choice2: "You tell me!",
        choice3: "How come?",
        choice4: "This is hard",
        correct: "C"

    }, {
        question: "This is a question?",
        choice1: "I don't know",
        choice2: "You tell me!",
        choice3: "How come?",
        choice4: "This is hard",
        correct: "C"

    }

]



//localStorage.setItem("storedquestions", questions);
//var storeditems= JSON.parse(localStorage.getItem("storedquestions"));
//JSON.parse( localStorage.getItem("storedquestions"));

function populateQuestions() {
    
  // populate with default questions
  questions = defaultQuestions;
  // if local storage contains questions, add to question set
  if(localStorage.getItem("questions")){
      var storedQuestions = localStorage.getItem("questions");
      for(var i = 0; i < storedQuestions.length; i++){
          questions.push(storedQuestions[i]);
      }
  }}
function startGame() {
    populateQuestions();
    displayQuestions();
}


function getAnswer() {
    var haveAnswer = false;
    if (currentQuestion < questions.length-1) {
        for (i = 0; i < radioButtons.length; i++) {

            if (radioButtons[i].checked) {

                userChoice = radioButtons[i].value;
                radioButtons[i].checked = false;
                checkAnswer();
                summary();
                haveAnswer = true;
                break;
            }

        }
        if (haveAnswer == true) {

        }
        else {
            window.alert("Please choose an answer");
        }
    }
    else {
        //end of game
        document.getElementById("quiz").style.display = "none";
        document.getElementsByTagName("footer")[0].style.display = "block";
    }

}

function checkAnswer() {



    if (userChoice == questions[currentQuestion].correct) {
        score[currentQuestion] = 1;
        points++;
    }
    else {
        score[currentQuestion] = 0;
    }

    displayQuestions();
    currentQuestion++;

    
 
}

function summary() {
    var summaryWords = document.createElement("p");
    var ifCorrect = document.createElement('span');

    var word = false;
    //-1 because for last question
    if (score[currentQuestion - 1] == 1) {

        summaryWords.innerHTML = "Question " + (currentQuestion) + ": Correct";
        summaryWords.style.color = 'green';

    }
    else {

        summaryWords.innerHTML = "Question " + (currentQuestion) + ": Incorrect";
        summaryWords.style.color = 'red';
    }
    summaryWords.style.fontSize = '55%';
    //  document.getElementById("quiz").style.display="none";
    document.getElementsByTagName("h1")[0].appendChild(summaryWords);

    //  document.getElementById("quiz").appendChild(summaryWords);
}
function displayQuestions() {
    $("#question").html(questions[currentQuestion].question);
    $("#choiceA").html(questions[currentQuestion].choice1);
    $("#choiceB").html(questions[currentQuestion].choice2);
    $("#choiceC").html(questions[currentQuestion].choice3);
    $("#choiceD").html(questions[currentQuestion].choice4);
    $("#quizStatus").html("Question " + (currentQuestion + 1) + " out of " + questions.length);
}

document.body.onload = startGame();
$("#submit").click(getAnswer);
