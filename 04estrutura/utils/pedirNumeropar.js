import leia from 'readline-sync'

export function pedirNumeropar(quantidade){
var numeros = []
for (var i = 0; i < quantidade; i++){
   numeros[i] = leia.questionInt("Digite um numero par : ")
}
return numeros;
}