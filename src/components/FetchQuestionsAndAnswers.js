import {useEffect, useState} from 'react';
import quizStyle from '../assets/css/quiz.module.css';
import { useNavigate } from "react-router-dom";
import fetchQuestions from '../assets/js/questions.js';

function FetchQuestionsAndAnswers() {
  const [currentQuestionCount, setCurrentQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [playerAttributes, setPlayerAttributes] = useState({intro:0,charisma:0,extro:0,intellectual:0});
  let navigate = useNavigate();

    useEffect(() => {
      async function setCurrentQuestionFunction() {
        return new Promise((resolve, reject) => {
          if(fetchQuestions()[currentQuestionCount]) {
            resolve(setCurrentQuestion(fetchQuestions(localStorage.getItem('playerNick'))[currentQuestionCount]));
          }else{
            reject(finishQuiz(), navigate('/Result'));
          }
        })
      }

      setCurrentQuestionFunction();
      console.log(playerAttributes);
    }, [currentQuestionCount, playerAttributes])

    const applyQuestion = (btn) => {
      setCurrentQuestionCount(currentQuestionCount + 1);
      sumPlayerAttributes(btn.currentTarget);
    }

    function finishQuiz() {
      let finalCharSelected = Object.keys(playerAttributes).reduce((a, b) => {
        return playerAttributes[a] > playerAttributes[b] ? a : b
      });

			localStorage.setItem("allCharacters", JSON.stringify(playerAttributes));
			localStorage.setItem("charResult", finalCharSelected);
    }

    function sumPlayerAttributes(btn) {
        let dataChar;
        let dataEffect;
    
        dataChar = btn.getAttribute("data-char");
        dataEffect = parseInt(btn.getAttribute("data-effect"));
    
        let charEffects = new Object();
        charEffects[dataChar] = dataEffect;

        Object.keys(playerAttributes).forEach(key => {
          if(Object.keys(charEffects) == key){
              setPlayerAttributes(playerAttributes => ({...playerAttributes, [key]: playerAttributes[key] += dataEffect}));
          }
        })
    }

  return (
    <div>
      {currentQuestion && <div className={quizStyle.question}><span className="highlight">{currentQuestionCount + 1}.</span><span className={quizStyle.question_text}>{currentQuestion.question}</span></div>}
      <div className={quizStyle.btnsArea}>{currentQuestion && currentQuestion.answers.map((item)=> ( <button onClick={applyQuestion}key={item.id}data-effect={item.effect}data-char={item.characteristic}className='btn'>{item.answer}</button> ))}</div>
    </div>
  )
}

export default FetchQuestionsAndAnswers