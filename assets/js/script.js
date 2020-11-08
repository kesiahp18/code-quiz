var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var feedbackElement = document.getElementById()

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

startButton.addEventListener('click', startQuiz)