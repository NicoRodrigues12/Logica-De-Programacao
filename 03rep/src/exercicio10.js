import leia from 'readline-sync'

var valentina = 150;
var joao = 140;
var anos = 0;

while(joao < valentina){
   joao += 3
   valentina += 2
   anos++;
console.log(anos + "ano - valentina : " + valentina + "cm - Joaozinho : " + joao + "cm" )
}

console.log("Joao ficará mais alto que Valentina em " + anos + " anos")