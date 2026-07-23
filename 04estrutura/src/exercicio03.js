import leia from 'readline-sync'
import { pedirNumeros } from "../utils/pedirNumeros.js";

export function exercicio03(){

var nm = [];

var numeros = pedirNumeros(5)

for (var i = 0; i < numeros.length; i++){
if (numeros[i] % 2 === 0){
    nm[i] = numeros[i]
}

console.log(nm[i])
}
}

exercicio03()