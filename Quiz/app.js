const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();


    // automatically scrolls to the top on submit
    scrollTo(0, 0);

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // displays result div by removing the class d-none
    result.classList.remove('d-none');
    // takes the span of result div and display the output of the score variable inside the text
    result.querySelector('span').textContent = `${score}%`;

})