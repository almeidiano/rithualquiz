import Main from "../components/Main.js";

function StartQuiz () {
    const mainContent = [
        {desc: 'Digite seu apelido para deixar o teste customizado.'}
    ]

    return(
        <Main width='auto' centered={true} target="startQuiz" mainTitle="(૨¡Ƭષαℓ Quiz - Teste" mainContent={mainContent} />
    )
    }
    
    export default StartQuiz;