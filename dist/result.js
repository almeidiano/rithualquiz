import { playerNick } from "./modules/questions.js";
const c = (el) => document.querySelector(el);
const characters = [
    { id: 1, characterNick: "madger", characterName: "Madger Yasáshi", characterImg: 'src/img/characters/madger.webp', characterAttr: "extro", characterDesc: 'Você é uma pessoa bastante <span style="color:lightgreen;">extrovertida</span>, você ama aventuras e é bastante emotivo(a). Aproximando-se bastante da personalidade do Madger.' },
    { id: 2, characterNick: "singer", characterName: "Singer Faksumi", characterImg: 'src/img/characters/singer.webp', characterAttr: "intro", characterDesc: 'Você é uma pessoa que possui características de <span style="color:lightblue;">introversão</span>. Além disso, observador e pensativo. Aproximando-se bastante da personalidade do Singer.' },
    { id: 3, characterNick: "san", characterName: "San Majutsu-shi", characterImg: 'src/img/characters/san.webp', characterAttr: "intellectual", characterDesc: 'Você é uma pessoa com muito foco no <span style="color:orange;">intelectual</span>, você é bastante racional e até peca na questão física. Aproximando-se bastante da personalidade do San.' },
    { id: 4, characterNick: "aika", characterName: "Aika'Nu", characterImg: 'src/img/characters/aika.webp', characterAttr: "charisma", characterDesc: 'Você é uma pessoa <span style="color:pink;">carismática</span>, você se preocupa bastante com sua família e amigos. Além disso, você possui um bom juízo. Aproximando-se bastante da personalidade da Aika.' },
];
let backToQuiz = c('.backToQuiz');
let homeBtn = c('.home');
const charResult = localStorage.getItem("charResult");
charResult === null ? window.location.href = "startquiz.html" : c(".playerNick").innerText = playerNick;
characters.forEach(character => {
    if (character.characterAttr == charResult) {
        const finalCharacter = character;
        c("img").src = finalCharacter.characterImg;
        c(".character h1").innerHTML = finalCharacter.characterName;
        switch (character.characterNick) {
            case "madger":
                c(".char-thumb").classList.add("madger");
                c(".character h1").style.color = "lightgreen";
                break;
            case "singer":
                c(".char-thumb").classList.add("singer");
                c(".character h1").style.color = "lightblue";
                break;
            case "san":
                c(".char-thumb").classList.add("san");
                c(".character h1").style.color = "orange";
                break;
            case "aika":
                c(".char-thumb").classList.add("aika");
                c(".character h1").style.color = "pink";
                break;
        }
        c(".char-desc").innerHTML = finalCharacter.characterDesc;
    }
});
const allCharacters = JSON.parse(localStorage.getItem("playerAttributes"));
var allCharactersLessMore;
Object.keys(allCharacters).forEach(char => {
    if (allCharacters[char] >= 100) {
        allCharacters[char] = 100;
    }
    else if (allCharacters[char] <= 0) {
        allCharacters[char] = 0;
    }
    allCharactersLessMore = allCharacters;
});
Object.keys(allCharactersLessMore).forEach(char => {
    switch (char) {
        case 'intro':
            c('.singerChar .percentage').innerText = allCharactersLessMore.intro;
            break;
        case 'intellectual':
            c('.sanChar .percentage').innerText = allCharactersLessMore.intellectual;
            break;
        case 'extro':
            c('.madgerChar .percentage').innerText = allCharactersLessMore.extro;
            break;
        case 'charisma':
            c('.aikaChar .percentage').innerText = allCharactersLessMore.charisma;
            break;
    }
});
backToQuiz.onclick = () => {
    localStorage.removeItem('charResult');
    localStorage.removeItem('playerAttributes');
    window.location.href = "quiz.html";
};
homeBtn.onclick = () => {
    localStorage.removeItem('charResult');
    localStorage.removeItem('playerAttributes');
    window.location.href = "index.html";
};
