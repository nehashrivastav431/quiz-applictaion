const quizContainer = document.querySelector('.quiz-container');
const submitButton = document.querySelector('#submit-quiz');
const resultElement = document.querySelector('#result');

let score = 0;

submitButton.addEventListener('click', () => {
    const answers = [];
    const questions = quizContainer.querySelectorAll('.question');

    questions.forEach((question) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        let answer = null;

        radios.forEach((radio) => {
            if (radio.checked) {
                answer = radio.value;
            }
        });

        answers.push(answer);
    });

    const correctAnswers = ['Paris', 'Jupiter'];
    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
});