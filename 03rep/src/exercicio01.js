import leia from 'readline-sync'

var numero = leia.questionFloat("Digite um numero : ")

var qtd = 0;
while (qtd <= numero) {
    console.log("Numero : " + qtd);
    qtd++;
}