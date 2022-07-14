alert("Hola! This took a long time, please grade nicely.");
console.log("hola");

// STEP 1 --> DEFINE VARIABLES
var index = 0;
var timeID;
var scoresArray = JSON.parse(localStorage.getItem("name", [])); //picking up data from local storage if it exists; [] default value --> empty array

// a) questions
var questions = [
  "Where is the correct place to insert a JavaScript file?",
  "How to write an IF statement in JavaScript?",
  "How do you round the number 9.25 to the nearest integer?",
  "How can you detect the client's browser name?",
  "Which one out of the options below is a correct declaration of a JavaScript variable?",
  "Is JavaScript case-sensitive?",
  "What is the correct way to write a JavaScript array?",
];

// b) answers
var A = [
  "The body section",
  "if i == 10 then",
  "round(9.25)",
  "navigator.appName",
  "variable dogName",
  "Yes",
  "var dogBreed = 'beagle', 'boxer','boston-terrier'",
];
var B = [
  "The head section",
  "if i = 10",
  "Math.rnd(9.25)",
  "client.navName",
  "v dogName",
  "No",
  "var dogBreeds = (1:'beagle',2:'boxer',3:'boston-terrier')",
];
var C = [
  "Both the head section and the body section are correct",
  "if (i == 10)",
  "Math.round(9.25)",
  "browser.name",
  "var-dogName",
  "I don't know",
  "var dogBreed = ['beagle', 'boxer', 'boston-terrier']",
];
var D = [
  "All answers are incorrect",
  "if i = 10 then",
  "rnd(9.25)",
  "navigator.name",
  "var dogName",
  "Neither",
  "var-dogBreed = ('beagle', 'boxer','boston-terrier')",
];

// c) correct answers
var correctA = [
  "Both the head section and the body section are correct",
  "if (i == 10)",
  "Math.round(9.25)",
  "navigator.appName",
  "var dogName",
  "Yes",
  "var dogBreed = ['beagle', 'boxer', 'boston-terrier']",
];

// d) sections
var firstPage = document.querySelector("#first-page");
var questionSection = document.querySelector("#question-section");
var savingScores = document.querySelector("#saving-scores");
var displayScoresEl = document.querySelector("#submitted-scores");
var finalScoreEl = document.querySelector("#finalScore");

// e) Header portions --> SECONDS LEFT and SCORE
var secRemaining = document.querySelector("#secsLeft"); //line 20
var secRunning = questions.length * 15;

var header = document.querySelector("#title");
var correctScore = document.querySelector("#correctAnswers");
var score = 0;
var headerScore = document.querySelector(".header-score");

// f) START button and instructions - only displayed on first page
var startButton = document.querySelector("#start-btn");
var instructions = document.querySelector(".instructions");

// g) hidden elements
var hiddenEls = document.querySelector(".questionSection");
var question = document.querySelector("#question");
var btn = document.querySelector(".btn");
var btnA = document.querySelector("#btn-A");
var btnB = document.querySelector("#btn-B");
var btnC = document.querySelector("#btn-C");
var btnD = document.querySelector("#btn-D");
var answerList = document.querySelector("#answer-list");

// STEP 2 --> Add functionality so some elements get removed while others get displayed
function startQuiz() {
  firstPage.classList.add("hideEl"); //hide first page (instructions)
  secRemaining.classList.remove("hideEl"); // then displays timer
  questionSection.classList.remove("hideEl"); // then displays question
  startTimer();
  displayQuestions();
}

function displayQuestions() {
  question.textContent = questions[index];
  btnA.textContent = A[index];
  btnB.textContent = B[index];
  btnC.textContent = C[index];
  btnD.textContent = D[index];
}
function nextQuestion(event) {
  checkAnswer(event);
  index++; // adds 1
  if (index < questions.length) {
    displayQuestions(); //only show question page when there are questions
  } else {
    endQuiz();
  }
}
btnA.addEventListener("click", nextQuestion); //when user clicks option A, then he will be directed to the next question
btnB.addEventListener("click", nextQuestion);
btnC.addEventListener("click", nextQuestion);
btnD.addEventListener("click", nextQuestion);

// When the user clicks the START button, the question page displays
//startButton.addEventListener("click", startQuiz);
function checkAnswer(event) {
  console.log(event);
  if (event.target.matches(".btn")) {
    if (correctA[index] === event.target.textContent) {
      score += 10;
    } else {
      secRunning = secRunning - 15; //substract 15s from total timer for every wrong answer
    }
  }
}

// 105s timer
startButton.addEventListener("click", startQuiz);
function startTimer() {
  timeID = setInterval(function () {
    secRunning--;
    secRemaining.textContent = secRunning;

    // when the timer hits 0
    if (secRunning === 0) {
      console.log("time is up");
      endQuiz();
    }
  }, 1000);
}

// FINAL PAGE
function endQuiz() {
  questionSection.classList.add("hideEl"); //hide question page
  savingScores.classList.remove("hideEl"); //
  correctScore.textContent = secRemaining.textContent;
  clearInterval(timeID);
}

// SEND CORRECT SCORE to LocalStorage
var textPlace = document.getElementById("textPlace");
var submitBtn = document.getElementById("submit-btn");
var storedScoresEl = document.querySelector(".storeScores"); //using form class

// var correctScore = document.querySelector("#correctAnswers");
storedScoresEl.addEventListener("submit", function (event) {
  event.preventDefault();

  scoresArray.push({
    name: textPlace.value,
    score: secRemaining.textContent,
  });

  console.log(scoresArray);
  localStorage.setItem("name", JSON.stringify(scoresArray));
  displayScores();
});

function displayScores() {
  displayScoresEl.classList.remove("hideEl");
  console.log(scoresArray);
  if (scoresArray.length > 0) {
    finalScoreEl.textContent = "";
    for (i = 0; i < scoresArray.length; i++) {
      var li = document.createElement("li");
      li.textContent = scoresArray[i].name + " - " + scoresArray[i].score;
      finalScoreEl.appendChild(li);
    }
  }
}

// PSEUDOCODING //
// 1st step - Introduction page only (title + instructions + START button). When click on START button, then I go to Question page and TIMER begins

// 2nd step - Question 1 + choices. Each choice is a button, and when one is selected, it takes me to the next question. When choice is selected, RIGHT or WRONG prompt displays

//3rd step - we hide the question page, stop timer, and then you're inputting your INITIALS with the score

//4step - After clicking SUBMIT button for INITIALS, we get High Scores page
