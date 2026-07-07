import leia from 'readline-sync'

var contador = 10;


while (contador <= 1000) {
    console.log("Contador : " + contador)
    contador++;

    if(contador === 501){
        contador = 900
    }
}
