import leia from 'readline-sync'

var numero = leia.questionInt("Digita um numero ai : ")
var qtd = 10;
var contador = 1;

while(contador <= qtd){
console.log("tabuada : " + (numero * contador))
contador++
}