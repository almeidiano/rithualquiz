const c = (el) => document.querySelector(el);
import Rithual_interface from './Interface.js';

export default class Quiz {
    char_selected = null;
    final_character = null;
    // dynamic question counter
    current_question_counter = 0;

    // dynamic shuffled question
    shuffled_questions = null;

    //current question and answers of all questions
    answers = null;
    current_question = null;

    highlight_counter = 1;

    playerAttributes = {
        intro: 0,
        charisma: 0,
        extro: 0,
        intellectual: 0
    }

    constructor() {
        if(!c(".content")) {
            throw new Error('Error to start quiz: no content was detected');
        }
    }

    shuffle_answers(questions) {    
        var all_answers = [];

        questions.forEach(question => {
            all_answers.push(question.answers);
        })

        for (let index = 0; index < all_answers.length; index++) {
            all_answers[index].sort(() => Math.random() - 0.5);
        }

    }

    shuffle_questions(questions) {
        this.shuffled_questions = questions.sort(() => Math.random() - 0.5);
        this.shuffle_answers(questions);
    }

    show_question_and_answers() {
        if(c(".content")) {
            try {
                c(".question-text").innerText = this.get_current_question().question;

                this.get_current_question().answers.forEach(el => {
                    c(".btnsArea").innerHTML += `<button data-effect="${el.effect}" data-char="${el.characteristic}" type="submit" onclick="updateQuestion(this)" class="quiz-btn">${el.answer}</button>`;
                });
            } catch (error) {
                this.finish_quiz();
            }
        }else{
            throw new Error('No content was detected');
        }
    }

    get_current_question() {
        return this.current_question = this.shuffled_questions[this.current_question_counter];
    }

    re_render_question_and_answers() {
        this.current_question_counter++;
        this.highlight_counter++;
        c(".btnsArea").innerHTML = null;
        c(".highlight").innerText = this.highlight_counter;
        this.show_question_and_answers();
    }

    sum_player_attributes(btn) {
        let dataChar;
        let dataEffect;
    
        dataChar = btn.getAttribute("data-char");
        dataEffect = parseInt(btn.getAttribute("data-effect"));
    
        let charEffects = new Object();
        charEffects[dataChar] = dataEffect;

        Object.keys(this.playerAttributes).forEach(attr => {
            if(Object.keys(charEffects) == attr){
                this.playerAttributes[attr] += dataEffect;
            }
        })
    }

    finish_quiz() {
        c('.internal-content').style.textAlign = 'center';
        c('.internal-content').innerHTML = Rithual_interface.spinner_loader();
        localStorage.setItem("allCharacters", JSON.stringify(this.playerAttributes));
        window.location.href = "result.html";
    }

    static get_character_highest_point(char_arr) {
        return this.char_selected = Object.keys(char_arr).reduce((a, b) => char_arr[a] > char_arr[b] ? a : b);
    }

    static get select_personality() {
        return this.char_selected;
    }

    static apply_char_result(personality, all_char) {
        all_char.forEach(character => {
            if(character.personality == personality) {
                return this.final_character = character;
            }
        })
    }

    static get get_final_character() {
        return this.final_character;
    }

    static get get_all_characters_point() {
        const characters_obj = JSON.parse(localStorage.allCharacters);

        Object.keys(characters_obj).forEach(char => {
            switch (char) {
                case 'intro':
                    c('.singerChar .percentage').innerText = `${characters_obj.intro}`;
                break;
                case 'intellectual':
                    c('.sanChar .percentage').innerText = `${characters_obj.intellectual}`;
                break;
                case 'extro':
                    c('.madgerChar .percentage').innerText = `${characters_obj.extro}`;
                break;
                case 'charisma':
                    c('.aikaChar .percentage').innerText = `${characters_obj.charisma}`;
                break;
            }
        })
    }
}