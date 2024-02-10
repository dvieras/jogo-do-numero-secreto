// 1 - Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

// 2 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titutlo = document.querySelector('h1');
titutlo.innerHTML = 'Hora do desafio';

// 3 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function botaoConsole() {
    console.log('O botão foi clicado');
}

// 4 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function botaoAlert() {
    alert('Eu amo JS <3')
}

// 5 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`)
}

// 6 - Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.


function botaoSoma() {
    let num1 = parseInt(prompt('Informe o primeiro número: '));
    let num2 = parseInt(prompt('Informe o segundo número: '));
    let soma = num1 + num2;
    alert(`Soma dos valores é : ${soma}`);
}

