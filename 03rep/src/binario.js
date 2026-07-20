import leia from 'readline-sync'

var numero = leia.questionInt('digite um numero ')
console.log(numero.toString(2)+ "  binario ")
console.log(numero.toString(16)+ ' hexadecimal')
console.log(numero.toString(8)+' octonal')