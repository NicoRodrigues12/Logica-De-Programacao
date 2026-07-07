import leia from 'readline-sync'

const valor = 0.33;
var preco = 1;
var inicio = 1;
var fim = 500;
while(inicio <= fim){
console.log(`O valor da copia : ${(valor * preco).toFixed(2)}`)
inicio++;
preco++;

}
