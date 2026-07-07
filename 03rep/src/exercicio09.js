import leia from 'readline-sync'

var contador = 0;

var numero = -1;
while(numero !== 0){
var numero = leia.questionInt("Digite um numero (digite 0 para o fim do codigo) : ")

if(numero > 100 && numero < 200){
contador++;
}
}

console.log("Numeros entre 100 e 200 : " + contador)