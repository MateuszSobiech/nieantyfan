const questions = [
    {
        title: 'Mądre pytanie',
        text: 'Mądra odpowiedź',
    },
];

const createFAQDiv = () => {
    const question = questions[0];
    return `<div class="col-lg-4 mt-3">
                <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${question.title}</h5>
                        <p class="card-text">${question.text}</p>
                        </div>
                </div>
        </div>`;
};

const createFAQ = () => {
    const container = document.querySelector('#faq-container');

    container.innerHTML = '';

    for (let index = 0; index < 13; index++) {
        container.innerHTML += createFAQDiv();
    }
};

createFAQ();
