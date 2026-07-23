import leia from 'readline-sync'

var numero = leia.questionInt("Fala um numero ai seu tcholinha : ")

for(var i = 0; i <= 10; i++){
    
    var tabuada = numero * i
    console.log("tabuada " + i + " : " + tabuada)


}