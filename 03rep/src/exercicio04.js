import leia from 'readline-sync'

var menorValor;
var maiorValor;

// var quantidade = 15;
// var contador = 1;

// while (contador <= quantidade) {
//     var numero = leia.questionFloat("DIGITE O NUMERO : " + contador + ": ");
//     contador++;
// }

for(var contador = 1; contador <= 15; contador++){
    var numero = leia.questionInt("Digite o numero " + contador + ": ");
    
    if(contador === 1){
        menorValor = numero;
        maiorValor = numero;
    }else if(numero > maiorValor){
        maiorValor = numero
        
    }else if(numero < menorValor){
        menorValor = numero
    }
}
console.log("Maior valor : " + maiorValor)
console.log("Menor valor : " + menorValor)