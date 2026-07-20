import leia from 'readline-sync'


var numero = leia.questionInt("digite um numero em decimal : ")
var binario = ""

while(numero > 0){
    binario = (numero % 2) + binario
    numero = Math.floor(numero / 2)
console.log(binario)

}
console.log(binario)