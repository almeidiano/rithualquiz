import Madger from '../assets/img/madger.webp';
import Aika from '../assets/img/aika.webp';
import San from '../assets/img/san.webp';
import Singer from '../assets/img/singer.webp';

const ShowSelectCharacter = () => {
    const characterAttrResult = localStorage.getItem('charResult');

    const characters = [
        {id: 1, characterNick: "madger", characterName: "Madger Yasáshi", characterImg: Madger, characterAttr: "extro", characterDesc: 'Você é uma pessoa bastante <span style="color:lightgreen;">extrovertida</span>, você ama aventuras e é bastante emotivo(a). Aproximando-se bastante da personalidade do Madger.'},
        {id: 2, characterNick: "singer", characterName: "Singer Faksumi", characterImg: Singer, characterAttr: "intro", characterDesc: 'Você é uma pessoa que possui características de <span style="color:lightblue;">introversão</span>. Além disso, observador e pensativo. Aproximando-se bastante da personalidade do Singer.'},
        {id: 3, characterNick: "san", characterName: "San Majutsu-shi", characterImg: San, characterAttr: "intellectual", characterDesc: 'Você é uma pessoa com muito foco no <span style="color:orange;">intelectual</span>, você é bastante racional e até peca na questão física. Aproximando-se bastante da personalidade do San.'},
        {id: 4, characterNick: "aika", characterName: "Aika'Nu", characterImg: Aika, characterAttr: "charisma", characterDesc: 'Você é uma pessoa <span style="color:pink;">carismática</span>, você se preocupa bastante com sua família e amigos. Ademais, você possui um bom juízo. Aproximando-se bastante da personalidade da Aika.'}
    ];

    const selectedCharacter = characters.filter(obj => {
        return obj.characterAttr === characterAttrResult;
    })

        switch (selectedCharacter[0].characterAttr) {
            case "intro":
                return (<div><div className="charThumb"><img className='singer' src={Singer} /></div><div className="desc-text character"><h1 style={{color: 'lightblue'}}>{selectedCharacter[0].characterName}</h1></div><div className="desc-title title"><h3 className="highlight">Descrição</h3></div><div className="char-desc">Você é uma pessoa que possui características de <span style={{color: 'lightblue'}}>introversão</span>. Além disso, observador e pensativo. Aproximando-se bastante da personalidade do Singer.</div></div>);
            break;
            case "charisma":
                return (<div><div className="charThumb"><img className='aika' src={Aika} /></div><div className="desc-text character"><h1 style={{color: 'pink'}}>{selectedCharacter[0].characterName}</h1></div><div className="desc-title title"><h3 className="highlight">Descrição</h3></div><div className="char-desc">Você é uma pessoa <span style={{color: 'pink'}}>carismática</span>, você se preocupa bastante com sua família e amigos. Além disso, você possui um bom juízo. Aproximando-se bastante da personalidade da Aika.</div></div>);
            break;
            case "extro":
                return (<div className="charThumb"><img className='madger' src={Madger} /><div className="desc-text character"><h1 style={{color: 'green'}}>{selectedCharacter[0].characterName}</h1></div><div className="desc-title title"><h3 className="highlight">Descrição</h3></div><div className="char-desc">Você é uma pessoa bastante <span style={{color: 'green'}}>extrovertida</span>, você ama aventuras e é bastante emotivo(a). Aproximando-se bastante da personalidade do Madger.</div></div>);
            break;
            case "intellectual":
                return (<div className="charThumb"><img className='san' src={San} /><div className="desc-text character"><h1 style={{color: 'orange'}}>{selectedCharacter[0].characterName}</h1></div><div className="desc-title title"><h3 className="highlight">Descrição</h3></div><div className="char-desc">Você é uma pessoa com muito foco no <span style={{color: 'orange'}}>intelectual</span>, é bastante racional e até peca na questão física. Aproximando-se bastante da personalidade do San</div></div>);
            break;
        }
    }

    export default ShowSelectCharacter;