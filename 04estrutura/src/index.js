import leia from 'readline-sync'
import { exercicio03 } from './explicacao2.js'
import { exercicio01 } from './exercicio01.js';
import { exercicio06 } from './exercicio06.js';


console.log("----- LISTA DE EXERCICIOS -----")
var opcao = leia.keyInSelect([" EXERCICIO 01", " EXERCICIO 02", " EXERCICIO03", " EXERCICIO 04", " EXERCICIO 05", " EXERCICIO 06", " EXERCICIO07", " EXERCICIO 08", " EXERCICIO 09", " EXERCICIO 10", " EXERCICIO11", " EXERCICIO 12", " EXERCICIO 13"]);

switch(opcao){

case 0 : 
exercicio01();
break;
case 1 :
   exercicio02()
    break;
    case 2 :
   exercicio03();
        
        break;
  case 3 :
    exercicio04();
    break;
    case 4 :
        exercicio05();
        break;
        case 5 :
            exercicio06()
            break;
            case 6 : 
            exercicio07()
break;
        }