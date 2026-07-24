import leia from 'readline-sync'

export function exercicio08(){

    var vetorum = []
    var vetordois = []
    var vetortres = []
    var vetorkleiton = []

for(var i = 0; i < 9; i++){
vetorum[i] = Math.floor(Math.random() * 100)
vetordois[i] = Math.floor(Math.random() * 100)
vetortres[i] = Math.floor(Math.random() * 100)
}

for(var i = 0; i < 9; i++){

    if(i < 3){
        vetorkleiton[i] = vetorum[i]
    }
    else if(i < 6){
        vetorkleiton[i] = vetordois[i]
    }
    else{
        vetorkleiton[i] = vetortres[i]
    }

}

console.log("vetor um : " + vetorum)
console.log("vetor dois : " + vetordois)
console.log("vetor tres : " + vetortres)
console.log("vetor final : " + vetorkleiton)
}



exercicio08()