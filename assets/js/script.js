var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var firstButton = document.getElementById('button1')
var secondButton = document.getElementById('button2')
var thirdButton = document.getElementById('button3')
var fourthButton = document.getElementById('button4')
var feedbackElement = document.getElementById('feedback')

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
    startButton.classList.add('hide')
    //show the question
    questionContainerElement.classList.remove('hide')
    displayQuestions();
}

//Function to cycle through the questions
function displayQuestions(question) {
    //debugger;
    //add the answer buttons text
    if(i < questions.length) {
        //add the question text
        questionElement.innerText = questions[i].question;
        //add the button text
        document.getElementById("button1").innerText = questions[i].choices[0]
        document.getElementById("button2").innerText = questions[i].choices[1]
        document.getElementById("button3").innerText = questions[i].choices[2]
        document.getElementById("button4").innerText = questions[i].choices[3]
    }
    else {
        endQuiz();
    }
}

function endQuiz() {
    answerButtonsElement.classList.add('hide')
    feedbackElement.classList.add('hide')
    questionElement.innerText = "Your score is " + score

    
}

function checkAnswer(e) {
    var chosenAnswer = e.target
    if (chosenAnswer.innerText === questions[i].answer) {
        feedbackElement.classList.remove('hide')
        feedbackElement.innerText = "correct"
        score++;
        i++;
        displayQuestions()
    } else {
        feedbackElement.classList.remove('hide')
        feedbackElement.innerText = "incorrect -5 seconds"
        score--;
        i++;
        displayQuestions()
    }
}

startButton.addEventListener('click', startQuiz)
firstButton.addEventListener('click', checkAnswer)
secondButton.addEventListener('click', checkAnswer)
thirdButton.addEventListener('click', checkAnswer)
fourthButton.addEventListener('click', checkAnswer)