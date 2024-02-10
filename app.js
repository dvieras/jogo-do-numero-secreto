let numeroSecreto = geraraNumeroSecreto();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value;
    
}

function geraraNumeroSecreto () {
    return parseInt(Math.random() * 10 + 1);
}





