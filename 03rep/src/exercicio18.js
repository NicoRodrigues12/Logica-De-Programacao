import leia from 'readline-sync'

var notas = leia.questionInt("Quantas notas ? : ")
var qtd = 0;
var maiorsete = 0
var menorsete = 0
var soma = 0

while(qtd < notas){

var nota = leia.questionFloat("Qual a nota ? : ")


if(nota > 7){
   maiorsete++
    }else if(nota < 7){
        menorsete++
    }


var media = nota / soma


    qtd++
}

console.log("Media : " + media)
console.log("Maior que 7 : " + maiorsete)
console.log("Menor que 7 : " + menorsete)




