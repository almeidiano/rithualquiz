import Footer from "./Footer.js";
import Button from "./Button.js";
import Madger from '../assets/img/blackmadger.webp';
import Aika from '../assets/img/blackaika.webp';
import San from '../assets/img/blacksan.webp';
import Singer from '../assets/img/blacksinger.webp';
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import startQuizStyle from '../assets/css/startQuiz.module.css';
import { useNavigate } from "react-router-dom";
import FetchQuestionsAndAnswers from "../components/FetchQuestionsAndAnswers.js";
import FetchResult from "./FetchResult.js";
import Quiz from "../pages/Quiz.js";
import quizStyle from '../assets/css/quiz.module.css';

const Main = ({mainTitle, mainContent, target, width, centered, dynamicWidth}) => {

  const RenderContent = ({title, desc}) => {
    return (<div className="mainContent">{title && <div className="desc-title title"><h3 class="highlight">{title}</h3></div>}<div className="desc-text">{desc}</div></div>)
  }

  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  const handleMessage = messageEvent => {
    setMessage(messageEvent.target.value);
  }
  
  function setPlayerNick(e) {
    e.preventDefault();
    localStorage.setItem("playerNick", message);
    navigate('/Quiz');
  }

  return (
    <div id={centered && quizStyle.centered_container} className='app'>
        <main className={`${centered && quizStyle.centered} ${dynamicWidth && quizStyle.dynamicWidth}`} style={{width: width}} id="container">
            <div className="content">
                <div className="main-title title"><h2>{mainTitle}</h2></div>
                <div className="main-content">
                  {mainContent && mainContent.map((element) => { return (<RenderContent title={element.title} desc={parse(element.desc)} />)})}
                  {target === "home" && <div><div className="banner"><div className="characters"><img className="singer" src={Singer} /><img className="aika" src={Aika} /></div><div className="characters"><img className="madger" src={Madger} /><img className="san" src={San} /></div></div><div className="btnArea"><Link to="/StartQuiz"><Button text="Começar Quiz" /></Link></div></div>}
                  {target === "startQuiz" && <div> <form onSubmit={setPlayerNick}><div className={startQuizStyle.question}> <input value={message} onChange={handleMessage} required="" maxLength="15" type="text" className={startQuizStyle.playerNickName}placeholder="Digite seu Apelido"/> </div><div className={startQuizStyle.startBtnArea}><Button text="Começar o teste"/></div></form></div>}
                  {target === "quiz" && <div><FetchQuestionsAndAnswers /></div>}
                  {target === "result" && <div><FetchResult /></div>}
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Main