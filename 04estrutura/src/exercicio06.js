import leia from 'readline-sync'
import { gerarNumero, gerarNumeroMaior } from '../utils/gerarNumero.js'

var minimas = []
var maximas = []


function exercicio06(){

for(var dia = 0; dia < 30; dia++){

var valormenor = Math.floor(Math.random() * 24) + 12
var valormaior = Math.floor(Math.random() * 24) + 12

if(valormenor < valormaior){
    minimas[dia] = valormenor
    maximas[dia] = valormaior
}else {
minimas[dia] = valormaior
maximas[dia] = valormenor

}

}
console.log("Temperaturas minimas : ", minimas)
console.log("Temperaturas maximas : ", maximas)

}

exercicio06();