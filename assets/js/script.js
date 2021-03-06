var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var feedbackElement = document.getElementById('feedback')
var timerElement = document.getElementById('timer')
var highScoresElement = document.getElementById('highscores')
var viewScoresButton = document.getElementById('see-scores')
var scoreBoardView = document.getElementById('score-board')
var quizView = document.getElementById('quiz')
var goBackButton = document.getElementById('go-back')
var initialSubmit = document.getElementById('initial-submit')
var initialInput =document.getElementById('initial-input')
var scoreList = [];

//answer buttons
var firstButton = document.getElementById('button1')
var secondButton = document.getElementById('button2')
var thirdButton = document.getElementById('button3')
var fourthButton = document.getElementById('button4')

var timeInt = 0;

var score = 0;

var i = 0

var questions = [
    {
        question: 'CSS stands for:',
        choices: [
            "Calculating Social Security",
            "Creating Secret Societies",
            "Calling Special Services",
            "Cascading Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: 'Which of these is a flexbox property?',
        choices: [
            "justify-content",
            "text-align",
            "border-width",
            "background-color"
        ],
        answer: "justify-content"
    },
    {
        question: 'When are break statements used in javascript?',
        choices: [
            "In conditional statements",
            "At the end of every function",
            "In loops and switch statements",
            "Never"
        ],
        answer: "In loops and switch statements"
    },
    {
        question: 'Which HTML element will appear the largest by deafault?',
        choices: [
            "h1",
            "h2",
            "h3",
            "h4"
        ],
        answer: "h1"
    },
    {
        question: 'Why are functions used in javascript?',
        choices: [
            "To make code more readable",
            "To keep code organized",
            "It allows you to reuse code and repeat less",
            "All of these"
        ],
        answer: "All of these"
    }
]


//Function to start quiz
function startQuiz() {
    //hide the start button
    startButton.classList.add('hide');
    //show the question
    questionContainerElement.classList.remove('hide');
    //start timer
    timeLeft = 90;
    timeInt = setInterval(function() {
        if(timeLeft > 0) {
            timerElement.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            endQuiz();
        }
    }, 1000);
    //go to first question
    displayQuestions();
}

//Function to cycle through the questions
function displayQuestions(question) {
    //debugger;
    if(i < questions.length) {
        //add the question text
        questionElement.innerText = questions[i].question;
        //add the button text
        document.getElementById("button1").innerText = questions[i].choices[0]
        document.getElementById("button2").innerText = questions[i].choices[1]
        document.getElementById("button3").innerText = questions[i].choices[2]
        document.getElementById("button4").innerText = questions[i].choices[3]
    }
    //end the quiz when you run out of questions
    else {
        endQuiz();
    }
}

//Function to end the quiz
function endQuiz() {
    //stop the timer
    clearInterval(timeInt);
    //hide irrelevant content
    answerButtonsElement.classList.add('hide');
    feedbackElement.classList.add('hide');
    timerElement.classList.add('hide');
    //show final score
    questionElement.innerText = "Your score is " + score + "\nEnter your initials:";
    //create input to enter initials
    initialInput.classList.remove('hide')
    console.log(initialInput);
    //create button to submit initials
    initialSubmit.classList.remove('hide')
    questionContainerElement.classList.add("answers");
    initialSubmit.addEventListener('click', saveResults);
}

//Save score and initials to local storage
function saveResults() {
    var initials = document.querySelector("#initial-input").value;
    //reprompt if invalid
    if (!initials) {
        feedbackElement.classList.remove('hide');
        feedbackElement.innerText = "Please enter valid initials";
        return false;
    }
    if(initials.length > 3) {
        feedbackElement.classList.remove('hide');
        feedbackElement.innerText = "Please enter no more than three characters";
        return false;
    }
    localStorage.setItem("score", score);
    localStorage.setItem("initials", initials);
    addScore();
}

//Add score to High Score List
function addScore() {
    var lastScore = localStorage.getItem("score");
    var lastInitials = localStorage.getItem("initials");
    var result = document.createElement('li');
    result.innerHTML = 'Score: ' + lastScore + " Initials: " + lastInitials;
    highScoresElement.appendChild(result);
    viewHighScores();
}

//Determine if answer is correct or not
function checkAnswer(e) {
    //
    var chosenAnswer = e.target
    //if answer is correct
    if (chosenAnswer.innerText === questions[i].answer) {
        //tell the user they were correct
        feedbackElement.classList.remove('hide');
        feedbackElement.innerText = "correct";
        //increase score
        score += 20;
        i++;
        displayQuestions();
    } else {
        //tell the user they were incorrect
        feedbackElement.classList.remove('hide')
        feedbackElement.innerText = "incorrect -10 seconds";
        //take 10 seconds off time
        timeLeft -= 10;
        i++;
        displayQuestions();
    }
}

//Go back to quiz after viewing scoreboard
var goBack = function() {
    scoreBoardView.classList.add('hide')
    quizView.classList.remove('hide')
    answerButtonsElement.classList.remove('hide')
    initialSubmit.classList.add('hide')
    initialInput.classList.add('hide')
    questionContainerElement.style.display = 'block';
    timerElement.classList.remove('hide')
    //reset question rotation and score
    i = 0;
    score = 0;
    startQuiz()
}

//Function to make scoreboard visible
var viewHighScores = function() {
    scoreBoardView.classList.remove('hide')
    quizView.classList.add('hide')
    document.getElementById('go-back').addEventListener('click', goBack)
}



startButton.addEventListener('click', startQuiz)
firstButton.addEventListener('click', checkAnswer)
secondButton.addEventListener('click', checkAnswer)
thirdButton.addEventListener('click', checkAnswer)
fourthButton.addEventListener('click', checkAnswer)
viewScoresButton.addEventListener('click', viewHighScores)
goBackButton.addEventListener('click', goBack)
