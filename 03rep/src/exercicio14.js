import leia from 'readline-sync'

var numero = leia.questionInt("Digita um numero ai : ")
var numerodig;
var contador = 1;

while(contador <= numero){
console.log("tabuada : " + (numero * contador))

numerodig = numero
contador++;
}