// var listaAlunos = ["Maria", "Joao"];
// var notas = [7, 8.8];


// var index = 0;
// var soma = notas[index] + notas[1];



// listaAlunos[0] = "Pedrinho"


// listaAlunos.push("Monark")
// listaAlunos.unshift("Ted")
// console.log(listaAlunos)



// console.log("o mais abusadinho da escola é : ",listaAlunos[1])
// console.log(listaAlunos)





// listaAlunos.pop();
// listaAlunos.shift();
// console.log(listaAlunos)


// listaAlunos.length
// console.log(listaAlunos.length)




// listaAlunos[listaAlunos.length - 1];
// listaAlunos[0];

// console.log(listaAlunos[0]);
// console.log(listaAlunos[listaAlunos.length - 1]);




// listaAlunos.push("Marcinho")
// listaAlunos.push("AuthenticGames")
// listaAlunos.push("MikeTrans")


// for (var i = 0; i < listaAlunos.length; i++){
// console.log(listaAlunos[i])

// }

// listaAlunos.forEach((item, index) => {
// console.log(item)

// })


// listaAlunos.filter((item) => {
//     if (item === "Joaozinho"){
//         return item;
//     }
// }


// )



// for (var i = listaAlunos.length - 1; i >= 0; i--){

// console.log(listaAlunos[i]);

// if(listaAlunos[i] === "AuthenticGames"){
//     console.log("Fala ai galera, beleza, mais um video aqui no canal Authentic Games")
// }


// }



import leia from 'readline-sync'


var tabuleiro = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
];

tabuleiro[1][1] = "0"
 

function desenhar(){

    for (var i = 0; i < tabuleiro[0].length; i++){
        console.log(" " + tabuleiro[i][0] + " | " + tabuleiro[i][1] + " | " + tabuleiro[i][2])
if (i < 2){
    console.log("-----------")
}

    }
}

function linha(){
    var linha = leia.questionInt("Informe a linha : ")
    var coluna = leia.questionInt("Informe a coluna : ")
    tabuleiro[linha][coluna] = (index % 2 === 0) ? "X" : "0"
}

for(var i = 0; i < 9; i++){
    linha(i)
    desenhar()
}