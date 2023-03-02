import {useNavigate} from 'react-router-dom';
import Main from "../components/Main.js";
import { useEffect } from 'react';

function Result () {
    const playerNick = localStorage.getItem('playerNick');
    let navigate = useNavigate();
    
    const mainContent = [
        {desc: `<h3>Olá, <span>${playerNick}</span>!</h3>`},
        {desc: 'Você tem muitas semelhanças com o(a) personagem:'},
    ]

    if(playerNick) {
        return (
            <Main width='60%' dynamicWidth={true} target="result" mainTitle="(૨¡Ƭષαℓ Quiz" mainContent={mainContent} />
        )
    }else{
        navigate('/StartQuiz');
    }
}

export default Result;