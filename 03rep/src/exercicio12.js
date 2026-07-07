import leia from 'readline-sync'

var tentativas = 0;


var jogo = leia.keyInSelect(["PvP", "PvE"])


if(jogo == 0){
var senha = "1234"
var digitesenha
    while(digitesenha !== senha){
digitesenha = leia.question("Digite a senha : ")
tentativas++;

if(digitesenha === senha){
        console.log("Acertou!!!, voce demorou " + tentativas + " tentativas")
    }else

    if(digitesenha > senha){
        console.log("A senha eh menor!, tente novamente!")
    }else{
        console.log("A senha eh maior!, tente novamente!")
    }
        }
 

}else if(jogo == 1){
var numeroMagico = Math.floor(Math.random() * 1000) + 1;

var tentativa;
var qtdTentativas = 0;

do {
    tentativa = leia.questionInt("Digite sua tentativa: ");
    qtdTentativas++;
    tentativa;

    if(tentativa > numeroMagico) {
        console.log("O número mágico MENOR!!")
    }else if(tentativa < numeroMagico){
        console.log("O número mágico é MAIOR!!")
    } else {
        console.log("Parabéns!! Você acertou o número mágico!!!");
        console.log("E só precisou de " + qtdTentativas + " tentativas!");
    }
}while(tentativa !== numeroMagico);
}