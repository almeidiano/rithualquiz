import Button from "../components/Button.js";
import {Link} from 'react-router-dom';
import resultStyle from '../assets/css/result.modules.css';
import ShowSelectCharacter from '../components/ShowSelectCharacter.js';
import CharacterPercentage from '../components/CharacterPercentage.js';

function FetchResult() {
  return (
    <div>
        <ShowSelectCharacter />
        <CharacterPercentage />
        <div className="btnsArea">
            <Link to='/StartQuiz'><Button text='Jogar novamente' /></Link>
            <Link to='/'><Button text='Voltar ao inicio' /></Link>
        </div>
    </div>
  )
}

export default FetchResult