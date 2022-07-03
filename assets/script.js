alert("Hola! This took a long time, please grade nicely.");

// DEFINE VARIABLES
// a) Header portions --> SECONDS LEFT and SCORE
var secRemaining = document.querySelector("#secLeft"); //line 20
var correctScore = document.querySelector("#correctAnswers");

// b) Instructions and START button
var startButton = document.querySelector("#start-btn");
var instructions = document.querySelector(".instructions");
var hiddenEls = document.querySelector(".questionSection");

// When the user clicks the START button, timer starts running

//Questions and Answers
function displayQuiz () {
  questions = ["Where is the correct place to insert a JavaScript file?",
    "How to write an IF statement in JavaScript?",
    "How do you round the number 9.25 to the nearest integer?",
    "How can you detect the client's browser name?",
    "Which one out of the options below is a correct declaration of a JavaScript variable?",
    "Is JavaScript case-sensitive?",
    "What is the correct way to write a JavaScript array?",
  ];
  //ANSWERS
    A = ["The body section", "if x == 10 then", "round(9.25)","navigator.appName","variable dogName", "Yes", "var dogBreed = 'beagle', 'boxer','boston-terrier'"];
    B = ["The head section", "if x = 10", "Math.rnd(9.25)","client.navName","v dogName", "No", "var dogBreeds = (1:'beagle',2:'boxer',3:'boston-terrier')"];
    C = ["Both the head section and the body section are correct", "if (x == 10)","Math.round(9.25)", "browser.name", "var-dogName", "", "var dogBreed = ['beagle', 'boxer', 'boston-terrier']"];
    D = ["All answers are incorrect", "if x = 10 then", "rnd(9.25)", "", "var dogName", "", ""];
};


  /* <div id='question'>  Where is the correct place to insert a JavaScript file?</div><div id="answers-container">
  <ul id='answers-list'>
    <button class='btn' id="btn-1">The body section</button>
    <br>
      <button class='btn' id="btn-2">The head section</button>
      <br>
        <button class='btn' id="btn-3">Both the head section and the body section are correct</button>
        <br>
        </ul>
        <button id="next-btn" class="next-btn btn">Next</button>

      </div>

      <div id="question" class="question-class">  How to write an IF statement in JavaScript?</div>
      <div id="answers-container">
        <ul id='answers-list'>
          <button class='btn' id="btn-1">if x == 10 then</button>
          <br>
            <button class='btn' id="btn-2">if x = 10</button>
            <br>
              <button class='btn' id="btn-3"> if (x == 10)</button>
              <br>
                <button class='btn' id="btn-4">if x = 10 then</button>
              </ul>
              <button id="next-btn" class="next-btn btn">Next</button>
            </div>

            <div id="question" class="question-class"> How do you round the number 9.25 to the nearest
              integer?</div>
            <div id="answers-container">
              <ul id='answers-list'>
                <button class='btn' id="btn-1">round(9.25)</button>
                <br>
                  <button class='btn' id="btn-2"> Math.rnd(9.25)</button>
                  <br>
                    <button class='btn' id="btn-3"> Math.round(9.25)</button>
                    <br>
                      <button class='btn' id="btn-4">rnd(9.25)</button>
                    </ul>
                    <button id="next-btn" class="next-btn btn">Next</button>
                  </div>

                  <div id="question" class="question-class"> How can you detect the client's browser name?</div>
                  <div id="answers-container">
                    <ul id='answers-list'>
                      <button class='btn' id="btn-1">navigator.appName</button>
                      <br>
                        <button class='btn' id="btn-2">client.navName</button>
                        <br>
                          <button class='btn' id="btn-3"> browser.name</button>
                          <br>
                          </ul>
                          <button id="next-btn" class="next-btn btn">Next</button>
                        </div>
                        <div id="question" class="question-class">Which one out of the options below is a correct declaration of a JavaScript variable?</div>
                        <div id="answers-container">
                          <ul id='answers-list'>
                            <button class='btn' id="btn-1"> variable dogName</button>
                            <br>
                              <button class='btn' id="btn-2">v dogName</button>
                              <br>
                                <button class='btn' id="btn-3">var-dogName</button>
                                <br>
                                  <button class='btn' id="btn-4">var dogName</button>
                                  <br>
                                  </ul>
                                  <button id="next-btn" class="next-btn btn">Next</button>
                                </div>
                                <div id="question" class="question-class">Is JavaScript case-sensitive?</div>
                                <div id="answers-container">
                                  <ul id='answers-list'>
                                    <button class='btn' id="btn-1">Yes</button>
                                    <br>
                                      <button class='btn' id="btn-2">No</button>
                                      <br>
                                      </ul>
                                      <button id="next-btn" class="next-btn btn">Next</button>
                                    </div>
                                    <div id="question" class="question-class">What is the correct way to write a JavaScript array?</div>
                                    <div id="answers-container">
                                      <ul id='answers-list'>
                                        <button class='btn' id="btn-1"> var dogBreed = 'beagle', 'boxer','boston-terrier'</button>
                                        <br>
                                          <button class='btn' id="btn-2">var dogBreeds = (1:'beagle',2:'boxer',3:'boston-terrier')</button>
                                          <br>
                                            <button class='btn' id="btn-3">var dogBreed = ['beagle', 'boxer', 'boston-terrier']</button>
                                            <br>
                                              <button class='btn' id="btn-3"> var dogBreed = 1 = ('beagle'), 2 = ('boxer'), 3 = ('boston-terrier')</button>
                                              <br>
                                              </ul>
                                              <button id="finish-btn" class="finish-btn btn">Submit Scores</button>
                                            </div>
                                          </div></></></></></></></></></></></></></></></></></></></></></></> */
}
