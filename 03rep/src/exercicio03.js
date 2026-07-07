import leia from 'readline-sync'


var quantidade = 15;
var contador = 1;

while (contador <= quantidade) {
    
    var numero = leia.questionInt("Digite um numero : " + contador + ": ")
   contador++;


}