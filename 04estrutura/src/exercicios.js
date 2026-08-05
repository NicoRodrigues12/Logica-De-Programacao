import leia from 'readline-sync'
import { pedirNumeros } from '../utils/pedirNumeros.js';

export function exercicio01() {

    var numeros = pedirNumeros(10);
    var numeros2 = [];

    for (var i = 0; i < numeros.length; i++) {
    var vetor = numeros[i] * 5
    numeros2[i] = vetor

        console.log(numeros[i]);
        console.log(numeros2[i]);
    }
}

exercicio01();


export function exercicio02(){
    import { pedirNumeros } from '../utils/pedirNumeros.js'

export function exercicio02(){

console.log("----- EXERCICIO 02 -----")
var resultado = []
var renkrenk = pedirNumeros(5)


for(var i = 0; i < renkrenk.length; i++){
    
    
    var soma = renkrenk[i] 
    resultado[i] = soma
    console.log(resultado[i])
}



}


exercicio02()
}
//
