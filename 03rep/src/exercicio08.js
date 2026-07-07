import leia from 'readline-sync'

var qtd = 6;
var contador = 1;
var impares = 0;
var pares = 1;


while (contador <= qtd) {
    var numero = leia.questionInt("Numero" + contador + " : ")
    
    contador++;
if(numero % 2 === 0){
    var pares = pares * numero
} else {
impares = impares + numero
}

}

console.log("Produto : " + pares + " Soma : " + impares)