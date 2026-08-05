import leia from "readline-sync";

import { exercicio01 } from "./exercicio01.js";
import { exercicio02 } from "./exercicio02.js";
import { exercicio03 } from "./exercicio03.js";
import { exercicio04 } from "./exercicio04.js";
import { exercicio05 } from "./exercicio05.js";
import { exercicio06 } from "./exercicio06.js";
import { exercicio07 } from "./exercicio07.js";
import { exercicio08 } from "./exercicio08.js";
import { exercicio09 } from "./exercicio09.js";
import { exercicio10 } from "./exercicio10.js";
import { exercicio11 } from "./exercicio11.js";
import { exercicio12 } from "./exercicio12.js";

const qnt =  13 
var opcoes = []
for (var i = 1; i<qnt; i++){
    opcoes.push('exercicio ' + String(i).padStart(2,"0"))
}

var opcao = leia.keyInSelect(opcoes, "selecione uma opcao")


switch (opcao) {
    case 0:
        exercicio01();
        break;

    case 1:
        exercicio02();
        break;

    case 2:
        exercicio03();
        break;

    case 3:
        exercicio04();
        break;

    case 4:
        exercicio05();
        break;

    case 5:
        exercicio06();
        break;

    case 6:
        exercicio07();
        break;

    case 7:
        exercicio08();
        break;

    case 8:
        exercicio09();
        break;

    case 9:
        exercicio10();
        break;

    case 10:
        exercicio11();
        break;

    case 11:
        exercicio12();
        break;

    default:
        console.log("Nenhum exercício selecionado.");
}