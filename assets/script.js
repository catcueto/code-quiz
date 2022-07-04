alert("Hola! This took a long time, please grade nicely.");
console.log("hola");

// STEP 1 --> DEFINE VARIABLES
var index = 0;

// var content = document.querySelector("#quizContent");
// content.addEventListener("click", function (event){
// if (event.target.matches(""){

// })
// })

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
  "",
  "var dogBreed = ['beagle', 'boxer', 'boston-terrier']",
];
var D = [
  "All answers are incorrect",
  "if i = 10 then",
  "rnd(9.25)",
  "",
  "var dogName",
  "",
  "",
];

// c) correct answers
var correctA = [
  "Both the head section and the body section are correct",
  "if (i == 10)",
  "Math.round(9.25)",
  "navigator.appNames",
  "var dogName",
  "Yes",
  "var dogBreed = ['beagle', 'boxer', 'boston-terrier']",
];

// d) sections
var firstPage = document.querySelector("#first-page");
var questionSection = document.querySelector("#question-section");
var savingScores = document.querySelector("#saving-scores");
var finalScores = document.querySelector("#submitted-scores");

// e) Header portions --> SECONDS LEFT and SCORE
var secRemaining = document.querySelector("#secsLeft"); //line 20
var secRunning = 120;

var header = document.querySelector("#title");
var correctScore = document.querySelector("#correctAnswers");
var score = 0;

// f) START button and instructions - only displayed on first page
var startButton = document.querySelector("#start-btn");
var instructions = document.querySelector(".instructions");

// g) hidden elements
var hiddenEls = document.querySelector(".questionSection");
var question = document.querySelector("#question");
var btnA = document.querySelector("#btn-A");
var btnB = document.querySelector("#btn-B");
var btnC = document.querySelector("#btn-C");
var btnD = document.querySelector("#btn-D");
var answerList = document.querySelector("#answer-list");

// STEP 2 --> Add functionality so some elements get removed while others get displayed
function startQuiz() {
  firstPage.classList.add("hideEl"); //hide first page (instructions)
  questionSection.classList.remove("hideEl"); // then displays question

  displayQuestions();
}

function displayQuestions() {
  question.textContent = questions[index];
  btnA.textContent = A[index];
  btnB.textContent = B[index];
  btnC.textContent = C[index];
  btnD.textContent = D[index];
}
function nextQuestion() {
  index++; // adds 1
  displayQuestions();
}
btnA.addEventListener("click", nextQuestion); //when user clicks option A, then he will be directed to the next question
btnB.addEventListener("click", nextQuestion);
btnC.addEventListener("click", nextQuestion);
btnD.addEventListener("click", nextQuestion);

// When the user clicks the START button, the question page displays
//startButton.addEventListener("click", startQuiz);

// STEP 2 --> Correct or Incorrect Prompt when selecting a choice

// answerList.addEventListener("click", function (event) {
//   alert('Event"');
//   if (event.target.matches.correctA[index] === event.target.textContent) {
//     alert("It is correct");
//     score++;
//   } else {
//     alert("Incorrect!");
//     secRunning = secRunning - 5;
// });

// 120s timer
startButton.addEventListener("click", function () {
  startQuiz();
  setInterval(function () {
    secRunning--;
    secRemaining.textContent = secRunning;

    // when the timer hits 0
    if ((secRunning = 0)) {
      index = 0;

      header.textContent = "Quiz Time is Over! ";
      question.textContext =
        "Time is up! " +
        "You answered: " +
        scoreCount +
        " out of " +
        "correctly.";
    }
  }, 1000);
});

//function startTimer() {
// setInterval() calls a function at specified intervals (miliseconds)

// PSEUDOCODING //
// 1st step - Introduction page only (title + instructions + START button). When click on START button, then I go to Question page and TIMER begins

// 2nd step - Question 1 + choices. Each choice is a button, and when one is selected, it takes me to the next question. When choice is selected, RIGHT or WRONG prompt displays

//3rd step - we hide the question page, and then you're inputting your INITIALS with the score

//4step - After clicking SUBMIT button for INITIALS, we get High Scores page
