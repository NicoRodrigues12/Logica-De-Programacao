import leia from 'readline-sync'

export function exercicio11(){

var matriz = [
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],
[" ", " ", " ", " ", " ", " ", " ", " ",],

];

for (var i = 0; i < 8; i++){
    for ( var j = 0; j < 8; j++){
matriz[i][j] = Math.floor(Math.random() * 20)
    }
}

for(var i = 0; i < matriz.length; i++){

        for(var j = 0; j < matriz[i].length; j++){

            if(matriz[i][j] > 10){
                console.log("Maior que 10:", matriz[i][j])
            }

        }
    }

    console.log(matriz)
}

