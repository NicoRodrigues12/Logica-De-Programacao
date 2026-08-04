import leia from 'readline-sync'

export function exercicio10(){

var vetor = []

for (var i = 0; i < 4; i++){

var numero = leia.questionInt("Digite um numero par : ")

while(numero % 2 != 0){
    console.log("Numero Invalido, digite um numero par : ")

numero = leia.questionInt("Digite um numero par : ")
}
vetor[i] = numero
}

console.log(vetor)

}

exercicio10()