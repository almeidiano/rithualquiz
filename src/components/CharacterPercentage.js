function CharacterPercentage() {
    const allCharacters = JSON.parse(localStorage.getItem('allCharacters'));
    
    return (
        <div>
            <div class="desc-title title"><h3 class="highlight">Porcentagem dos personagens</h3></div>
            <div class="desc-text"><div class="all-characters"><div class="characters"><div class="character singerChar"><span>Singer</span><div class="percentage">{allCharacters.intro+"%"}</div></div><div class="character sanChar"><span>San</span><div class="percentage">{allCharacters.intellectual+"%"}</div></div></div><div class="characters final"><div class="character madgerChar"><span>Madger</span><div class="percentage">{allCharacters.extro+"%"}</div></div><div class="character aikaChar"><span>Aika</span><div class="percentage">{allCharacters.charisma+"%"}</div></div></div></div></div>
        </div>
    )
}

export default CharacterPercentage