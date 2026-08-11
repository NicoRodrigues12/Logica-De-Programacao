import { CONFIGURACOES } from "../config/config.js";



export var comida = {
    x: 15,
    y: 7,
    sortear: (cobra, inimigo) => {
        var x;
        var y;
        do {
            x = Math.floor(Math.random * CONFIGURACOES.largura)
            y = Math.floor(Math.random * CONFIGURACOES.altura)


        } while (cobra.estaNaPosicao(x, y || inimigo.estaNaPosicao));

    },

    estaNaPosicao: (x, y) => {
        return comida.x === x && comida.y === y

    },

}