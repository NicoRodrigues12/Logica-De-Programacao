import leia from 'readline-sync'

export function exercicio09(){

var vetorum = []

for(var i = 0; i < 10; i++){
vetorum[i] = Math.floor(Math.random() * 10)
}



for(var i = 0; i < vetorum.length; i++){

for(var j = i + 1; j < vetorum.length; j++){
if(vetorum[i] == vetorum[j]){
    console.log("Duplicado : ", vetorum[i])
}
}

}
console.log(vetorum)
}



exercicio09()