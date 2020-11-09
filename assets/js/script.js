var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var firstButton = document.getElementById('button1')
var secondButton = document.getElementById('button2')
var thirdButton = document.getElementById('button3')
var fourthButton = document.getElementById('button4')
var feedbackElement = document.getElementById('feedback')
var timerElement = document.getElementById('timer')

var timeInt = 0;

var score = 0;

var i = 0

var questions = [
    {
        question: 'Question 1 Here',
        choices: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "option 4"
    },
    {
        question: 'Question 2 Here',
        choices: [
            "option 1.1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "option 1"
    },
    {
        question: 'Question 3 Here',
        choices: [
            "option 1.2",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
    },
    {
        question: 'Question 4 Here',
        choices: [
            "option 1.3",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "option 4"
    },
    {
        question: 'Question 5 Here',
        choices: [
            "option 1.4",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
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
            clearInterval(timeInt);
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
    clearInterval(timeInt)
    //hide irrelevant content
    answerButtonsElement.classList.add('hide');
    feedbackElement.classList.add('hide');
    timerElement.classList.add('hide');
    //show final score
    questionElement.innerText = "Your score is " + score + "\nEnter your initials:";
    //create input to enter initials
    var initialInput = document.createElement("input");
    questionContainerElement.appendChild(initialInput);
    initialInput.classList.add("initial-input");
    console.log(initialInput)
    //create button to submit initials
    var initialSubmit = document.createElement("button");
    questionContainerElement.appendChild(initialSubmit);
    initialSubmit.classList.add("button");
    initialSubmit.innerText = "Submit";
    questionContainerElement.classList.add("answers")
    initialSubmit.addEventListener('click', saveResults)
}

function saveResults() {
    localStorage.setItem("score", score);
    //localStorage.setItem("initials", )

    var initials = document.querySelector(".initial-input").value;
    if (!initials) {
        feedbackElement.classList.remove('hide');
        feedbackElement.innerText = "Please enter valid initials"
    }
    console.log(initials)
    localStorage.setItem("initials", initials);
}

//Function to determine if answer is correct or not
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


startButton.addEventListener('click', startQuiz)
firstButton.addEventListener('click', checkAnswer)
secondButton.addEventListener('click', checkAnswer)
thirdButton.addEventListener('click', checkAnswer)
fourthButton.addEventListener('click', checkAnswer)
