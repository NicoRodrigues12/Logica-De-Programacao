import leia from 'readline-sync';

var maiorAltura
var menorAltura

var somaAlturas = 0;
var somaMulheres = 0;

var quantidadeMulheres = 0;
var quantidadeHomens = 0;

for(var contador = 1; contador <= 10; contador++){
    var altura = leia.questionInt("Digite a altura da pessoa " + contador + ": ");
    var gen = leia.keyInSelect(["Homem", "Mulher",])
    if(contador === 1){
        menorAltura = altura
        maiorAltura = altura
    }else if(altura > maiorAltura){
        maiorAltura = altura
        
    }else if(altura < menorAltura){
        menorAltura = altura
    }

      somaAlturas += altura;
    
    if (gen == 1) {
        somaMulheres += altura;
        quantidadeMulheres++;
    } else {
        quantidadeHomens++;
    }

    var mediamulheres = somaMulheres / quantidadeMulheres
    var mediapopulacao = somaAlturas / 10

    var percentualHomens = (quantidadeHomens / 10) * 100;

}

console.log("Maior altura : " + maiorAltura)
console.log("Menor altura : " + menorAltura)
console.log("Media altura mulheres : " + mediamulheres)
console.log("Media da população : " + mediapopulacao)
console.log("Percentual de homens : " + percentualHomens + "%")