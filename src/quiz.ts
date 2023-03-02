import {questions} from "./modules/questions";

var i: number = 0;
const c = (el) => document.querySelector(el) as HTMLElement;

interface PlayerAttributes {
    intro: number,
    charisma: number,
    extro: number,
    intellectual: number
}

let playerAttributes: PlayerAttributes = { 
    intro: 0,
    charisma: 0,
    extro: 0,
    intellectual: 0
}

let currentQuestion = questions;
currentQuestion = questions.sort(() => Math.random() - 0.5);

function shuffleAnswers() {
    currentQuestion[i] ? currentQuestion[i].answers.sort(() => Math.random() - 0.5) : finishQuiz();
}

function finishQuiz() {
    let questionEl = c('.question');
    questionEl.remove();
    c('.btnsArea').style.flexDirection = 'initial';
    c('.btnsArea').style.justifyContent = 'center';
    c('.btnsArea').innerHTML = '<div class="lds-dual-ring"></div>';

    let charSelected = Object.keys(playerAttributes).reduce(function(a, b){ 
        return playerAttributes[a] > playerAttributes[b] ? a : b 
    });

    localStorage.setItem('charResult', charSelected);
    localStorage.setItem('playerAttributes', JSON.stringify(playerAttributes));
    window.location.href = "result.html";
}

function showQuestionAndAnswers() {
    if(c(".content").classList.contains("quiz")) {
        c(".question-text").innerText = currentQuestion[i].question;
        showAnswers();
    }
}

function updateQuestion() {
    i++;
    let currentQuestionNumber: number = parseInt(c(".question .highlight").innerHTML);
    currentQuestionNumber++;
    c(".question .highlight").innerHTML = `${currentQuestionNumber}.`;
    c(".btnsArea").innerHTML = null;
    shuffleAnswers();
    showQuestionAndAnswers();
}

function showAnswers() {
    let answers = currentQuestion[i].answers;

    answers.forEach(answer => {
        let button = document.createElement('button');
        let btnText = document.createElement('div');
        
        button.classList.add('btn');
        btnText.classList.add('btnText');

        btnText.innerText = answer.answer as string;
        button.setAttribute('data-char', answer.characteristic);
        button.appendChild(btnText);
        c(".btnsArea").appendChild(button);

        button.onclick = () => {
            let dataChar: string = button.getAttribute('data-char');
            let dataEffect: number = 5;

            Object.keys(playerAttributes).forEach(key => {
                dataChar === key ? playerAttributes[key] += dataEffect : null;
            })

            updateQuestion();
        };
    })
}

showQuestionAndAnswers();