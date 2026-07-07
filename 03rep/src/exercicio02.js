import leia from 'readline-sync'

var inicio = 1000;
var fim = 1999;

while(inicio <= fim){
    if(inicio % 11 === 5 ){
        console.log("NUMERO : " + inicio);

    }
    inicio++;
}