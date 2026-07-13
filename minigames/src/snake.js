import readline from 'readline'


const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

const LARGURA = 30; // X
const ALTURA = 15; // Y

var cobraX = [10, 9, 8, 7];
var cobraY = [7, 7, 7, 7];

var comidaX = Math.floor(Math.random() * LARGURA);
var comidaY = Math.floor(Math.random() * ALTURA);

var pontos = 0;
var direcao = "d";
var gameOver = false;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdout.write("\x1b[?25l");
process.stdin.on("keypress", (str, key) => {
    console.log(str);
    console.log(key);

if(key.name === "w" && direcao !== "w"){
    direcao = "w"
}

if(key.name === "a" && direcao !== "a"){
    direcao = "a"
}

if(key.name === "d" && direcao !== "d"){
    direcao = "d"
}

if(key.name === "s" && direcao !== "s"){
    direcao = "s"
}

    if(key.name === "q"){
        process.exit();
    }
})

function desenhar() {
  var tela = "";
  tela += "=== JOGO DA COBRINHA ===\n";
  tela += "W A S D = MOVER | Q = sair\n";
  tela += "Pontos " + pontos + "\n\n";

  for (var y = -1; y <= ALTURA; y++) {
    var linha = "";

    for (var x = -1; x <= LARGURA; x++) {
      if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
        linha += PAREDE;
      } else if (x === comidaX && y === comidaY) {
        linha += COMIDA;
      } else {
        var desenhouCobrinha = false;

        for (var i = 0; i < cobraX.length; i++) {
          if (cobraX[i] === x && cobraY[i] === y) {
            linha += (i === 0) ? CABECA : CORPO;
            desenhouCobrinha = true;
          }
        }

        if (desenhouCobrinha === false) {
          linha += VAZIO
        }
      }
    }
    tela += linha + "\n"
  }

  process.stdout.write("\x1b[H" + tela);
}

function sortear(){
var posicao = false;

while(posicao === false){
comidaX = Math.floor(Math.random() * LARGURA)
comidaY = Math.floor(Math.random() * ALTURA)

posicao = true;
for(var i = 0; i < cobraX.length; i++){
    if(cobraX[i] === comidaX && cobraY[i] === comidaY){
posicao = false;
    }
}

}

}

function movimento(){
var novaposicaox = cobraX[0];
var novaposicaoy = cobray[0];

switch(direcao){
    case "w":
        novaposicaoy--;
}

}

sortear()
desenhar();