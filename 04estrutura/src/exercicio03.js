import leia from 'readline-sync'
import { pedirNumeros } from '../utils/pedirNumeros';

var nm = [];

var numeros = pedirNumeros()

for (var i = 0; i < nm.length; i++){
if (nm[i] % 2 === 0){
    console.log(nm[i])
}


}