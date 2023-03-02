import Main from "../components/Main.js";

function Home () {

    const mainContent = [
        {title: 'Descrição', desc: 'Este "Quiz" tem o intuito de estimar qual personagem você seria no universo de <a target="_blank" href="https://tapas.io/series/Rithual_manga/info">(૨¡Ƭષαℓ</a> a partir de 20 questões sobre sua personalidade & acontecimentos específicos. Mostre esse teste para os seus amigos e conheça mais esse universo!'},
        {title: 'Informações Secundárias', desc: 'Aviso: <span>nesse quiz, há perguntas pessoais que podem gerar desconforto.</span> Além disso, <span>nenhuma informação inserida aqui será divulgada.</span> Layout inspirado nos <a target="_blank" href="https://04elementos.github.io/4elementos/">4Elementos</a>.'}
    ]

    return (
        <Main target="home" mainTitle="(૨¡Ƭષαℓ Quiz" mainContent={mainContent} />
    )
    }
    
    export default Home;