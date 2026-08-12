import leia from 'readline-sync'

var assentos = [];

for (var i = 0; i < 20; i++) {
    var assento = {
        numero: (i < 10) ? "A" + (i + 1) : "B" + (i + 1),
        ocupado: false,
        tipo: (i % 5 === 0) ? "Preferencial" : "Normal",
    }

    assentos.push(assento)
    console.log(assentos)
}