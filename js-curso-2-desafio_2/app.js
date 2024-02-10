// 1 - Criar uma função que exibe "Olá, mundo!" no console.

function mensagemInicial() {
    console.log('Olá mundo!');
}

mensagemInicial();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibeNome(nome) {
    console.log(`Olá ${nome}`)
}

exibeNome('David');

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroDeUmNumero(numero) {
    return numero * 2;
}

console.log(dobroDeUmNumero(5));

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function retornaMediaDaSoma(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(retornaMediaDaSoma(7, 5, 9));

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornaNumeroMaior(num1, num2) {
    let numeroMaior = num1 > num2 ? 'numero ' + num1 + ' é maior' : 'numero ' + num2 + ' é maior';
    return numeroMaior;
}

console.log(retornaNumeroMaior(10, 15));

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numeroMultiplicado(num1) {
    return num1 *= num1;
}

console.log(numeroMultiplicado(7))