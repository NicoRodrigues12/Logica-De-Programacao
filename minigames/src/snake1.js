const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

const LARGURA = 30; // X plano cartesiano
const ALTURA = 15; // Y plano cartesiano

var cobraX = [10];
var cobraY = [7];

var comidaX = Math.floor(Math.random() * LARGURA)
var comidaY = Math.floor(Math.random() * ALTURA)

var pontos = 0;
var direcao = "D";
var gameOver = false;

function desenhar(){
var tela = "";
tela += "=== JOGO DA COBRONA ==="
tela += "W A S D - comandos de movimento | Q - Sair do jogo"
tela += "pontos " + pontos + "\n\n";


for(var y = -1; y <= ALTURA; y++ ){
var linha = "";
    
for (var x = -1; x <= LARGURA ; x++){

if(x === -1 || x === LARGURA || y === -1 || y === ALTURA){
linha += PAREDE;
   }else if(x === comidaX && y === comidaY){
    linha+= COMIDA;
   }else{
    linha += VAZIO;
   }  
  }
  tela += linha + "\n" 
 }

process.stdout.write("\x1b[H" + tela);



}

desenhar();