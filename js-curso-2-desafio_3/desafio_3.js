// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculaImc(peso, altura) { 
    let imc = peso / (altura * altura);
    return imc;
}

console.log(calculaImc(98, 1.82).toFixed(2));

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaValorFatorial(numero) {
    for(let i = numero - 1; i >= 1; i--) {
        numero *= i;
    }
    return numero;
}

console.log(calculaValorFatorial(5));

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversorDolarParaReal(valor) {
    let valorDolar = 4.80;
    return valorDolar * valor;
}

console.log(conversorDolarParaReal(10));

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function arearRetangular(altura, largura) {
    let valorAreaRetangulo = altura * largura;
    let valorPerimetroRetangular = 2 * (altura * largura);
    let mensagemCalculoRetangulo = `O valor do calculo da areá de um retangulo é de ${valorAreaRetangulo} m² e o valor do perimetro é de ${valorPerimetroRetangular.toFixed(2)}`
    return mensagemCalculoRetangulo;
}

console.log(arearRetangular(5,5));

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculaAreaCircular(raio) {
    const PI = 3.14;
    let valorAreaCircular = PI * (raio * raio);
    let valorPerimetroCircular = 2 * PI * raio;
    let mensagemCalculoCirculo = `O valor do calculo da areá de um circulo é de ${valorAreaCircular} m² e o valor do perimetro é de ${valorPerimetroCircular.toFixed(2)}`;
    return mensagemCalculoCirculo;
}

console.log(calculaAreaCircular(5));

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    let multiplicacao;
    for (let i =1; i <= 10; i++){
        multiplicacao = numero * i;
        console.log(multiplicacao)
    }
}

tabuada(8);
