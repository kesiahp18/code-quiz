var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementsByClassName('answer-button')
var firstButton = document.getElementById('button1')

var questions = [
    {
        question: 'Question 1 Here',
        choices: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
    },
    {
        question: 'Question 2 Here',
        choices: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
    },
    {
        question: 'Question 3 Here',
        choices: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
    },
    {
        question: 'Question 4 Here',
        choices: [
            "option 1",
            "option 2",
            "option 3",
            "option 4"
        ],
        answer: "answer 4"
    },
    {
        question: 'Question Here',
        choices: [
            "option 1",
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
    //add the question text
    questionElement.innerText = questions[0].question;
    //add the answer buttons text
    debugger;
    for (var i = 0; i < 3; i++); {
        document.getElementById("button1").innerText = questions[i].choices[0]
        document.getElementById("button2").innerText = questions[i].choices[1]
        document.getElementById("button3").innerText = questions[i].choices[2]
        document.getElementById("button4").innerText = questions[i].choices[3]
    }

}
startButton.addEventListener('click', startQuiz)