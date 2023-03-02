const form = document.querySelector("form");

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let input = document.querySelector("input").value;
        let error = document.querySelector("form p") as HTMLParagraphElement;
        const userNick: string = input.trim(); 
        localStorage.setItem("playerNick", userNick);

        if(localStorage.getItem('playerNick')) {
            window.location.href = "quiz.html";
        }else{
            error.innerText = 'Ocorreu um erro ao adicionar seu nick';
        }
    })
}